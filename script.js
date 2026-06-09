const colorData = [
  { name: "AliceBlue", hex: "#F0F8FF" },
  { name: "AntiqueWhite", hex: "#FAEBD7" },
  { name: "Aqua", hex: "#00FFFF" },
  { name: "Aquamarine", hex: "#7FFFD4" },
  { name: "Azure", hex: "#F0FFFF" },
  { name: "Beige", hex: "#F5F5DC" },
  { name: "Bisque", hex: "#FFE4C4" },
  { name: "Black", hex: "#000000" },
  { name: "BlanchedAlmond", hex: "#FFEBCD" },
  { name: "Blue", hex: "#0000FF" },
  { name: "BlueViolet", hex: "#8A2BE2" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "BurlyWood", hex: "#DEB887" },
  { name: "CadetBlue", hex: "#5F9EA0" },
  { name: "Chartreuse", hex: "#7FFF00" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "CornflowerBlue", hex: "#6495ED" },
  { name: "Cornsilk", hex: "#FFF8DC" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "DarkBlue", hex: "#00008B" },
  { name: "DarkCyan", hex: "#008B8B" },
  { name: "DarkGoldenRod", hex: "#B8860B" },
  { name: "DarkGray", hex: "#A9A9A9" },
  { name: "DarkGreen", hex: "#006400" },
  { name: "DarkKhaki", hex: "#BDB76B" },
  { name: "DarkMagenta", hex: "#8B008B" },
  { name: "DarkOliveGreen", hex: "#556B2F" },
  { name: "DarkOrange", hex: "#FF8C00" },
  { name: "DarkOrchid", hex: "#9932CC" },
  { name: "DarkRed", hex: "#8B0000" },
  { name: "DarkSalmon", hex: "#E9967A" },
  { name: "DarkSeaGreen", hex: "#8FBC8F" },
  { name: "DarkSlateBlue", hex: "#483D8B" },
  { name: "DarkSlateGray", hex: "#2F4F4F" },
  { name: "DarkTurquoise", hex: "#00CED1" },
  { name: "DarkViolet", hex: "#9400D3" },
  { name: "DeepPink", hex: "#FF1493" },
  { name: "DeepSkyBlue", hex: "#00BFFF" },
  { name: "DimGray", hex: "#696969" },
  { name: "DodgerBlue", hex: "#1E90FF" },
  { name: "FireBrick", hex: "#B22222" },
  { name: "FloralWhite", hex: "#FFFAF0" },
  { name: "ForestGreen", hex: "#228B22" },
  { name: "Fuchsia", hex: "#FF00FF" },
  { name: "Gainsboro", hex: "#DCDCDC" },
  { name: "GhostWhite", hex: "#F8F8FF" },
  { name: "Gold", hex: "#FFD700" },
  { name: "GoldenRod", hex: "#DAA520" },
  { name: "Gray", hex: "#808080" },
  { name: "Green", hex: "#008000" },
  { name: "GreenYellow", hex: "#ADFF2F" },
  { name: "HoneyDew", hex: "#F0FFF0" },
  { name: "HotPink", hex: "#FF69B4" },
  { name: "IndianRed", hex: "#CD5C5C" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Ivory", hex: "#FFFFF0" },
  { name: "Khaki", hex: "#F0E68C" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "LavenderBlush", hex: "#FFF0F5" },
  { name: "LawnGreen", hex: "#7CFC00" },
  { name: "LemonChiffon", hex: "#FFFACD" },
  { name: "LightBlue", hex: "#ADD8E6" },
  { name: "LightCoral", hex: "#F08080" },
  { name: "LightCyan", hex: "#E0FFFF" },
  { name: "LightGoldenRodYellow", hex: "#FAFAD2" },
  { name: "LightGray", hex: "#D3D3D3" },
  { name: "LightGreen", hex: "#90EE90" },
  { name: "LightPink", hex: "#FFB6C1" },
  { name: "LightSalmon", hex: "#FFA07A" },
  { name: "LightSeaGreen", hex: "#20B2AA" },
  { name: "LightSkyBlue", hex: "#87CEFA" },
  { name: "LightSlateGray", hex: "#778899" },
  { name: "LightSteelBlue", hex: "#B0C4DE" },
  { name: "LightYellow", hex: "#FFFFE0" },
  { name: "Lime", hex: "#00FF00" },
  { name: "LimeGreen", hex: "#32CD32" },
  { name: "Linen", hex: "#FAF0E6" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Maroon", hex: "#800000" },
  { name: "MediumAquaMarine", hex: "#66CDAA" },
  { name: "MediumBlue", hex: "#0000CD" },
  { name: "MediumOrchid", hex: "#BA55D3" },
  { name: "MediumPurple", hex: "#9370DB" },
  { name: "MediumSeaGreen", hex: "#3CB371" },
  { name: "MediumSlateBlue", hex: "#7B68EE" },
  { name: "MediumSpringGreen", hex: "#00FA9A" },
  { name: "MediumTurquoise", hex: "#48D1CC" },
  { name: "MediumVioletRed", hex: "#C71585" },
  { name: "MidnightBlue", hex: "#191970" },
  { name: "MintCream", hex: "#F5FFFA" },
  { name: "MistyRose", hex: "#FFE4E1" },
  { name: "Moccasin", hex: "#FFE4B5" },
  { name: "NavajoWhite", hex: "#FFDEAD" },
  { name: "Navy", hex: "#000080" },
  { name: "OldLace", hex: "#FDF5E6" },
  { name: "Olive", hex: "#808000" },
  { name: "OliveDrab", hex: "#6B8E23" },
  { name: "Orange", hex: "#FFA500" },
  { name: "OrangeRed", hex: "#FF4500" },
  { name: "Orchid", hex: "#DA70D6" },
  { name: "PaleGoldenRod", hex: "#EEE8AA" },
  { name: "PaleGreen", hex: "#98FB98" },
  { name: "PaleTurquoise", hex: "#AFEEEE" },
  { name: "PaleVioletRed", hex: "#DB7093" },
  { name: "PapayaWhip", hex: "#FFEFD5" },
  { name: "PeachPuff", hex: "#FFDAB9" },
  { name: "Peru", hex: "#CD853F" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Plum", hex: "#DDA0DD" },
  { name: "PowderBlue", hex: "#B0E0E6" },
  { name: "Purple", hex: "#800080" },
  { name: "RebeccaPurple", hex: "#663399" },
  { name: "Red", hex: "#FF0000" },
  { name: "RosyBrown", hex: "#BC8F8F" },
  { name: "RoyalBlue", hex: "#4169E1" },
  { name: "SaddleBrown", hex: "#8B4513" },
  { name: "Salmon", hex: "#FA8072" },
  { name: "SandyBrown", hex: "#F4A460" },
  { name: "SeaGreen", hex: "#2E8B57" },
  { name: "SeaShell", hex: "#FFF5EE" },
  { name: "Sienna", hex: "#A0522D" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "SkyBlue", hex: "#87CEEB" },
  { name: "SlateBlue", hex: "#6A5ACD" },
  { name: "SlateGray", hex: "#708090" },
  { name: "Snow", hex: "#FFFAFA" },
  { name: "SpringGreen", hex: "#00FF7F" },
  { name: "SteelBlue", hex: "#4682B4" },
  { name: "Tan", hex: "#D2B48C" },
  { name: "Teal", hex: "#008080" },
  { name: "Thistle", hex: "#D8BFD8" },
  { name: "Tomato", hex: "#FF6347" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Violet", hex: "#EE82EE" },
  { name: "Wheat", hex: "#F5DEB3" },
  { name: "White", hex: "#FFFFFF" },
  { name: "WhiteSmoke", hex: "#F5F5F5" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "YellowGreen", hex: "#9ACD32" }
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
const authAgreeCheckbox = document.getElementById("authAgreeCheckbox");
const authAgreeRow = document.getElementById("authAgreeRow");
const authTermsLink = document.getElementById("authTermsLink");
const authPrivacyLink = document.getElementById("authPrivacyLink");
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
const leaderboardRgbButton = document.getElementById("leaderboardRgbButton");
const leaderboardHslButton = document.getElementById("leaderboardHslButton");
const startGameButton = document.getElementById("startGameButton");
const viewHelpButton = document.getElementById("viewHelpButton");
const backToHomeButton = document.getElementById("backToHomeButton");

const USERNAME_PATTERN = /^[A-Za-z0-9]+$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function isUsernameTaken(username, excludeUserId = null) {
  if (!username) return false;
  try {
    const { data, error } = await supabaseClient
      .from('highscores')
      .select('user_id')
      .eq('username', username)
      .limit(1);
    if (error) {
      console.warn('Unable to check username uniqueness:', error.message || error);
      return false;
    }
    if (!data || data.length === 0) return false;
    return excludeUserId ? String(data[0].user_id) !== String(excludeUserId) : true;
  } catch (err) {
    console.warn('Username uniqueness check failed:', err.message || err);
    return false;
  }
}

function validateUsername(username) {
  return USERNAME_PATTERN.test(username);
}

function validateEmail(email) {
  return EMAIL_PATTERN.test(email);
}

const backToHomeButtonFromLeaderboard = document.getElementById("backToHomeButtonFromLeaderboard");
const termsLink = document.getElementById("termsLink");
const privacyLink = document.getElementById("privacyLink");
const termsBackButton = document.getElementById("termsBackButton");
const privacyBackButton = document.getElementById("privacyBackButton");
const adminSection = document.getElementById("adminSection");
const adminRefreshLeaderboardButton = document.getElementById("adminRefreshLeaderboardButton");
const adminViewStatsButton = document.getElementById("adminViewStatsButton");
const adminInfo = document.getElementById("adminInfo");

let currentDifficulty = "hard";
let currentMode = "hex";
let globalLeaderboardMode = "all";
let targetColor = null;
let score = 0;
let streak = 0;
let timeLeft = 60;
let countdown = null;
let gameActive = false;
let highScores = {};
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
let currentUserEmail = null;
let authMode = 'login';

const SUPABASE_URL = 'https://yqdwjcpxgnomiixzykdl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZHdqY3B4Z25vbWlpeHp5a2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NDgzMzgsImV4cCI6MjA5NjMyNDMzOH0.OV23y1pl8I_J9zT9JTv6h9GBIBpe_WiPYGbzgtUgU8g';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const recentExpertColors = new Set();
const expertHistoryLimit = 200;

function getRandomHexColor() {
  const value = Math.floor(Math.random() * 0x1000000);
  return `#${value.toString(16).padStart(6, '0').toUpperCase()}`;
}

function getUniqueExpertHexColor() {
  let hex = getRandomHexColor();
  for (let attempts = 0; attempts < 12 && recentExpertColors.has(hex); attempts += 1) {
    hex = getRandomHexColor();
  }

  if (recentExpertColors.has(hex)) {
    const first = recentExpertColors.values().next().value;
    if (first) recentExpertColors.delete(first);
  }

  recentExpertColors.add(hex);
  while (recentExpertColors.size > expertHistoryLimit) {
    const first = recentExpertColors.values().next().value;
    if (!first) break;
    recentExpertColors.delete(first);
  }
  return hex;
}

function isAdminUser() {
  if (!currentUser) return false;
  const username = String(currentUser).toLowerCase();
  const email = currentUserEmail ? String(currentUserEmail).toLowerCase() : '';
  return username === 'dogoraga' || email === 'colorguessa@colorguessa.com';
}

function updateAdminUI() {
  const admin = isAdminUser();
  if (adminSection) adminSection.classList.toggle('hidden', !admin);
  if (adminInfo && !admin) adminInfo.textContent = '';
  if (authButton) {
    authButton.textContent = currentUser ? `Hi, ${currentUser}${admin ? ' (Admin)' : ''}` : 'Sign in';
    authButton.setAttribute('aria-label', currentUser ? `Signed in as ${currentUser}${admin ? ' (Admin)' : ''}` : 'Sign in to save your progress');
    authButton.classList.toggle('admin-badge', admin);
  }
}

function setAdminInfo(message, type = 'info') {
  if (!adminInfo) return;
  adminInfo.textContent = message;
  adminInfo.style.color = type === 'error' ? '#b91c1c' : '#1f2937';
}

function ensureAdmin() {
  if (!isAdminUser()) {
    setAdminInfo('Admin access required.');
    return false;
  }
  return true;
}

async function showAdminReport() {
  if (!ensureAdmin()) return;
  if (!adminInfo) return;

  setAdminInfo('Loading admin report...');
  try {
    const totalResp = await supabaseClient
      .from('highscores')
      .select('id', { count: 'exact', head: true })
      .ilike('mode', '%|expert');
    if (totalResp.error) throw totalResp.error;
    const totalExpertEntries = totalResp.count || 0;

    const modes = ['name', 'hex', 'rgb', 'hsl'];
    const modeCounts = {};
    for (const mode of modes) {
      const modeResp = await supabaseClient
        .from('highscores')
        .select('id', { count: 'exact', head: true })
        .eq('mode', `${mode}|expert`);
      if (modeResp.error) throw modeResp.error;
      modeCounts[mode] = modeResp.count || 0;
    }

    const topResp = await supabaseClient
      .from('highscores')
      .select('user_id, username, mode, score, leaderboard_public')
      .ilike('mode', '%|expert')
      .order('score', { ascending: false })
      .limit(10);
    if (topResp.error) throw topResp.error;
    const topRows = topResp.data || [];
    const topItems = topRows.map((row, index) => {
      const displayName = row.username || `${String(row.user_id).slice(0, 8)}...`;
      const publicFlag = row.leaderboard_public ? 'public' : 'hidden';
      const baseMode = (row.mode || '').split('|')[0] || row.mode;
      return `${index + 1}. ${displayName} — ${baseMode.toUpperCase()} — ${row.score} (${publicFlag})`;
    }).join('\n');

    const report = [
      `Admin report for expert leaderboard`,``,
      `Total expert leaderboard entries: ${totalExpertEntries}`,
      `Entries by mode: ${modes.map((m) => `${m.toUpperCase()}: ${modeCounts[m]}`).join(', ')}`,
      `Top 10 expert entries:`,`${topItems || 'No top entries available.'}`
    ].join('\n');

    adminInfo.innerHTML = report.replace(/\n/g, '<br>');
  } catch (err) {
    setAdminInfo(`Unable to load admin report: ${err.message || err}`, 'error');
  }
}

function updateAuthUI() {
  if (currentUser) {
    const admin = isAdminUser();
    authButton.textContent = `Hi, ${currentUser}${admin ? ' (Admin)' : ''}`;
    authButton.setAttribute('aria-label', `Signed in as ${currentUser}${admin ? ' (Admin)' : ''}`);
    logoutButton.classList.remove('hidden');
    if (accountSettingsButton) accountSettingsButton.classList.remove('hidden');
  } else {
    authButton.textContent = 'Sign in';
    authButton.setAttribute('aria-label', 'Sign in to save your progress');
    logoutButton.classList.add('hidden');
    if (accountSettingsButton) accountSettingsButton.classList.add('hidden');
  }
  updateAdminUI();
}

async function handleAuthSubmit(event) {
  if (event && typeof event.preventDefault === 'function') event.preventDefault();
  const email = (authEmail.value || '').trim();
  const pass = authPassword.value || '';
  const username = (authUsername.value || '').trim();
  const confirmPass = authConfirmPassword ? authConfirmPassword.value || '' : '';

  clearAuthMessage();
  if (!email || !pass) { setAuthMessage('Enter email and password.', 'danger'); return; }
  if (!validateEmail(email)) { setAuthMessage('Enter a valid email address.', 'danger'); return; }
  if (authMode === 'signup') {
    if (!username) { setAuthMessage('Choose a username for your account.', 'danger'); return; }
    if (!validateUsername(username)) { setAuthMessage('Usernames may use only letters and numbers.', 'danger'); return; }
    if (username.length < 3) { setAuthMessage('Username must be at least 3 characters.', 'danger'); return; }
    if (pass.length < 8) { setAuthMessage('Password must be at least 8 characters.', 'danger'); return; }
    if (pass !== confirmPass) { setAuthMessage('Passwords do not match.', 'danger'); return; }
    if (!authAgreeCheckbox?.checked) { setAuthMessage('You must agree to the Terms of Service and Privacy Policy.', 'danger'); return; }
    const usernameTaken = await isUsernameTaken(username);
    if (usernameTaken) { setAuthMessage('That username is already taken. Choose another.', 'danger'); return; }
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
      currentUserEmail = result.data.user.email;
      currentUser = result.data.user.user_metadata?.username || result.data.user.email;
      updateAuthUI();
      closeModal(authModal);
      await loadHighScores();
      setMessage(`Signed in as ${currentUser}.`, 'success');
    }
  } catch (err) {
    const msg = err.message || 'Unable to authenticate.';
    if (/already registered|duplicate/i.test(msg)) {
      setAuthMessage('This email is already registered. Sign in or use another email.', 'danger');
    } else if (/invalid email/i.test(msg)) {
      setAuthMessage('Enter a valid email address.', 'danger');
    } else if (/password/i.test(msg) && /at least/i.test(msg)) {
      setAuthMessage('Password must be at least 8 characters.', 'danger');
    } else {
      setAuthMessage(msg, 'danger');
    }
  }
}

async function signOut() {
  await supabaseClient.auth.signOut();
  currentUser = null;
  currentUserId = null;
  setMessage('Signed out.');
  updateAuthUI();
  highScores = {};
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

  if (!username) {
    setMessage('Choose a username.', 'danger');
    return;
  }
  if (!validateUsername(username)) {
    setMessage('Usernames may use only letters and numbers.', 'danger');
    return;
  }
  if (username.length < 3) {
    setMessage('Username must be at least 3 characters.', 'danger');
    return;
  }
  const usernameTaken = await isUsernameTaken(username, currentUserId);
  if (usernameTaken) {
    setMessage('That username is already taken. Choose another.', 'danger');
    return;
  }
  if (newEmail && !validateEmail(newEmail)) {
    setMessage('Enter a valid email address.', 'danger');
    return;
  }

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
    const msg = err.message || 'Unable to save account settings.';
    if (/already registered|duplicate/i.test(msg)) {
      setMessage('That email is already registered. Use another address.', 'danger');
    } else {
      setMessage(msg, 'danger');
    }
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
    case 'hard': return 0;
    case 'expert': return 0;
    default: return 0; // 0 = typed input
  }
}

function generateExtendedPalette(baseColors, deltas = [-20, -10, 10, 20]) {
  const extended = [];
  const seen = new Set();
  baseColors.forEach((c) => {
    if (!seen.has(c.hex)) {
      extended.push({ name: c.name, hex: c.hex });
      seen.add(c.hex);
    }
    const hsl = hexToHsl(c.hex);
    deltas.forEach((delta) => {
      const l = Math.max(0, Math.min(100, hsl.l + delta));
      const hex = hslToHex(hsl.h, hsl.s, l);
      if (!seen.has(hex)) {
        extended.push({ name: `${c.name} ${delta > 0 ? '+' : ''}${delta}`, hex });
        seen.add(hex);
      }
    });
  });
  return extended;
}

function getPaletteForDifficulty(mode, difficulty) {
  if (mode === 'name') {
    switch (difficulty) {
      case 'very-easy':
        return colorData.slice(0, 16);
      case 'easy':
        return colorData.slice(0, 40);
      case 'medium':
        return colorData.slice(0, 80);
      case 'hard':
        return colorData.slice(0, 120);
      case 'expert':
        return colorData.slice();
      default:
        return colorData.slice();
    }
  }

  switch (difficulty) {
    case 'very-easy':
      return colorData.slice(0, 16);
    case 'easy':
      return colorData.slice();
    case 'medium':
      return generateExtendedPalette(colorData, [-15, -10, 10, 15]);
    case 'hard':
      return generateExtendedPalette(colorData, [-25, -20, -15, -10, 10, 15, 20, 25]);
    case 'expert':
      return null;
    default:
      return colorData.slice();
  }
}

// For Expert mode: generate a dense cluster of very similar shades around a single base color.
function generateExpertCluster(baseColor, count = 1024) {
  const hsl = hexToHsl(baseColor.hex);
  const cluster = [{ name: baseColor.name, hex: baseColor.hex }];
  for (let i = 1; i < count; i += 1) {
    const dh = (Math.random() * 60) - 30; // widen range to allow many unique variants
    const ds = (Math.random() * 40) - 20;
    const dl = (Math.random() * 40) - 20;
    const h = (hsl.h + dh + 360) % 360;
    const s = Math.max(0, Math.min(100, hsl.s + ds));
    const l = Math.max(0, Math.min(100, hsl.l + dl));
    const hex = hslToHex(h, s, l).toUpperCase();
    cluster.push({ name: baseColor.name, hex });
  }
  return cluster;
}

function getTimerForDifficulty() {
  switch (currentDifficulty) {
    case 'very-easy':
      return Math.min(timerSetting + 15, 120);
    case 'easy':
      return Math.min(timerSetting + 10, 120);
    case 'medium':
      return timerSetting;
    case 'hard':
      return Math.max(timerSetting - 10, 10);
    case 'expert':
      return Math.max(timerSetting - 20, 10);
    default:
      return timerSetting;
  }
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
    const hex = color.hex.toUpperCase();
    return hex.startsWith('#') ? hex : `#${hex}`;
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
  // Use a larger palette as difficulty increases.
  let palette = getPaletteForDifficulty(currentMode, currentDifficulty);
  if (palette === null) {
    const randomHex = getUniqueExpertHexColor();
    palette = [{ name: 'Random', hex: randomHex }];
  }
  const optionsCount = getOptionsCountForDifficulty(currentDifficulty);

  if (optionsCount > 0) {
    const options = shuffle(palette).slice(0, optionsCount);
    targetColor = options[getRandomInt(options.length)];

    targetLabel.textContent = `Choose the correct ${getModeLabel(currentMode).toLowerCase()}`;
    targetName.textContent = "Select the right answer from below";
    swatch.style.backgroundColor = targetColor.hex.startsWith('#') ? targetColor.hex : `#${targetColor.hex}`;

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
    swatch.style.backgroundColor = targetColor.hex.startsWith('#') ? targetColor.hex : `#${targetColor.hex}`;

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
  highScores = {};
  if (!currentUserId) return;
  const { data, error } = await supabaseClient
    .from('highscores')
    .select('mode, score')
    .eq('user_id', currentUserId);
  if (error) return;
  data.forEach((row) => {
    const parts = (row.mode || '').split('|');
    const baseMode = parts[0] || row.mode;
    const difficulty = parts[1] || 'default';
    const key = difficulty === 'default' ? baseMode : `${baseMode}|${difficulty}`;
    highScores[key] = Math.max(highScores[key] || 0, row.score);
    highScores[baseMode] = Math.max(highScores[baseMode] || 0, row.score);
  });
  highScoreValue.textContent = getCurrentHighScore();
}

function saveHighScores() {
  // high scores are stored with Supabase for authenticated users.
}

function getCurrentHighScore() {
  const key = `${currentMode}|${currentDifficulty}`;
  return highScores[key] ?? highScores[currentMode] ?? 0;
}

function getScoreForCorrectAnswer() {
  switch (currentDifficulty) {
    case 'very-easy':
      return 6;
    case 'easy':
      return 10;
    case 'medium':
      return 14;
    case 'hard':
      return 18;
    case 'expert':
      return 24;
    default:
      return 10;
  }
}

async function updateHighScoreIfNeeded() {
  if (score > getCurrentHighScore()) {
    const key = `${currentMode}|${currentDifficulty}`;
    highScores[key] = score;
    highScores[currentMode] = Math.max(highScores[currentMode] || 0, score);
    highScoreValue.textContent = score;
    if (!currentUserId) {
      setMessage(currentDifficulty === 'expert'
        ? 'Sign in to save your expert score and appear on the global leaderboard.'
        : 'Sign in to save your score and appear on the global leaderboard.',
      'danger');
      return;
    }
    // store mode with difficulty suffix so global rankings can filter by difficulty
    const dbMode = `${currentMode}|${currentDifficulty}`;
    const dbRow = { user_id: currentUserId, mode: dbMode, score, username: currentUser, leaderboard_public: true };
    // Avoid optional columns if the Supabase table does not include them.
    const { data, error } = await supabaseClient
      .from('highscores')
      .upsert(dbRow, { onConflict: ['user_id', 'mode'] })
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
  const isOwn = currentUserId && String(row.user_id) === String(currentUserId);
  const username = row.username || (isOwn ? currentUser : null);
  if (username && (row.leaderboard_public || isOwn)) return username;
  return `${String(row.user_id).slice(0, 8)}...`;
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
  let data;
  let error;

  const tryQuery = async (selectFields) => {
    const query = supabaseClient.from('highscores')
      .select(selectFields)
      .order('score', { ascending: false })
      .limit(20);
    if (globalLeaderboardMode === 'all') {
      return query.ilike('mode', '%|expert');
    }
    return query.eq('mode', `${globalLeaderboardMode}|expert`);
  };

  ({ data, error } = await tryQuery('user_id, mode, score, updated_at, username, leaderboard_public'));

  if (error && /username|leaderboard_public/i.test(error.message || '')) {
    console.warn('Leaderboard query fallback due to missing optional columns:', error.message);
    ({ data, error } = await tryQuery('user_id, mode, score, updated_at'));
  }

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
  
  const processedData = data.map((row) => ({
    ...row,
    // extract base mode (e.g., "hex" from "hex|expert") for display
    mode: (row.mode || '').split('|')[0] || row.mode,
    username: row.username || null,
    leaderboard_public: row.leaderboard_public == null ? true : row.leaderboard_public
  }));

  leaderboardMessage.textContent = `Top ${data.length} expert scores ${globalLeaderboardMode === 'all' ? 'across all modes' : `for ${globalLeaderboardMode.toUpperCase()}`}.`;
  renderLeaderboardRows(processedData);
}

async function setLeaderboardMode(mode) {
  globalLeaderboardMode = mode;
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
    leaderboard: leaderboardPage,
    terms: document.getElementById('termsPage'),
    privacy: document.getElementById('privacyPage')
  };

  Object.values(pages).forEach((el) => el?.classList.add('hidden'));
  if (pages[page]) pages[page].classList.remove('hidden');

  startPageButton.classList.toggle('active', page === 'start');
  playPageButton.classList.toggle('active', page === 'play');
  leaderboardPageButton.classList.toggle('active', page === 'leaderboard');
  infoButton.classList.toggle('active', page === 'info');
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
  authAgreeRow.classList.toggle('hidden', !isSignup);
  if (!isSignup && authAgreeCheckbox) authAgreeCheckbox.checked = false;
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
    score += getScoreForCorrectAnswer();
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
  applyDifficulty(mode);
}

function setGuessMode(mode) {
  currentMode = mode;
  modeNameButton.classList.toggle("active", mode === "name");
  modeHexButton.classList.toggle("active", mode === "hex");
  modeRgbButton.classList.toggle("active", mode === "rgb");
  modeHslButton.classList.toggle("active", mode === "hsl");
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

submitAnswerButton.addEventListener("click", handleSubmit);
answerInput.addEventListener("keydown", (event) => {
  event.stopPropagation();
});
answerInput.addEventListener("keypress", (event) => {
  event.stopPropagation();
});
answerInput.addEventListener("keyup", (event) => {
  event.stopPropagation();
});

window.addEventListener("load", async () => {
  await initializeAuth();
  loadSettings();
  applyDifficulty(currentDifficulty);
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
  if (adminRefreshLeaderboardButton) adminRefreshLeaderboardButton.addEventListener('click', async () => {
    if (!ensureAdmin()) return;
    setAdminInfo('Refreshing leaderboard...');
    await loadGlobalLeaderboard();
    setAdminInfo('Leaderboard refreshed.');
  });
  if (adminViewStatsButton) adminViewStatsButton.addEventListener('click', () => showAdminReport());
  themeToggleButton.addEventListener('click', () => {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
  startPageButton.addEventListener('click', () => showPage('start'));
  playPageButton.addEventListener('click', () => { showPage('play'); if (!gameActive) resetGame(); });
  leaderboardPageButton.addEventListener('click', () => { showPage('leaderboard'); setLeaderboardMode(globalLeaderboardMode); });
  infoButton.addEventListener('click', () => showPage('info'));
  startGameButton.addEventListener('click', () => { showPage('play'); resetGame(); });
  if (termsLink) termsLink.addEventListener('click', (event) => { event.preventDefault(); showPage('terms'); });
  if (privacyLink) privacyLink.addEventListener('click', (event) => { event.preventDefault(); showPage('privacy'); });
  if (authTermsLink) authTermsLink.addEventListener('click', (event) => { event.preventDefault(); showPage('terms'); });
  if (authPrivacyLink) authPrivacyLink.addEventListener('click', (event) => { event.preventDefault(); showPage('privacy'); });
  if (termsBackButton) termsBackButton.addEventListener('click', () => showPage('start'));
  if (privacyBackButton) privacyBackButton.addEventListener('click', () => showPage('start'));
  viewHelpButton.addEventListener('click', () => openModal(helpModal));
  backToHomeButton.addEventListener('click', () => showPage('start'));
  backToHomeButtonFromLeaderboard.addEventListener('click', () => showPage('start'));
  leaderboardNameButton.addEventListener('click', () => setLeaderboardMode('name'));
  leaderboardHexButton.addEventListener('click', () => setLeaderboardMode('hex'));
  leaderboardRgbButton.addEventListener('click', () => setLeaderboardMode('rgb'));
  leaderboardHslButton.addEventListener('click', () => setLeaderboardMode('hsl'));
});
