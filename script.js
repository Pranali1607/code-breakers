@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&family=Orbitron:wght@700;900&family=Caveat:wght@700&display=swap');

* {
    box-sizing: border-box;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
    margin: 0;
    padding: 20px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #0a0b10;
    color: white;
    background: linear-gradient(rgba(10, 11, 16, 0.95), rgba(48, 43, 99, 0.9));
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
}

/* --- GLITCH INTRO --- */
#intro {
    position: fixed;
    inset: 0;
    background: #0a0b10;
    z-index: 999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.glitch-logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 75px;
    font-weight: 900;
    color: #00f2ff;
    letter-spacing: 15px;
    position: relative;
}

.loader-bar {
    width: 300px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-top: 30px;
    overflow: hidden;
}

.loader-progress {
    width: 0%;
    height: 100%;
    background: #ff00c8;
    animation: load 1.5s forwards;
}

@keyframes load {
    to {
        width: 100%;
    }
}

.boot-text {
    font-family: monospace;
    font-size: 12px;
    color: #ff00c8;
    margin-top: 15px;
    letter-spacing: 3px;
    animation: blink 0.5s infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.intro-fade-out {
    opacity: 0;
    transform: scale(1.1);
    pointer-events: none;
}

/* --- NAVBAR & USER ICON --- */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 60px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    margin-bottom: 30px;
}

.centered-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Orbitron', sans-serif;
    font-size: 28px;
    color: #00f2ff;
    letter-spacing: 8px;
    font-weight: 900;
    text-shadow: 0 0 15px #00f2ff;
}

.profile-circle {
    width: 50px;
    height: 50px;
    border: 2px solid #00f2ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgba(0, 242, 255, 0.1);
}

.user-icon {
    width: 26px;
    height: 26px;
    fill: #00f2ff;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    top: 65px;
    background: #1a1b23;
    border: 1px solid #00f2ff;
    border-radius: 15px;
    min-width: 180px;
    z-index: 1000;
    overflow: hidden;
}

.dropdown-content.show {
    display: block;
    animation: fadeIn 0.3s ease;
}

.dropdown-content a {
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    display: block;
    font-weight: 600;
}

.dropdown-content a:hover {
    background: rgba(0, 242, 255, 0.1);
    color: #00f2ff;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* --- WORKSPACE --- */
#smart-insight {
    background: linear-gradient(90deg, #8b5cf6, #d946ef);
    color: white;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 30px;
}

.unique-registry {
    background: rgba(0, 0, 0, 0.5);
    padding: 40px;
    border-radius: 25px;
    border: 1px solid rgba(0, 242, 255, 0.3);
    margin-bottom: 40px;
}

.registry-title {
    font-family: 'Caveat', cursive;
    font-size: 45px;
    color: #00f2ff;
    margin: 0 0 20px 0;
}

.input-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.field-box {
    display: flex;
    flex-direction: column;
}

.field-box label {
    font-weight: 800;
    font-size: 25px;
    color: #00f2ff;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.field-box input,
.field-box select {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 12px;
    border-radius: 10px;
    font-weight: 700;
    outline: none;
}

.field-box input:focus {
    border-color: #00f2ff;
}

.btn-registry-gradient {
    grid-column: span 3;
    background: linear-gradient(90deg, #00f2ff, #0072ff);
    color: white;
    border: none;
    padding: 18px;
    font-weight: 900;
    font-size: 18px;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 10px;
}

/* --- STATS & VISUALS --- */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
}

.neo-box {
    padding: 25px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 5px solid #ff00c8;
}

.visuals-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1.2fr;
    gap: 20px;
    height: 420px;
    margin-bottom: 40px;
}

.chart-wrapper {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
}

.canvas-box {
    flex-grow: 1;
    position: relative;
    width: 100%;
    min-height: 0;
}

.game-canvas-wrapper {
    position: relative;
    height: 260px;
    background: #000;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #333;
}

#gameCanvas {
    width: 100%;
    height: 100%;
}

#gameOverlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
}

.f-btn {
    background: #ff00c8;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}

/* --- CARDS --- */
.registry-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
}

.card {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 25px;
    border-left: 10px solid #00ff88;
    position: relative;
}

.wa-split {
    display: block;
    text-align: center;
    background: #25D366;
    color: white;
    padding: 12px;
    border-radius: 10px;
    font-weight: 800;
    text-decoration: none;
    margin-top: 15px;
}
.popup {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #ff00c8, #ff4d4d);
    color: white;
    padding: 15px 20px;
    border-radius: 12px;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    opacity: 0;
    transform: translateY(50px);
    pointer-events: none;
    z-index: 9999;
}

.popup.show {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}
