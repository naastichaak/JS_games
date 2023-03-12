// select's items
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

// all games
let birthYearGame = document.querySelector("#birthYearGame");
let gessTheNumberGame = document.querySelector("#gessTheNumberGame");
let rockScissorsPaperGame = document.querySelector("#rockScissorsPaperGame");
let calculatorGame = document.querySelector("#calculator");
let timeCalculatorGame = document.querySelector("#timeCalculator");
let dino = document.querySelector(".dino");
let football = document.querySelector(".football");
let threeNumberGame = document.querySelector("#threeNumberGame");
let aboutMe = document.querySelector("#about-me");
let scientistsGame = document.querySelector("#scientistsGame");

const interactive = () => {
    birthYearGame.style.display = "flex";
    gessTheNumberGame.style.display = "flex";
    calculatorGame.style.display = "flex";
    timeCalculatorGame.style.display = "flex";
    threeNumberGame.style.display = "flex";
    rockScissorsPaperGame.style.display = "flex";
    dino.style.display = "flex";
    football.style.display = "flex";
    aboutMe.style.display = "flex";
    scientistsGame.style.display = "flex";
};

const numeric = () => {
    console.log("hi");
    rockScissorsPaperGame.style.display = "none";
    dino.style.display = "none";
    football.style.display = "none";
    aboutMe.style.display = "none";
    scientistsGame.style.display = "none";

    birthYearGame.style.display = "flex";
    gessTheNumberGame.style.display = "flex";
    calculatorGame.style.display = "flex";
    timeCalculatorGame.style.display = "flex";
    threeNumberGame.style.display = "flex";
};

const gaming = () => {
    birthYearGame.style.display = "none";
    gessTheNumberGame.style.display = "none";
    calculatorGame.style.display = "none";
    timeCalculatorGame.style.display = "none";
    threeNumberGame.style.display = "none";
    aboutMe.style.display = "none";

    scientistsGame.style.display = "flex";
    rockScissorsPaperGame.style.display = "flex";
    dino.style.display = "flex";
    football.style.display = "flex";
};

const introductory = () => {
    aboutMe.style.display = "flex";

    birthYearGame.style.display = "none";
    gessTheNumberGame.style.display = "none";
    calculatorGame.style.display = "none";
    timeCalculatorGame.style.display = "none";
    threeNumberGame.style.display = "none";
    aboutMe.style.display = "none";
    scientistsGame.style.display = "none";
    rockScissorsPaperGame.style.display = "none";
    dino.style.display = "none";
    football.style.display = "none";
};

option1.addEventListener("select", interactive);
option2.addEventListener("click", numeric);
option3.addEventListener("select", gaming);
option4.addEventListener("select", introductory);