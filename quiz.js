const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const controls = document.getElementById("controls");
const question1 = document.getElementById("question1");

startBtn.addEventListener("click", function() {
    intro.classList.add("hide");
    question1.classList.remove("hide");
});

