const colorData = [
  { name: "Cerulean", hex: "#2A9DF4" },
  { name: "Mint", hex: "#3EB489" },
  { name: "Coral", hex: "#FF6B6B" },
  { name: "Lavender", hex: "#9F7AEA" },
  { name: "Sunset", hex: "#F59E0B" },
  { name: "Aqua", hex: "#22D3EE" },
  { name: "Emerald", hex: "#10B981" },
  { name: "Rose", hex: "#F43F5E" },
  { name: "Slate", hex: "#64748B" },
  { name: "Peach", hex: "#FBCFE8" },
  { name: "Teal", hex: "#14B8A6" },
  { name: "Violet", hex: "#8B5CF6" },
  { name: "Amber", hex: "#F59E0B" },
  { name: "Magenta", hex: "#D946EF" },
  { name: "Ocean", hex: "#0369A1" },
  { name: "Citrine", hex: "#EAB308" },
  { name: "Plum", hex: "#7C3AED" },
  { name: "Sapphire", hex: "#0EA5E9" },
  { name: "Moss", hex: "#4ADE80" },
  { name: "Blush", hex: "#FB7185" }
];

const swatch = document.getElementById("colorSwatch");
const targetLabel = document.getElementById("targetLabel");
const targetName = document.getElementById("targetName");
const scoreValue = document.getElementById("scoreValue");
const timerValue = document.getElementById("timerValue");
const streakValue = document.getElementById("streakValue");
const messageText = document.getElementById("messageText");
const newGameButton = document.getElementById("newGameButton");
const diffVeryEasyButton = document.getElementById("diffVeryEasyButton");
const diffEasyButton = document.getElementById("diffEasyButton");
const diffMediumButton = document.getElementById("diffMediumButton");
const diffHardButton = document.getElementById("diffHardButton");
const diffExpertButton = document.getElementById("diffExpertButton");
const modeNameButton = document.getElementById("modeNameButton");
const modeHexButton = document.getElementById("modeHexButton");
const modeRgbButton = document.getElementById("modeRgbButton");
const modeHslButton = document.getElementById("modeHslButton");
const answerInput = document.getElementById("answerInput");
const submitAnswerButton = document.getElementById("submitAnswerButton");
const optionsPanel = document.querySelector(".options");
const highScoreValue = document.getElementById("highScoreValue");
const settingsButton = document.getElementById("settingsButton");
const settingsModal = document.getElementById("settingsModal");
const timerSelect = document.getElementById("timerSelect");
const saveSettingsButton = document.getElementById("saveSettingsButton");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const soundToggle = document.getElementById("soundToggle");
const helpButton = document.getElementById("helpButton");
const helpModal = document.getElementById("helpModal");
const closeHelpButton = document.getElementById("closeHelpButton");
const themeToggleButton = document.getElementById("themeToggleButton");
const authButton = document.getElementById("authButton");
const logoutButton = document.getElementById("logoutButton");
const authModal = document.getElementById("authModal");
const authForm = document.getElementById("authForm");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authUsername = document.getElementById("authUsername");
const authUsernameRow = document.getElementById("authUsernameRow");
const authConfirmPassword = document.getElementById("authConfirmPassword");
const authConfirmPasswordRow = document.getElementById("authConfirmPasswordRow");
const authTitle = document.getElementById("authTitle");
const authHelpText = document.getElementById("authHelpText");
const authTogglePasswordButton = document.getElementById("authTogglePasswordButton");
const authLoginTab = document.getElementById("loginTab");
const authSignupTab = document.getElementById("signupTab");
const authMessage = document.getElementById("authMessage");
const authToggleLink = document.getElementById("authToggleLink");
const authSubmitButton = document.getElementById("authSubmitButton");
const closeAuthButton = document.getElementById("closeAuthButton");
const startPageButton = document.getElementById("startPageButton");
const accountSettingsButton = document.getElementById("accountSettingsButton");
const accountModal = document.getElementById("accountModal");
const accountUsername = document.getElementById("accountUsername");
const accountEmail = document.getElementById("accountEmail");
const accountLeaderboardPublic = document.getElementById("accountLeaderboardPublic");
const accountThemeSelect = document.getElementById("accountThemeSelect");
const accountStats = document.getElementById("accountStats");
const accountStatsContent = document.getElementById("accountStatsContent");
const saveAccountButton = document.getElementById("saveAccountButton");
const closeAccountButton = document.getElementById("closeAccountButton");
const accountChangePasswordButton = document.getElementById("accountChangePasswordButton");
const accountCurrentPassword = document.getElementById("accountCurrentPassword");
const accountNewPassword = document.getElementById("accountNewPassword");
const deleteAccountButton = document.getElementById("deleteAccountButton");
const playPageButton = document.getElementById("playPageButton");
const infoButton = document.getElementById("infoButton");
const leaderboardPageButton = document.getElementById("leaderboardPageButton");
const startPage = document.getElementById("startPage");
const gamePage = document.getElementById("gamePage");
const infoPage = document.getElementById("infoPage");
const leaderboardPage = document.getElementById("leaderboardPage");
const leaderboardTableBody = document.getElementById("leaderboardTableBody");
const leaderboardMessage = document.getElementById("leaderboardMessage");
const leaderboardAllButton = document.getElementById("leaderboardAllButton");
const leaderboardNameButton = document.getElementById("leaderboardNameButton");
const leaderboardHexButton = document.getElementById("leaderboardHexButton");
const leaderboardRgbButton = document.getElementById("leaderboardRgbButton");
const leaderboardHslButton = document.getElementById("leaderboardHslButton");
const startGameButton = document.getElementById("startGameButton");
const viewHelpButton = document.getElementById("viewHelpButton");
const backToHomeButton = document.getElementById("backToHomeButton");
const backToHomeButtonFromLeaderboard = document.getElementById("backToHomeButtonFromLeaderboard");

