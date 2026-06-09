const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-production';
const ADMIN_USERNAMES = (process.env.ADMIN_USERNAMES || 'dogoraga').split(',').map((name) => name.trim().toLowerCase()).filter(Boolean);
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'colorguessa.db');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Unable to open database:', err);
    process.exit(1);
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS highscores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    mode TEXT NOT NULL,
    score INTEGER NOT NULL,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, mode),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

function createToken(user) {
  return jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: '7d'
  });
}

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' });
    req.user = payload;
    next();
  });
}

function isAdminUser(user) {
  if (!user || !user.username) return false;
  return ADMIN_USERNAMES.includes(String(user.username).toLowerCase());
}

function authorizeAdmin(req, res, next) {
  if (!isAdminUser(req.user)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
}

app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password are required.' });
  const normalizedUsername = String(username).trim();
  if (!normalizedUsername) return res.status(400).json({ error: 'Invalid username.' });

  const passwordHash = await bcrypt.hash(password, 10);
  const stmt = db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)');
  stmt.run(normalizedUsername, passwordHash, function (err) {
    if (err) {
      if (err.message.includes('UNIQUE')) {
        return res.status(409).json({ error: 'Username already exists.' });
      }
      return res.status(500).json({ error: 'Unable to create account.' });
    }
    const token = createToken({ id: this.lastID, username: normalizedUsername });
    res.json({ token, username: normalizedUsername });
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password are required.' });
  const normalizedUsername = String(username).trim();

  db.get('SELECT id, username, password_hash FROM users WHERE username = ?', [normalizedUsername], async (err, user) => {
    if (err) return res.status(500).json({ error: 'Unable to log in.' });
    if (!user) return res.status(401).json({ error: 'Invalid credentials.' });
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) return res.status(401).json({ error: 'Invalid credentials.' });
    const token = createToken({ id: user.id, username: user.username });
    res.json({ token, username: user.username });
  });
});

app.get('/api/session', authenticate, (req, res) => {
  res.json({ username: req.user.username });
});

app.get('/api/highscores', authenticate, (req, res) => {
  db.all('SELECT mode, score FROM highscores WHERE user_id = ?', [req.user.userId], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Unable to load high scores.' });
    const result = { name: 0, hex: 0, rgb: 0, hsl: 0 };
    rows.forEach((row) => {
      result[row.mode] = row.score;
    });
    res.json(result);
  });
});

app.post('/api/highscores', authenticate, (req, res) => {
  const { mode, score } = req.body;
  if (!mode || typeof score !== 'number') {
    return res.status(400).json({ error: 'Mode and score are required.' });
  }
  db.get('SELECT score FROM highscores WHERE user_id = ? AND mode = ?', [req.user.userId, mode], (err, row) => {
    if (err) return res.status(500).json({ error: 'Unable to save high score.' });
    if (!row) {
      db.run('INSERT INTO highscores (user_id, mode, score) VALUES (?, ?, ?)', [req.user.userId, mode, score], function (insertErr) {
        if (insertErr) return res.status(500).json({ error: 'Unable to save high score.' });
        res.json({ mode, score });
      });
    } else if (score > row.score) {
      db.run('UPDATE highscores SET score = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ? AND mode = ?', [score, req.user.userId, mode], function (updateErr) {
        if (updateErr) return res.status(500).json({ error: 'Unable to update high score.' });
        res.json({ mode, score });
      });
    } else {
      res.json({ mode, score: row.score });
    }
  });
});

app.get('/api/admin/report', authenticate, authorizeAdmin, (req, res) => {
  db.get('SELECT COUNT(*) AS userCount FROM users', (userErr, userRow) => {
    if (userErr) return res.status(500).json({ error: 'Unable to load user summary.' });
    db.get('SELECT COUNT(*) AS totalEntries FROM highscores WHERE mode LIKE ?', ['%|expert'], (totalErr, totalRow) => {
      if (totalErr) return res.status(500).json({ error: 'Unable to load leaderboard summary.' });
      db.all('SELECT mode, COUNT(*) AS count FROM highscores WHERE mode LIKE ? GROUP BY mode', ['%|expert'], (modeErr, modeRows) => {
        if (modeErr) return res.status(500).json({ error: 'Unable to load mode breakdown.' });
        db.all('SELECT user_id, mode, score, updated_at FROM highscores WHERE mode LIKE ? ORDER BY score DESC LIMIT 10', ['%|expert'], (topErr, topRows) => {
          if (topErr) return res.status(500).json({ error: 'Unable to load top entries.' });
          res.json({
            users: { total: userRow.userCount },
            leaderboard: {
              totalExpertEntries: totalRow.totalEntries || 0,
              expertEntriesByMode: modeRows.reduce((acc, item) => {
                acc[item.mode] = item.count;
                return acc;
              }, {}),
              topEntries: topRows
            }
          });
        });
      });
    });
  });
});

app.get('/api/admin/refresh', authenticate, authorizeAdmin, (req, res) => {
  res.json({ refreshed: true, message: 'Leaderboard refresh requested. Scores are derived from current database rows.' });
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`ColorGuessa server started on http://localhost:${PORT}`);
});
