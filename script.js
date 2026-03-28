let catChart = null;
let effChart = null;

const getData = () => JSON.parse(localStorage.getItem("subs")) || [];
const saveData = (data) => localStorage.setItem("subs", JSON.stringify(data));

function toggleMenu(event) {
    if (event) event.stopPropagation();
    const d = document.getElementById("dropdown");
    d.style.display = d.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    const dropdown = document.getElementById("dropdown");
    const profileBtn = document.querySelector(".profile-circle");
    if (dropdown && profileBtn && !profileBtn.contains(event.target)) {
        dropdown.style.display = "none";
    }
}