const difficultyByMode = {
  name: "hard",
  hex: "hard",
  rgb: "hard",
  hsl: "hard"
};

let currentDifficulty = "hard";
let currentMode = "hex";
let globalLeaderboardMode = "all";
let targetColor = null;
let score = 0;
let streak = 0;
let timeLeft = 60;
let countdown = null;
let gameActive = false;
let highScores = {
  name: 0,
  hex: 0,
  rgb: 0,
  hsl: 0
};
let sessionRounds = 0;
let sessionCorrect = 0;
let sessionStartTime = null;
let timerSetting = 60;
let soundEnabled = true;
let currentTheme = 'dark';
let activeModal = null;
let previousFocus = null;
let currentUser = null;
let currentUserId = null;
let authMode = 'login';

const SUPABASE_URL = 'https://yqdwjcpxgnomiixzykdl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZHdqY3B4Z25vbWlpeHp5a2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NDgzMzgsImV4cCI6MjA5NjMyNDMzOH0.OV23y1pl8I_J9zT9JTv6h9GBIBpe_WiPYGbzgtUgU8g';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateAuthUI() {
  if (currentUser) {
    authButton.textContent = `Hi, ${currentUser}`;
    authButton.setAttribute('aria-label', `Signed in as ${currentUser}`);
    logoutButton.classList.remove('hidden');
    if (accountSettingsButton) accountSettingsButton.classList.remove('hidden');
  } else {
    authButton.textContent = 'Sign in';
    authButton.setAttribute('aria-label', 'Sign in to save your progress');
    logoutButton.classList.add('hidden');
    if (accountSettingsButton) accountSettingsButton.classList.add('hidden');
  }
}

async function handleAuthSubmit(event) {
  if (event && typeof event.preventDefault === 'function') event.preventDefault();
  const email = (authEmail.value || '').trim();
  const pass = authPassword.value || '';
  const username = (authUsername.value || '').trim();
  const confirmPass = authConfirmPassword ? authConfirmPassword.value || '' : '';

  clearAuthMessage();
  if (!email || !pass) { setAuthMessage('Enter email and password.', 'danger'); return; }
  if (authMode === 'signup') {
    if (!username) { setAuthMessage('Choose a username for your account.', 'danger'); return; }
    if (pass.length < 8) { setAuthMessage('Password must be at least 8 characters.', 'danger'); return; }
    if (pass !== confirmPass) { setAuthMessage('Passwords do not match.', 'danger'); return; }
  }

  try {
    let result;
    if (authMode === 'signup') {
      result = await supabaseClient.auth.signUp({
        email,
        password: pass,
        options: {
          data: { username }
        }
      });
      if (result.error) throw result.error;
      setAuthMessage('Check your email to confirm the account.', 'success');
      authForm.reset();
      setAuthMode('login');
    } else {
      result = await supabaseClient.auth.signInWithPassword({ email, password: pass });
      if (result.error) throw result.error;
      currentUserId = result.data.user.id;
      currentUser = result.data.user.user_metadata?.username || result.data.user.email;
      updateAuthUI();
      closeModal(authModal);
      await loadHighScores();
      setMessage(`Signed in as ${currentUser}.`, 'success');
    }
  } catch (err) {
    setAuthMessage(err.message || 'Unable to authenticate.', 'danger');
  }
}

async function signOut() {
  await supabaseClient.auth.signOut();
  currentUser = null;
  currentUserId = null;
  setMessage('Signed out.');
  updateAuthUI();
  highScores = { name: 0, hex: 0, rgb: 0, hsl: 0 };
  highScoreValue.textContent = '0';
}

async function initializeAuth() {
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    currentUser = null;
    currentUserId = null;
    updateAuthUI();
    return;
  }
  const session = data.session;
  if (session && session.user) {
    currentUserId = session.user.id;
    currentUser = session.user.user_metadata?.username || session.user.email;
    updateAuthUI();
    await loadHighScores();
  } else {
    currentUser = null;
    currentUserId = null;
    updateAuthUI();
  }
}

// Account settings: open modal and populate current values
async function openAccountSettings() {
  if (!currentUserId) {
    setMessage('Sign in to manage your account.');
    openModal(authModal);
    return;
  }
  try {
    const { data, error } = await supabaseClient.auth.getUser();
    if (error) throw error;
    const user = (data && data.user) || (data && data.session && data.session.user) || null;
    if (!user) {
      setMessage('Unable to load account.');
      return;
    }
    accountUsername.value = user.user_metadata?.username || '';
    accountEmail.value = user.email || '';
    const lb = user.user_metadata?.leaderboard_public;
    accountLeaderboardPublic.checked = lb === true || lb === 'true';
    accountThemeSelect.value = user.user_metadata?.theme || currentTheme;
    await loadPersonalStats();
    openModal(accountModal);
  } catch (err) {
    setMessage(err.message || 'Unable to load account.');
  }
}

// Record finished game session to local history (and optionally to server later)
function recordGameSession(entry) {
  // entry: { score, mode, duration, correct, rounds, timestamp }
  try {
    const raw = localStorage.getItem('cg_history') || '[]';
    const arr = JSON.parse(raw);
    arr.push(entry);
    // cap history to last 500 entries to avoid memory bloat
    if (arr.length > 500) arr.splice(0, arr.length - 500);
    localStorage.setItem('cg_history', JSON.stringify(arr));
  } catch (e) {
    // ignore
  }
}

