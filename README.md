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
let chartInstance = null;
let spendingChart = null;
let usageChart = null;

// ================= INTRO + PAGE LOAD =================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.classList.add("fade-out");
  }, 3000);
});

// ================= NAVBAR =================
function toggleMenu() {
  const menu = document.getElementById("dropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// close dropdown
document.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdown");
  const icon = document.querySelector(".profile-icon");

  if (!menu || !icon) return;

  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.style.display = "none";
  }
});

function goToProfile() {
  alert("Profile page coming soon!");
}

function profileSettings() {
  alert("Settings coming soon!");
}

function logout() {
  alert("Logged out!");
}

// ================= NAME INPUT =================
function handlePresetChange() {
  const val = document.getElementById("presetName").value;
  document.getElementById("customName").style.display =
    val === "custom" ? "block" : "none";
}

// ================= STORAGE =================
function getData() {
  return JSON.parse(localStorage.getItem("subs")) || [];
}

function saveData(data) {
  localStorage.setItem("subs", JSON.stringify(data));
}

// ================= ADD =================
function addSubscription() {
  const preset = document.getElementById("presetName").value;
  const custom = document.getElementById("customName").value;
  const name = preset === "custom" ? custom : preset;

  const cost = document.getElementById("cost").value;
  const date = document.getElementById("date").value;

  if (!name || !cost || !date) {
    return alert("Please fill all fields!");
  }

  const sub = {
    name,
    cost: parseFloat(cost),
    renewalDate: date,
    category: document.getElementById("category").value,
    billingCycle: document.getElementById("billing").value,
    paymentMethod: document.getElementById("payment").value,
    ratings: []
  };

  let data = getData();
  data.push(sub);
  saveData(data);

  document.getElementById("cost").value = "";
  document.getElementById("date").value = "";
  document.getElementById("customName").value = "";

  loadData();
}

// ================= LOAD =================
function loadData() {
  const dataList = getData();
  const list = document.getElementById("list");
  list.innerHTML = "";

  let total = 0, flagged = 0;
  let renewalsHTML = "";
  let today = new Date();

  dataList.forEach((data, index) => {
    let monthly = data.cost;
    if (data.billingCycle === "half-yearly") monthly /= 6;
    if (data.billingCycle === "yearly") monthly /= 12;

    total += monthly;

    let cancel = false;
    if (data.ratings.length >= 3) {
      cancel = data.ratings.slice(-3)
        .every(r => r === "Never used");
    }

    if (cancel) flagged += monthly;

    let diff = (new Date(data.renewalDate) - today)/(1000*60*60*24);
    if (diff <= 30 && diff >= 0) {
      renewalsHTML += `
        <p>⚠️ ${data.name} - ₹${data.cost} (in ${Math.round(diff)} days)</p>`;
    }

    list.innerHTML += `
      <div class="card">
        <h3>${data.name} - ₹${data.cost}</h3>
        <p>${data.billingCycle} | ${data.paymentMethod}</p>

        <select onchange="rate(${index}, this.value)">
          <option>Rate Usage</option>
          <option>Used frequently</option>
          <option>Used occasionally</option>
          <option>Never used</option>
        </select>

        ${cancel ? '<p class="warning">Cancel Recommended 🚨</p>' : ''}
      </div>`;
  });

  document.getElementById("total").innerText =
    "Total Monthly Spend: ₹" + total.toFixed(2);

  document.getElementById("renewals").innerHTML =
    renewalsHTML || "No upcoming renewals";

  let yearly = flagged * 12;
  let future = Math.round(yearly * Math.pow(1.08, 10));

  document.getElementById("savings").innerText =
    `Save ₹${yearly.toFixed(0)}/year → ₹${future} in 10 years`;

  renderChart(dataList);
  renderBubbleCharts(dataList);
}

// ================= BAR GRAPH =================
function renderChart(dataList) {
  const ctx = document.getElementById("myChart");

  let processed = dataList.map(d => {
    let monthly = d.cost;
    if (d.billingCycle === "half-yearly") monthly /= 6;
    if (d.billingCycle === "yearly") monthly /= 12;

    let score = 1;
    if (d.ratings.length) {
      let last = d.ratings[d.ratings.length - 1];
      if (last === "Used frequently") score = 3;
      else if (last === "Used occasionally") score = 2;
    }

    return { name: d.name, cost: monthly, usage: score };
  });

  processed.sort((a, b) => b.usage - a.usage || b.cost - a.cost);

  let labels = processed.map(d => d.name);
  let spend = processed.map(d => d.cost);
  let usage = processed.map(d => d.usage);

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: "₹ Monthly Cost", data: spend },
        { label: "Usage Score (3 = High)", data: usage }
      ]
    }
  });
}

// ================= BUBBLE CHARTS =================
function renderBubbleCharts(dataList) {

  const spendingCtx = document.getElementById("spendingBubble");
  const usageCtx = document.getElementById("usageBubble");

  if (!spendingCtx || !usageCtx) return;

  let spendingData = [];
  let usageData = [];

  dataList.forEach((d, i) => {
    let monthly = d.cost;
    if (d.billingCycle === "half-yearly") monthly /= 6;
    if (d.billingCycle === "yearly") monthly /= 12;

    let score = 1;
    if (d.ratings.length) {
      let last = d.ratings[d.ratings.length - 1];
      if (last === "Used frequently") score = 3;
      else if (last === "Used occasionally") score = 2;
    }

    spendingData.push({
      x: i + 1,
      y: monthly,
      r: Math.max(5, monthly / 5)
    });

    usageData.push({
      x: i + 1,
      y: score,
      r: score * 6
    });
  });

  if (spendingChart) spendingChart.destroy();
  if (usageChart) usageChart.destroy();

  spendingChart = new Chart(spendingCtx, {
    type: "bubble",
    data: {
      datasets: [{
        label: "💰 Money Spent",
        data: spendingData
      }]
    }
  });

  usageChart = new Chart(usageCtx, {
    type: "bubble",
    data: {
      datasets: [{
        label: "📊 Usage Level",
        data: usageData
      }]
    }
  });
}

// ================= RATE =================
function rate(index, value) {
  let data = getData();
  data[index].ratings.push(value);
  saveData(data);
  loadData();
}

// ================= INIT =================
loadData();
