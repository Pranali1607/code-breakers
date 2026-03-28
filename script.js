let catChart = null, effChart = null;

const getData = () => JSON.parse(localStorage.getItem("subs")) || [];
const saveData = (data) => localStorage.setItem("subs", JSON.stringify(data));

// --- INITIALIZE ---
window.addEventListener("load", () => {
    setTimeout(() => {
        const intro = document.getElementById("intro");
        intro.classList.add("intro-fade-out");
        setTimeout(() => intro.style.display = "none", 800);
    }, 2000);

    loadData();
    initGame();
});

// --- POPUP FUNCTION ---
function showPopup(message) {
    const popup = document.getElementById("popup");
    if (!popup) return;

    popup.innerText = message;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 4000);
}

// --- PROFILE DROPDOWN ---
function toggleMenu(event) {
    event.stopPropagation();
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.closest('.profile-circle')) {
        const d = document.getElementById("dropdown");
        if (d && d.classList.contains('show')) d.classList.remove('show');
    }
}

// --- FORM LOGIC ---
function handlePresetChange() {
    const v = document.getElementById("presetName").value;
    document.getElementById("customName").style.display = (v === "custom") ? "block" : "none";
}

function addSubscription() {
    const preset = document.getElementById("presetName").value;
    const name = (preset === "custom") ? document.getElementById("customName").value : preset;
    const cost = parseFloat(document.getElementById("cost").value);

    if (!name || isNaN(cost)) return alert("Fill all details! 📝");

    const sub = {
        name,
        cost,
        renewalDate: document.getElementById("date").value,
        billingCycle: document.getElementById("billing").value,
        category: document.getElementById("category").value,
        isTrial: document.getElementById("isTrial").checked,
        ratings: ["3"]
    };

    const data = getData();
    data.push(sub);
    saveData(data);
    loadData();

    document.getElementById("cost").value = "";
}

// --- MAIN LOGIC ---
function loadData() {
    const data = getData();
    const list = document.getElementById("list");
    list.innerHTML = "";

    let totalM = 0, wasteful = 0, cats = {};
    let trialCount = 0;

    const today = new Date();

    data.forEach((item, index) => {

        // 📅 Days remaining
        const renewal = new Date(item.renewalDate);
        const diffDays = Math.ceil((renewal - today) / (1000 * 60 * 60 * 24));

        // 💸 Ignore trial cost
        const cost = item.isTrial ? 0 :
            (item.billingCycle === 'yearly' ? item.cost / 12 : item.cost);

        totalM += cost;

        // 📊 Category data
        cats[item.category] = (cats[item.category] || 0) + cost;

        const rating = item.ratings[item.ratings.length - 1];
        if (rating === "1") wasteful += cost;

        if (item.isTrial) trialCount++;

        // 🎨 Border logic
        let borderColor = '#00ff88';
        if (item.isTrial && diffDays <= 3) borderColor = '#ffcc00';
        if (rating === "1") borderColor = '#ff4d4d';

        // 🔔 POPUP TRIGGER (only once)
        const key = `${item.name}-popup-${diffDays}`;
        if (item.isTrial && (diffDays === 3 || diffDays === 1)) {
            if (!localStorage.getItem(key)) {
                if (diffDays === 1) {
                    showPopup(`🚨 ${item.name} trial ends TOMORROW!`);
                } else {
                    showPopup(`⚠ ${item.name} trial ends in ${diffDays} days!`);
                }
                localStorage.setItem(key, "shown");
            }
        }

        list.innerHTML += `
        <div class="card" style="border-left-color: ${borderColor}">
            
            <div style="display:flex; justify-content:space-between">
                <b>${item.name}</b> 
                <span>₹${item.cost}</span>
            </div>

            ${item.isTrial ? `<p style="color:yellow; font-weight:bold;">🎁 Free Trial Active</p>` : ""}

            ${item.isTrial && diffDays <= 3 ? 
                `<p style="color:red; font-weight:bold;">⚠ Trial ending in ${diffDays} day(s)</p>` 
                : ""}

            <select onchange="rate(${index}, this.value)" 
                style="width:100%; margin:15px 0; background:#000; color:white; border:1px solid #333; padding:10px; border-radius:5px;">
                
                <option value="3" ${rating == "3" ? "selected" : ""}>Essential 🚀</option>
                <option value="1" ${rating == "1" ? "selected" : ""}>Waste 👻</option>
            </select>

            <button onclick="removeSub(${index})"
                style="width:100%; background:#ff4d4d22; color:#ff4d4d; border:1px solid #ff4d4d; padding:10px; border-radius:8px; cursor:pointer;">
                Cancel Registry
            </button>

            <a href="https://wa.me/?text=Split%20payment%20for%20${item.name}" 
                target="_blank" class="wa-split">
                WhatsApp Split
            </a>
        </div>`;
    });

    // 💰 Monthly burn
    document.getElementById("totalVal").innerText = `₹${totalM.toFixed(2)}`;

    // 📈 Future savings
    const compound = wasteful * ((Math.pow(1 + 0.0066, 120) - 1) / 0.0066);
    document.getElementById("saveVal").innerText = `₹${Math.round(compound || 0).toLocaleString()}`;

    // 🧠 Smart insight
    if (trialCount > 0) {
        document.getElementById("smart-insight").innerText =
            `⚠ You have ${trialCount} active free trial(s). Cancel before they charge you!`;
    } else {
        document.getElementById("smart-insight").innerText =
            `"Welcome back! Your high-performance financial command center is ready."`;
    }

    renderCharts(cats, data);
}