async function loadPersonalStats() {
  // Compute stats from local history and highscores
  try {
    const raw = localStorage.getItem('cg_history') || '[]';
    const arr = JSON.parse(raw).filter(Boolean);
    const stats = {
      gamesPlayed: arr.length,
      totalScore: 0,
      avgScore: 0,
      totalTime: 0,
      lastPlayed: null,
      totalRounds: 0,
      totalCorrect: 0,
      bestPerMode: Object.assign({}, highScores)
    };
    arr.forEach((r) => {
      stats.totalScore += Number(r.score || 0);
      stats.totalTime += Number(r.duration || 0);
      stats.totalRounds += Number(r.rounds || 0);
      stats.totalCorrect += Number(r.correct || 0);
      const t = r.timestamp ? new Date(r.timestamp) : null;
      if (t && (!stats.lastPlayed || t > stats.lastPlayed)) stats.lastPlayed = t;
      // keep bestPerMode updated
      if (r.mode && (!stats.bestPerMode[r.mode] || r.score > stats.bestPerMode[r.mode])) stats.bestPerMode[r.mode] = r.score;
    });
    stats.avgScore = stats.gamesPlayed ? Math.round(stats.totalScore / stats.gamesPlayed) : 0;

    // If user is signed in, augment with server highscores (already loaded into highScores)
    if (currentUserId) {
      stats.bestPerMode = Object.assign({}, highScores, stats.bestPerMode);
    }

    // render
    if (accountStatsContent) {
      accountStatsContent.innerHTML = `
        <div>Games played: <strong>${stats.gamesPlayed}</strong></div>
        <div>Average score: <strong>${stats.avgScore}</strong></div>
        <div>Total time played: <strong>${Math.round(stats.totalTime)}s</strong></div>
        <div>Rounds played: <strong>${stats.totalRounds}</strong></div>
        <div>Correct answers: <strong>${stats.totalCorrect}</strong> (${stats.totalRounds ? Math.round((stats.totalCorrect/stats.totalRounds)*100) : 0}%)</div>
        <div style="margin-top:6px;">Best scores: <small>(Name / HEX / RGB / HSL)</small>
          <div><strong>${stats.bestPerMode.name || 0}</strong> / <strong>${stats.bestPerMode.hex || 0}</strong> / <strong>${stats.bestPerMode.rgb || 0}</strong> / <strong>${stats.bestPerMode.hsl || 0}</strong></div>
        </div>
        <div style="margin-top:6px;">Last played: <strong>${stats.lastPlayed ? stats.lastPlayed.toLocaleString() : 'Never'}</strong></div>
      `;
    }
  } catch (err) {
    if (accountStatsContent) accountStatsContent.textContent = 'Unable to load stats.';
  }
}

async function saveAccountSettings() {
  if (!currentUserId) { setMessage('Sign in to update account.'); return; }
  const username = (accountUsername.value || '').trim();
  const leaderboard_public = accountLeaderboardPublic.checked;
  const theme = accountThemeSelect.value || currentTheme;
  const newEmail = (accountEmail.value || '').trim();
  const payload = { data: { username, leaderboard_public, theme } };
  if (newEmail && newEmail !== (currentUser || '')) payload.email = newEmail;
  try {
    const { data, error } = await supabaseClient.auth.updateUser(payload);
    if (error) throw error;
    currentUser = data.user?.user_metadata?.username || data.user?.email || currentUser;
    updateAuthUI();
    setMessage('Account settings saved.', 'success');
    closeModal(accountModal);
  } catch (err) {
    setMessage(err.message || 'Unable to save account settings.', 'danger');
  }
}

async function handleChangePassword() {
  const newPass = accountNewPassword.value || '';
  if (!newPass) { setMessage('Enter a new password.'); return; }
  try {
    const { data, error } = await supabaseClient.auth.updateUser({ password: newPass });
    if (error) throw error;
    accountCurrentPassword.value = '';
    accountNewPassword.value = '';
    setMessage('Password changed.', 'success');
  } catch (err) {
    setMessage(err.message || 'Unable to change password.', 'danger');
  }
}

async function handleDeleteAccount() {
  if (!confirm('Delete account? This cannot be undone from the client. Continue?')) return;
  try {
    // Client cannot fully delete the auth user (requires service role). Flag user metadata and sign out.
    await supabaseClient.auth.updateUser({ data: { deleted: true } });
    setMessage('Account flagged for deletion. Contact support to remove it completely.');
    await signOut();
  } catch (err) {
    setMessage(err.message || 'Unable to delete account.', 'danger');
  }
}

function getOptionsCountForDifficulty(diff) {
  switch (diff) {
    case 'very-easy': return 2;
    case 'easy': return 4;
    case 'medium': return 6;
    default: return 0; // 0 = typed input
  }
}

function generateExtendedPalette(baseColors) {
  const extended = [];
  const seen = new Set();
  baseColors.forEach((c) => {
    // include original
    if (!seen.has(c.hex)) { extended.push({ name: c.name, hex: c.hex }); seen.add(c.hex); }
    // generate 4 shades by altering lightness
    const hsl = hexToHsl(c.hex);
    [-20, -10, 10, 20].forEach((delta) => {
      const l = Math.max(0, Math.min(100, hsl.l + delta));
      const hex = hslToHex(hsl.h, hsl.s, l);
      if (!seen.has(hex)) { extended.push({ name: `${c.name} ${delta>0?'+':''}${delta}`, hex }); seen.add(hex); }
    });
  });
  return extended;
}

