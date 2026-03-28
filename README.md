<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SubShield</title>
  <link rel="stylesheet" href="style.css">

  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
    <!-- INTRO SCREEN -->
<div id="intro">
  <h1 class="intro-text">🛡️ SubShield</h1>
</div>

<!-- NAVBAR -->
<div class="navbar">
  <div class="logo">🛡️ SubShield</div>

  <div class="profile-menu">
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
         class="profile-icon"
         onclick="toggleMenu()">

    <div id="dropdown" class="dropdown">
      <div class="dropdown-item" onclick="goToProfile()">👤 Profile</div>
      <div class="dropdown-item" onclick="profileSettings()">⚙️ Settings</div>
      <div class="dropdown-item logout" onclick="logout()">🚪 Logout</div>
    </div>
  </div>
</div>

<h1>💳 Subscription Black Hole</h1>

<!-- FORM -->
<div class="form">

  <select id="presetName" onchange="handlePresetChange()">
    <option value="">Select Subscription</option>
    <option>Netflix</option>
    <option>Amazon Prime Video</option>
    <option>Spotify</option>
    <option>Disney+ Hotstar</option>
    <option value="custom">Other</option>
  </select>

  <input id="customName" placeholder="Enter custom name" style="display:none;">

  <input id="cost" type="number" placeholder="Cost ₹">
  <input id="date" type="date">

  <select id="billing">
    <option value="monthly">Monthly</option>
    <option value="half-yearly">Half-Yearly</option>
    <option value="yearly">Yearly</option>
  </select>

  <select id="category">
    <option>entertainment</option>
    <option>productivity</option>
    <option>health</option>
    <option>utilities</option>
  </select>

  <select id="payment">
    <option>PhonePe</option>
    <option>Google Pay</option>
    <option>Paytm</option>
    <option>Card</option>
  </select>

  <button onclick="addSubscription()">Add</button>
</div>

<h2>📊 Dashboard</h2>
<p id="total"></p>

<h2>📊 Usage vs Spending</h2>
<canvas id="myChart"></canvas>

<h2>📋 Subscriptions</h2>
<div id="list"></div>

<h2>📅 Upcoming Renewals (30 days)</h2>
<div id="renewals"></div>

<h2>💰 Savings Projection</h2>
<p id="savings"></p>

<script src="script.js"></script>

</body>
</html>

/* 🔥 GOOGLE FONTS */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');

/* ================= BODY ================= */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 20px;

  background: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), 
    url('pranali.jpg.jpeg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  opacity: 0;
  transition: opacity 1s ease;
}

body.loaded {
  opacity: 1;
}

/* ================= INTRO ================= */
#intro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
}

.intro-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 60px;
  color: #00ffe7;
  letter-spacing: 3px;

  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #00ffe7;

  display: inline-block;
  max-width: max-content;

  animation: typing 2.5s steps(12) forwards,
             blink 0.6s infinite,
             glow 1.5s infinite alternate;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  50% { border-color: transparent }
}

@keyframes glow {
  from { text-shadow: 0 0 10px #00ffe7; }
  to { text-shadow: 0 0 30px #00ffe7, 0 0 60px #00ffe7; }
}

.fade-out {
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

/* ================= NAVBAR ================= */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 28px;
  border-radius: 16px;
  backdrop-filter: blur(15px);

  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    background: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), 
    url('img2.jpeg');
}

.logo {
  font-size: 24px;
  font-weight: 600;

  background: linear-gradient(90deg, #00ffe7, #ff7a18, #00ffe7);
  background-size: 200%;

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;

  animation: shine 3s linear infinite;
}

@keyframes shine {
  to { background-position: 200% center; }
}

.profile-icon {
  width: 45px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.profile-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px #00ffe7;
}

/* ================= FORM ================= */
.form {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(12px);
  padding: 22px;
  border-radius: 18px;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  box-shadow: 0 12px 35px rgba(0,0,0,0.3);
}

/* BIG INPUTS */
.form input,
.form select {
  padding: 16px 18px;
  font-size: 16px;
  min-width: 160px;

  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.3);

  background: rgba(255,255,255,0.12);
  color: white;

  outline: none;
  transition: all 0.3s ease;
  
}

.form input::placeholder {
  color: rgba(255,255,255,0.7);
}

.form input:focus,
.form select:focus {
  border: 1px solid #00ffe7;
  box-shadow: 0 0 12px #00ffe7;
  background: rgba(255,255,255,0.18);
}

/* ================= BUTTON ================= */
button {
  padding: 16px 28px;
  font-size: 16px;
  font-weight: 600;

  border-radius: 12px;
  border: none;

  color: white;
  cursor: pointer;

  background: linear-gradient(135deg, #ff7a18, #ff3c00);
  background-size: 200%;

  transition: all 0.3s ease;
}

button:hover {
  background-position: right;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

button:active {
  transform: scale(0.95);
}

/* ================= CARDS ================= */
.card {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(12px);
  color: white;

  padding: 15px;
  margin: 10px 0;
  border-radius: 12px;

  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.warning {
  color: #ff4d4d;
}

/* ================= BOXES ================= */
#total, #savings, #renewals {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(12px);
  color: white;

  padding: 12px;
  border-radius: 12px;
}

/* HEADINGS */
h1, h2 {
  color: white;
}
