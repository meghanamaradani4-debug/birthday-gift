// ===============================
// Falling Roses
// ===============================
function createRose() {

    const rose = document.createElement("div");

    rose.innerHTML = "🌹";

    rose.style.position = "fixed";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.top = "-50px";
    rose.style.fontSize = (20 + Math.random() * 20) + "px";
    rose.style.animation = "roseFall 8s linear forwards";
    rose.style.zIndex = "9999";
    rose.style.pointerEvents = "none";

    document.body.appendChild(rose);

    setTimeout(() => {
        rose.remove();
    }, 8000);
}

setInterval(createRose, 800);


// ===============================
// Falling Stars
// ===============================
function createStar() {

    const star = document.createElement("div");

    star.innerHTML = "⭐";

    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = "-30px";
    star.style.fontSize = "20px";
    star.style.animation = "starFall 6s linear forwards";
    star.style.zIndex = "9999";
    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 6000);
}

setInterval(createStar, 1000);
document.head.appendChild(style);