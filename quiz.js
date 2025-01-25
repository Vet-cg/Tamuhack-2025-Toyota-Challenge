const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const question1 = document.getElementById("question1");

console.log(startBtn);
console.log(intro);
console.log(question1);


const startBtnPressed = async(e) => {
    e.preventDefault();
    intro.classList.add("hide");
    question1.classList.remove("hide");
}
startBtn.addEventListener("click", function() {
    intro.classList.add("hide");
    question1.classList.remove("hide");
});