// --- ACTIONS ---
function removeSub(i) {
    let d = getData();
    d.splice(i, 1);
    saveData(d);
    loadData();
}

function rate(i, v) {
    let d = getData();
    d[i].ratings.push(v);
    saveData(d);
    loadData();
}

// --- CHARTS ---
function renderCharts(catData, allData) {
    const c1 = document.getElementById("categoryChart").getContext('2d');
    const c2 = document.getElementById("efficiencyChart").getContext('2d');

    if (catChart) catChart.destroy();
    if (effChart) effChart.destroy();

    const gradient = c2.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, '#00f2ff');
    gradient.addColorStop(1, '#0072ff');

    catChart = new Chart(c1, {
        type: 'doughnut',
        data: {
            labels: Object.keys(catData),
            datasets: [{
                data: Object.values(catData),
                backgroundColor: ['#ff00c8', '#00f2ff', '#ffe600'],
                borderWidth: 0
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#fff', padding: 20 } }
            }
        }
    });

    effChart = new Chart(c2, {
        type: 'bar',
        data: {
            labels: allData.map(s => s.name),
            datasets: [{
                data: allData.map(s => s.ratings[s.ratings.length - 1]),
                backgroundColor: gradient,
                borderRadius: 8
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 3,
                    ticks: { color: '#fff', stepSize: 1 },
                    grid: { color: 'rgba(255,255,255,0.05)' }
                },
                x: {
                    ticks: { color: '#fff' },
                    grid: { display: false },
                    offset: true
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// --- GAME (UNCHANGED) ---
let canvas, ctx, player = { x: 30, y: 100 }, bills = [], score = 0, gameActive = false;

function initGame() {
    canvas = document.getElementById("gameCanvas");
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        player.y = e.clientY - rect.top - 15;
    });
}

function startSubGame() {
    document.getElementById("gameOverlay").style.display = "none";
    gameActive = true;
    bills = [];
    score = 0;
    gameLoop();
}

function gameLoop() {
    if (!gameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff00c8";
    ctx.fillRect(player.x, player.y, 30, 30);

    if (Math.random() < 0.03)
        bills.push({ x: canvas.width, y: Math.random() * (canvas.height - 20), s: 5 });

    ctx.fillStyle = "#00f2ff";
    ctx.font = "bold 14px Arial";

    for (let i = bills.length - 1; i >= 0; i--) {
        let b = bills[i];
        b.x -= b.s;
        ctx.fillText("₹ BILL", b.x, b.y);

        if (b.x < player.x + 30 && b.x + 30 > player.x &&
            b.y > player.y && b.y < player.y + 30) {
            gameActive = false;
            document.getElementById("gameOverlay").style.display = "flex";
        }

        if (b.x < -50) {
            bills.splice(i, 1);
            score++;
            document.getElementById("gameScore").innerText = `Score: ${score}`;
        }
    }

    requestAnimationFrame(gameLoop);
}
