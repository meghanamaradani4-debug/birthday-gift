// ===============================
// Sparkles Animation
// ===============================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparkle.style.fontSize = (10 + Math.random() * 20) + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "9999";
    sparkle.style.animation = "sparkle 1.5s linear forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

setInterval(createSparkle, 200);


// ===============================
// Automatic Confetti
// ===============================

setInterval(() => {

    confetti({
        particleCount: 180,
        spread: 180,
        startVelocity: 35,
        ticks: 250,
        origin: {
            x: Math.random(),
            y: Math.random() * 0.5
        }
    });

}, 4000);


// ===============================
// Sparkle Animation CSS
// ===============================

const style = document.createElement("style");

style.innerHTML += `

@keyframes sparkle{

0%{
opacity:1;
transform:scale(0.5) rotate(0deg);
}

100%{
opacity:0;
transform:translateY(-80px) scale(2) rotate(360deg);
}

}
`;

document.head.appendChild(style);