// For Expert mode: generate a dense cluster of very similar shades around a single base color.
function generateExpertCluster(baseColor, count = 128) {
  const hsl = hexToHsl(baseColor.hex);
  const seen = new Set();
  seen.add(baseColor.hex.toUpperCase());
  const cluster = [{ name: baseColor.name, hex: baseColor.hex }];
  // produce many tiny variations in H, S, L to make distinguishing them hard
  while (cluster.length < count) {
    const dh = (Math.random() * 6) - 3; // -3 .. +3 degrees
    const ds = (Math.random() * 4) - 2; // -2 .. +2 percent
    const dl = (Math.random() * 4) - 2; // -2 .. +2 percent
    const h = (hsl.h + dh + 360) % 360;
    const s = Math.max(0, Math.min(100, hsl.s + ds));
    const l = Math.max(0, Math.min(100, hsl.l + dl));
    const hex = hslToHex(h, s, l).toUpperCase();
    if (!seen.has(hex)) {
      seen.add(hex);
      cluster.push({ name: baseColor.name, hex });
    }
    // safety to avoid infinite loop: if we've tried many times, widen the variation slightly
    if (seen.size % 50 === 0) {
      // slightly increase allowed variation
      // intentionally noop here; randomness will eventually produce new values
    }
  }
  return cluster;
}

function getTimerForDifficulty() {
  return timerSetting;
}

function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return { r, g, b };
}

