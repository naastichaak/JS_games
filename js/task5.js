let timeCalculator = document.querySelector("#time-calculator-search");
let answerTimeCalculator = document.querySelector("#answer-time-calculator");

timeCalculator.addEventListener("click", () => {
    let mins = +document.querySelector("#time-calculator-input").value;

    const day = Math.floor(mins / (60 * 24));
    mins = mins % (60 * 24);
    let hours = Math.floor(mins / 60);
    if (hours < 10) {
        hours = "0" + mins;
    }
    mins = mins % 60;
    if (mins < 10) {
        mins = "0" + mins;
    }

    answerTimeCalculator.innerText = `${day} дн. ${hours}:${mins}:00`
});