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