function hexToHsl(hex) {
  const { r, g, b } = hexToRgb(hex);
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case rNorm:
        h = ((gNorm - bNorm) / delta) % 6;
        break;
      case gNorm:
        h = (bNorm - rNorm) / delta + 2;
        break;
      default:
        h = (rNorm - gNorm) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  return {
    h,
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function getDisplayValue(color) {
  if (currentMode === "name") {
    return color.name;
  }
  if (currentMode === "hex") {
    return color.hex.toUpperCase();
  }
  if (currentMode === "rgb") {
    const { r, g, b } = hexToRgb(color.hex);
    return `rgb(${r}, ${g}, ${b})`;
  }
  if (currentMode === "hsl") {
    const { h, s, l } = hexToHsl(color.hex);
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  return color.hex.toUpperCase();
}

function getModeLabel(mode) {
  switch (mode) {
    case "name":
      return "Color name";
    case "hex":
      return "HEX code";
    case "rgb":
      return "RGB value";
    case "hsl":
      return "HSL value";
    default:
      return "color value";
  }
}

function getPromptLabel(mode) {
  switch (mode) {
    case "name":
      return "Enter color name";
    case "hex":
      return "Enter HEX code";
    case "rgb":
      return "Enter RGB value";
    case "hsl":
      return "Enter HSL value";
    default:
      return "Enter color value";
  }
}

function chooseTarget() {
  // Determine palette depending on difficulty
  let palette;
  if (currentDifficulty === 'expert') {
    // pick a single base color and generate a dense cluster around it
    const base = colorData[getRandomInt(colorData.length)];
    palette = generateExpertCluster(base, 128);
  } else {
    palette = currentDifficulty === 'hard' ? generateExtendedPalette(colorData) : colorData.slice();
  }
  const optionsCount = getOptionsCountForDifficulty(currentDifficulty);

  if (optionsCount > 0) {
    const options = shuffle(palette).slice(0, optionsCount);
    targetColor = options[getRandomInt(options.length)];

    targetLabel.textContent = `Choose the correct ${getModeLabel(currentMode).toLowerCase()}`;
    targetName.textContent = "Select the right answer from below";
    swatch.style.backgroundColor = targetColor.hex;

    answerInput.value = "";
    answerInput.disabled = true;
    submitAnswerButton.disabled = true;
    answerInput.parentElement.classList.add("hidden");
    // render option buttons dynamically to match count
    optionsPanel.classList.remove("hidden");
    optionsPanel.innerHTML = '';
    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'option-button control-button';
      btn.textContent = getDisplayValue(opt);
      btn.dataset.correct = opt === targetColor ? 'true' : 'false';
      btn.disabled = false;
      btn.addEventListener('click', handleChoice);
      optionsPanel.appendChild(btn);
    });
  } else {
    // typed input mode: choose from palette
    targetColor = palette[getRandomInt(palette.length)];

    targetLabel.textContent = getPromptLabel(currentMode);
    targetName.textContent = "Type your answer below";
    swatch.style.backgroundColor = targetColor.hex;

    answerInput.value = "";
    answerInput.disabled = false;
    submitAnswerButton.disabled = false;
    answerInput.parentElement.classList.remove("hidden");
    optionsPanel.innerHTML = '';
    optionsPanel.classList.add("hidden");
    answerInput.focus();
  }
}

async function loadHighScores() {
  highScores = { name: 0, hex: 0, rgb: 0, hsl: 0 };
  if (!currentUserId) return;
  const { data, error } = await supabaseClient
    .from('highscores')
    .select('mode, score')
    .eq('user_id', currentUserId);
  if (error) return;
  data.forEach((row) => {
    // stored mode can include difficulty suffix like "hex|expert"
    const parts = (row.mode || '').split('|');
    const baseMode = parts[0] || row.mode;
    const difficulty = parts[1] || null;
    // only consider expert difficulty for global high score tracking
    if (difficulty === 'expert') {
      highScores[baseMode] = row.score;
    }
  });
  highScoreValue.textContent = getCurrentHighScore();
}

function saveHighScores() {
  // high scores are stored with Supabase for authenticated users.
}

function getCurrentHighScore() {
  return highScores[currentMode] || 0;
}

async function updateHighScoreIfNeeded() {
  if (score > getCurrentHighScore()) {
    highScores[currentMode] = score;
    highScoreValue.textContent = score;
    if (!currentUserId) {
      setMessage('Sign in to save your score and appear on the global ranking.', 'danger');
      return;
    }
    // store mode with difficulty suffix so global rankings can filter by difficulty
    const dbMode = `${currentMode}|${currentDifficulty}`;
    // attempt upsert and request the inserted/updated row back for verification
    const { data, error } = await supabaseClient
      .from('highscores')
      .upsert({ user_id: currentUserId, mode: dbMode, score }, { onConflict: ['user_id', 'mode'] })
      .select();

    if (error) {
      console.warn('Unable to save high score to Supabase.', error);
      setMessage('Unable to save high score.', 'danger');
      return;
    }

    // verify returned row
    if (!data || !data.length) {
      console.warn('Upsert returned no rows', data);
      setMessage('Score saved but could not verify entry.', 'danger');
      return;
    }

    const row = data[0];
    if (row.mode == null || row.score == null) {
      console.warn('Saved row has null fields', row);
      setMessage('Saved, but database columns appear incorrect (mode/score null). Check table schema.', 'danger');
      return;
    }

    // success — refresh leaderboard
    await loadGlobalLeaderboard();
  }
}

function formatLeaderboardPlayer(row) {
  if (!row || !row.user_id) return 'Unknown';
  if (row.user_id === currentUserId) return 'You';
  return row.username && row.leaderboard_public ? row.username : `${row.user_id.slice(0, 8)}...`;
}

function renderLeaderboardRows(rows) {
  leaderboardTableBody.innerHTML = '';
  if (!rows || rows.length === 0) {
    leaderboardTableBody.innerHTML = '<tr><td colspan="5">No rankings available yet.</td></tr>';
    return;
  }
  rows.forEach((row, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${formatLeaderboardPlayer(row)}</td>
      <td>${row.mode || 'unknown'}</td>
      <td>${row.score ?? 0}</td>
      <td>${new Date(row.updated_at).toLocaleString()}</td>
    `;
    leaderboardTableBody.appendChild(tr);
  });
}

async function loadGlobalLeaderboard() {
  leaderboardMessage.textContent = 'Loading global rankings...';
  leaderboardTableBody.innerHTML = '<tr><td colspan="5">Loading…</td></tr>';
  // Only include expert-difficulty entries in the global rankings.
  // Rows are stored with mode like "hex|expert" so filter accordingly.
  let query = supabaseClient.from('highscores').select('user_id, mode, score, updated_at').order('score', { ascending: false }).limit(20);
  if (globalLeaderboardMode === 'all') {
    query = query.ilike('mode', '%|expert');
  } else {
    query = query.eq('mode', `${globalLeaderboardMode}|expert`);
  }
  const { data, error } = await query;
  if (error) {
    leaderboardMessage.textContent = 'Unable to load leaderboard. Check Supabase configuration and policies.';
    leaderboardTableBody.innerHTML = '<tr><td colspan="5">Unable to load rankings.</td></tr>';
    console.error('Leaderboard error:', error);
    return;
  }
  if (!data || data.length === 0) {
    leaderboardMessage.textContent = 'No rankings available yet. Play a game to add your score.';
    renderLeaderboardRows([]);
    return;
  }
  
  const userIds = [...new Set(data.map(row => row.user_id))];
  let userProfiles = {};
  
  if (userIds.length > 0) {
    // Try to fetch from profiles table
    const { data: profiles } = await supabaseClient
      .from('profiles')
      .select('id, username, leaderboard_public')
      .in('id', userIds);
    
    if (profiles) {
      profiles.forEach(profile => {
        userProfiles[profile.id] = profile;
      });
    }
  }
  
  const processedData = data.map((row) => ({
    ...row,
    // extract base mode (e.g., "hex" from "hex|expert") for display
    mode: (row.mode || '').split('|')[0] || row.mode,
    username: userProfiles[row.user_id]?.username || null,
    leaderboard_public: userProfiles[row.user_id]?.leaderboard_public || false
  }));

  leaderboardMessage.textContent = `Top ${data.length} expert scores ${globalLeaderboardMode === 'all' ? 'across all modes' : `for ${globalLeaderboardMode.toUpperCase()}`}.`;
  renderLeaderboardRows(processedData);
}

async function setLeaderboardMode(mode) {
  globalLeaderboardMode = mode;
  leaderboardAllButton.classList.toggle('active', mode === 'all');
  leaderboardNameButton.classList.toggle('active', mode === 'name');
  leaderboardHexButton.classList.toggle('active', mode === 'hex');
  leaderboardRgbButton.classList.toggle('active', mode === 'rgb');
  leaderboardHslButton.classList.toggle('active', mode === 'hsl');
  await loadGlobalLeaderboard();
}

function updateStats() {
  scoreValue.textContent = score;
  streakValue.textContent = streak;
  timerValue.textContent = `${timeLeft}s`;
  highScoreValue.textContent = getCurrentHighScore();
}

function loadSettings() {
  try {
    const t = localStorage.getItem('cg_timer');
    timerSetting = t ? Number(t) : 60;
  } catch (e) {
    timerSetting = 60;
  }
  try {
    const s = localStorage.getItem('cg_sound');
    soundEnabled = s ? s === '1' : true;
  } catch (e) {
    soundEnabled = true;
  }
  try {
    const theme = localStorage.getItem('cg_theme');
    currentTheme = theme === 'light' ? 'light' : 'dark';
  } catch (e) {
    currentTheme = 'dark';
  }
  // update UI
  if (timerSelect) timerSelect.value = String(timerSetting);
  if (soundToggle) soundToggle.checked = soundEnabled;
  applyTheme(currentTheme);
}

function saveSettings() {
  try { localStorage.setItem('cg_timer', String(timerSetting)); } catch (e) {}
  try { localStorage.setItem('cg_sound', soundEnabled ? '1' : '0'); } catch (e) {}
  try { localStorage.setItem('cg_theme', currentTheme); } catch (e) {}
}

function applyTheme(theme) {
  currentTheme = theme === 'light' ? 'light' : 'dark';
  const body = document.body;
  if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeToggleButton.innerHTML = '&#9790;';
    themeToggleButton.setAttribute('aria-label', 'Switch to dark theme');
    themeToggleButton.setAttribute('title', 'Switch to dark theme');
    themeToggleButton.setAttribute('aria-pressed', 'true');
  } else {
    body.classList.remove('light-theme');
    themeToggleButton.innerHTML = '&#9728;';
    themeToggleButton.setAttribute('aria-label', 'Switch to light theme');
    themeToggleButton.setAttribute('title', 'Switch to light theme');
    themeToggleButton.setAttribute('aria-pressed', 'false');
  }
  saveSettings();
}

function playTone(freq, duration=0.12) {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    o.connect(g);
    g.connect(ctx.destination);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.01);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    setTimeout(() => { o.stop(); ctx.close(); }, duration*1000 + 50);
  } catch (e) {
    // ignore audio errors
  }
}

function flashSwatch(success) {
  const el = swatch;
  el.classList.add('swatch-flash');
  if (success) el.classList.add('flash-success'); else el.classList.add('flash-fail');
  setTimeout(() => { el.classList.remove('flash-success','flash-fail'); }, 400);
}

function showPage(page) {
  const pages = {
    start: startPage,
    play: gamePage,
    info: infoPage,
    leaderboard: leaderboardPage
  };

  Object.values(pages).forEach((el) => el?.classList.add('hidden'));
  if (pages[page]) pages[page].classList.remove('hidden');

  startPageButton.classList.toggle('active', page === 'start');
  playPageButton.classList.toggle('active', page === 'play');
  leaderboardPageButton.classList.toggle('active', page === 'leaderboard');
  infoButton.classList.toggle('active', page === 'info');
}

function trapModalFocus(event) {
  if (!activeModal || event.key !== 'Tab') return;
  const focusable = Array.from(activeModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
    .filter((el) => !el.disabled && el.offsetParent !== null);
  if (!focusable.length) return;
  const currentIndex = focusable.indexOf(document.activeElement);
  let nextIndex = currentIndex;

  if (event.shiftKey) {
    nextIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
  } else {
    nextIndex = currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;
  }

  event.preventDefault();
  focusable[nextIndex].focus();
}

function openModal(modal) {
  if (!modal) return;
  previousFocus = document.activeElement;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  activeModal = modal;
  const focusable = Array.from(modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
    .filter((el) => !el.disabled && el.offsetParent !== null);
  if (focusable.length) {
    focusable[0].focus();
  } else {
    modal.focus();
  }
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  activeModal = null;
  if (previousFocus && typeof previousFocus.focus === 'function') {
    previousFocus.focus();
  }
}

function setMessage(text, type = "normal") {
  messageText.textContent = text;
  messageText.className = type === "normal" ? "message" : `message ${type}`;
}

function setAuthMessage(text, type = "normal") {
  if (!authMessage) return;
  authMessage.textContent = text;
  authMessage.className = type === "normal" ? "message" : `message ${type}`;
  authMessage.classList.remove('hidden');
}

function clearAuthMessage() {
  if (!authMessage) return;
  authMessage.textContent = '';
  authMessage.classList.add('hidden');
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === 'signup';
  authTitle.textContent = isSignup ? 'Create account' : 'Sign in';
  authSubmitButton.textContent = isSignup ? 'Create account' : 'Sign in';
  authHelpText.textContent = isSignup ? 'Choose a username and strong password to create a new account.' : 'Enter your email and password to sign in.';
  authUsernameRow.classList.toggle('hidden', !isSignup);
  authConfirmPasswordRow.classList.toggle('hidden', !isSignup);
  authLoginTab.classList.toggle('active', !isSignup);
  authLoginTab.setAttribute('aria-selected', !isSignup ? 'true' : 'false');
  authSignupTab.classList.toggle('active', isSignup);
  authSignupTab.setAttribute('aria-selected', isSignup ? 'true' : 'false');
  authPassword.setAttribute('type', 'password');
  authTogglePasswordButton.textContent = 'Show';
  if (isSignup) {
    authPassword.setAttribute('autocomplete', 'new-password');
    authConfirmPassword.setAttribute('autocomplete', 'new-password');
  } else {
    authPassword.setAttribute('autocomplete', 'current-password');
  }
  clearAuthMessage();
}

function togglePasswordVisibility() {
  const isPassword = authPassword.getAttribute('type') === 'password';
  authPassword.setAttribute('type', isPassword ? 'text' : 'password');
  authTogglePasswordButton.textContent = isPassword ? 'Hide' : 'Show';
}

function normalizeHex(value) {
  if (!value || typeof value !== 'string') return null;
  const v = value.trim().replace(/\s+/g, "").replace(/^#/, "").toUpperCase();
  if (!/^[0-9A-F]{6}$/.test(v)) return null;
  return v;
}

function componentToHex(c) {
  const v = Math.max(0, Math.min(255, Math.round(c)));
  return v.toString(16).padStart(2, '0').toUpperCase();
}

function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return {
    r: Math.round(255 * f(0)),
    g: Math.round(255 * f(8)),
    b: Math.round(255 * f(4))
  };
}

function hslToHex(h, s, l) {
  const { r, g, b } = hslToRgb(((h % 360) + 360) % 360, s, l);
  return rgbToHex(r, g, b);
}

function normalizeRgb(value) {
  if (!value || typeof value !== 'string') return null;
  const cleaned = value.trim().toLowerCase().replace(/[(),]/g, ' ').replace(/%/g, '').replace(/\s+/g, ' ').trim();
  const parts = cleaned.split(' ').filter(Boolean);
  if (parts[0] === 'rgb') parts.shift();
  if (parts.length !== 3) return null;
  const nums = parts.map((p) => Number(p.replace(/[^0-9.-]/g, '')));
  if (nums.some((n) => Number.isNaN(n))) return null;
  if (nums.some((n) => n < 0 || n > 255)) return null;
  return rgbToHex(nums[0], nums[1], nums[2]);
}

function normalizeHsl(value) {
  if (!value || typeof value !== 'string') return null;
  const cleaned = value.trim().toLowerCase().replace(/[(),]/g, ' ').replace(/%/g, '').replace(/\s+/g, ' ').trim();
  const parts = cleaned.split(' ').filter(Boolean);
  if (parts[0] === 'hsl') parts.shift();
  if (parts.length !== 3) return null;
  const h = Number(parts[0].replace(/[^0-9.-]/g, ''));
  const s = Number(parts[1].replace(/[^0-9.-]/g, ''));
  const l = Number(parts[2].replace(/[^0-9.-]/g, ''));
  if ([h, s, l].some((n) => Number.isNaN(n))) return null;
  if (s < 0 || s > 100 || l < 0 || l > 100) return null;
  return hslToHex(h, s, l);
}

function getCorrectAnswer(color) {
  return getDisplayValue(color);
}

function compareAnswer(answer, color) {
  if (currentMode === 'name') {
    return answer.trim().toLowerCase() === color.name.toLowerCase();
  }
  // For color values, compare canonical HEX values
  const targetHex = normalizeHex(color.hex) || null;
  if (!targetHex) return false;

  if (currentMode === 'hex') {
    const g = normalizeHex(answer);
    return g !== null && g === targetHex;
  }

  if (currentMode === 'rgb') {
    const g = normalizeRgb(answer);
    return g !== null && g === targetHex;
  }

  if (currentMode === 'hsl') {
    const g = normalizeHsl(answer);
    return g !== null && g === targetHex;
  }

  return false;
}

function handleSubmit() {
  if (!gameActive) return;
  const guess = answerInput.value.trim();
  if (!guess) {
    setMessage("Type an answer before submitting.", "danger");
    return;
  }
  sessionRounds += 1;

  const correctAnswer = getCorrectAnswer(targetColor);
  if (compareAnswer(guess, targetColor)) {
    sessionCorrect += 1;
    score += currentDifficulty === "easy" ? 10 : 12;
    streak += 1;
    setMessage("Nice! That answer is correct.", "success");
    playTone(880,0.12);
    flashSwatch(true);
    answerInput.disabled = true;
    submitAnswerButton.disabled = true;
    setTimeout(() => {
      chooseTarget();
      setMessage(`Guess the color using ${getModeLabel(currentMode).toLowerCase()}.`);
    }, 800);
  } else {
    streak = 0;
    // validation feedback
    const normalizedHex = normalizeHex(guess);
  if (currentMode === 'hex' && normalizedHex === null) {
      setMessage('Invalid HEX format. Use RRGGBB or #RRGGBB.', 'danger');
    } else if (currentMode === 'rgb' && normalizeRgb(guess) === null) {
      setMessage('Invalid RGB format. Use "rgb(r,g,b)" or "r g b".', 'danger');
    } else if (currentMode === 'hsl' && normalizeHsl(guess) === null) {
      setMessage('Invalid HSL format. Use "hsl(h,s%,l%)" or "h s l".', 'danger');
    } else {
      setMessage(`Wrong — the correct answer was ${correctAnswer}.`, "danger");
    }
    playTone(220,0.18);
    flashSwatch(false);
    answerInput.value = "";
    answerInput.focus();
    setTimeout(() => {
      chooseTarget();
      setMessage(`Try again with a fresh color.`);
    }, 1200);
  }

  updateStats();
  updateHighScoreIfNeeded();
}

function handleChoice(event) {
  if (!gameActive) return;
  sessionRounds += 1;
  const optionsCountNow = getOptionsCountForDifficulty(currentDifficulty);
  if (optionsCountNow === 0) return; // not a multiple-choice difficulty
  const selectedButton = event.currentTarget;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    sessionCorrect += 1;
    score += 10;
    streak += 1;
    selectedButton.classList.add("correct");
    setMessage("Correct! Nice choice.", "success");
    playTone(880,0.12);
    flashSwatch(true);
  } else {
    streak = 0;
    selectedButton.classList.add("wrong");
    setMessage(`Wrong! The answer was ${getCorrectAnswer(targetColor)}.`, "danger");
    playTone(220,0.18);
    flashSwatch(false);
  }

  const currButtons = optionsPanel.querySelectorAll('.option-button');
  currButtons.forEach((button) => (button.disabled = true));
  setTimeout(() => {
    chooseTarget();
    setMessage("Select the correct answer from below.");
  }, 900);
  updateStats();
  updateHighScoreIfNeeded();

}

function applyDifficulty(mode) {
  currentDifficulty = mode;
  const map = {
    'very-easy': diffVeryEasyButton,
    'easy': diffEasyButton,
    'medium': diffMediumButton,
    'hard': diffHardButton,
    'expert': diffExpertButton
  };
  Object.values(map).forEach(b => b?.classList.remove('active'));
  if (map[mode]) map[mode].classList.add('active');
}

function setDifficulty(mode) {
  difficultyByMode[currentMode] = mode;
  applyDifficulty(mode);
}

function setGuessMode(mode) {
  currentMode = mode;
  modeNameButton.classList.toggle("active", mode === "name");
  modeHexButton.classList.toggle("active", mode === "hex");
  modeRgbButton.classList.toggle("active", mode === "rgb");
  modeHslButton.classList.toggle("active", mode === "hsl");
  applyDifficulty(difficultyByMode[mode]);
  chooseTarget();
  updateStats();
  setMessage(`Guess the color using ${getModeLabel(currentMode).toLowerCase()}. High score: ${getCurrentHighScore()}.`);
}

function startTimer() {
  clearInterval(countdown);
  countdown = setInterval(async () => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      gameActive = false;
      answerInput.disabled = true;
      submitAnswerButton.disabled = true;
          setMessage(`Time's up! Final score: ${score}`, "danger");
          // record session
          try {
            const duration = Math.round(((sessionStartTime ? Date.now() - sessionStartTime : getTimerForDifficulty()*1000) )/1000);
            recordGameSession({ score, mode: currentMode, duration, correct: sessionCorrect, rounds: sessionRounds, timestamp: new Date().toISOString() });
            await loadPersonalStats();
            await updateHighScoreIfNeeded();
          } catch (e) {
            // ignore
          }
      return;
    }
    timeLeft -= 1;
    updateStats();
  }, 1000);
}

function resetGame() {
  score = 0;
  streak = 0;
  timeLeft = getTimerForDifficulty();
  sessionRounds = 0;
  sessionCorrect = 0;
  sessionStartTime = Date.now();
  gameActive = true;
  setMessage(`Guess the color using ${getModeLabel(currentMode).toLowerCase()}.`);
  chooseTarget();
  updateStats();
  startTimer();
}

newGameButton.addEventListener("click", resetGame);
diffVeryEasyButton.addEventListener('click', () => { setDifficulty('very-easy'); resetGame(); });
diffEasyButton.addEventListener('click', () => { setDifficulty('easy'); resetGame(); });
diffMediumButton.addEventListener('click', () => { setDifficulty('medium'); resetGame(); });
diffHardButton.addEventListener('click', () => { setDifficulty('hard'); resetGame(); });
diffExpertButton.addEventListener('click', () => { setDifficulty('expert'); resetGame(); });
modeNameButton.addEventListener("click", () => {
  setGuessMode("name");
});
modeHexButton.addEventListener("click", () => {
  setGuessMode("hex");
});
modeRgbButton.addEventListener("click", () => {
  setGuessMode("rgb");
});
modeHslButton.addEventListener("click", () => {
  setGuessMode("hsl");
});

// option buttons are attached dynamically when rendering options

answerInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSubmit();
  }
});
submitAnswerButton.addEventListener("click", handleSubmit);

window.addEventListener("load", async () => {
  await initializeAuth();
  loadSettings();
  setGuessMode("hex");
  showPage('start');
  // Settings modal handlers
  settingsButton.addEventListener('click', () => { openModal(settingsModal); });
  closeSettingsButton.addEventListener('click', () => { closeModal(settingsModal); });
  saveSettingsButton.addEventListener('click', () => {
    timerSetting = Number(timerSelect.value);
    soundEnabled = soundToggle.checked;
    saveSettings();
    closeModal(settingsModal);
    if (!gamePage.classList.contains('hidden')) resetGame();
  });
  // Help modal handlers
  helpButton.addEventListener('click', () => { openModal(helpModal); });
  closeHelpButton.addEventListener('click', () => { closeModal(helpModal); });
  // Auth handlers
  authButton.addEventListener('click', () => {
    authForm.reset();
    setAuthMode('login');
    clearAuthMessage();
    openModal(authModal);
  });
  closeAuthButton.addEventListener('click', () => { closeModal(authModal); });
  authLoginTab.addEventListener('click', () => setAuthMode('login'));
  authSignupTab.addEventListener('click', () => setAuthMode('signup'));
  authTogglePasswordButton.addEventListener('click', togglePasswordVisibility);
  authToggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  });
  authForm.addEventListener('submit', handleAuthSubmit);
  logoutButton.addEventListener('click', () => signOut());
  if (accountSettingsButton) accountSettingsButton.addEventListener('click', () => openAccountSettings());
  if (closeAccountButton) closeAccountButton.addEventListener('click', () => { closeModal(accountModal); });
  if (saveAccountButton) saveAccountButton.addEventListener('click', () => saveAccountSettings());
  if (accountChangePasswordButton) accountChangePasswordButton.addEventListener('click', () => handleChangePassword());
  if (deleteAccountButton) deleteAccountButton.addEventListener('click', () => handleDeleteAccount());
  themeToggleButton.addEventListener('click', () => {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
  startPageButton.addEventListener('click', () => showPage('start'));
  playPageButton.addEventListener('click', () => { showPage('play'); if (!gameActive) resetGame(); });
  leaderboardPageButton.addEventListener('click', () => { showPage('leaderboard'); setLeaderboardMode(globalLeaderboardMode); });
  infoButton.addEventListener('click', () => showPage('info'));
  startGameButton.addEventListener('click', () => { showPage('play'); resetGame(); });
  viewHelpButton.addEventListener('click', () => openModal(helpModal));
  backToHomeButton.addEventListener('click', () => showPage('start'));
  backToHomeButtonFromLeaderboard.addEventListener('click', () => showPage('start'));
  leaderboardAllButton.addEventListener('click', () => setLeaderboardMode('all'));
  leaderboardNameButton.addEventListener('click', () => setLeaderboardMode('name'));
  leaderboardHexButton.addEventListener('click', () => setLeaderboardMode('hex'));
  leaderboardRgbButton.addEventListener('click', () => setLeaderboardMode('rgb'));
  leaderboardHslButton.addEventListener('click', () => setLeaderboardMode('hsl'));
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (activeModal) {
      if (e.key === 'Escape') {
        closeModal(activeModal);
      } else {
        trapModalFocus(e);
      }
      return;
    }
    if (e.key === 'Enter' && document.activeElement === answerInput) return; // handled by input
    if (e.key === 'n' || e.key === 'N') setGuessMode('name');
    if (e.key === 'h' || e.key === 'H') setGuessMode('hex');
    if (e.key === 'r' || e.key === 'R') setGuessMode('rgb');
    if (e.key === 'l' || e.key === 'L') setGuessMode('hsl');
    if (e.key === 'e' || e.key === 'E') { setDifficulty('easy'); resetGame(); }
    if (e.key === 'd' || e.key === 'D') { setDifficulty('hard'); resetGame(); }
    if (e.code === 'Space') { e.preventDefault(); resetGame(); }
  });
});
