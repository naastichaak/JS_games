// all games
let birthYearGame = document.querySelector("#birthYearGame");
let gessTheNumberGame = document.querySelector("#gessTheNumberGame");
let rockScissorsPaperGame = document.querySelector("#rockScissorsPaperGame");
let calculatorGame = document.querySelector("#calculatorGame");
let timeCalculatorGame = document.querySelector("#timeCalculatorGame");
let dino = document.querySelector(".dino");
let football = document.querySelector(".football");
let threeNumberGame = document.querySelector("#threeNumberGame");
let aboutMe = document.querySelector("#about-me");
// let scientistsGame = document.querySelector("#scientistsGame");

let choose = document.querySelector("#choose");

choose.addEventListener("change", function () {
    console.log(choose.selectedIndex);

    switch (choose.selectedIndex) {
        case 1:
            numeric();
            break;
        case 2:
            gaming();
            break;
        case 3:
            introductory();
            break;
        case 0:
            interactive();
            break;
    
        default:
            break;
    }
});

function interactive() {
    birthYearGame.style.display = "flex";
    gessTheNumberGame.style.display = "flex";
    calculatorGame.style.display = "flex";
    timeCalculatorGame.style.display = "flex";
    threeNumberGame.style.display = "flex";
    rockScissorsPaperGame.style.display = "flex";
    dino.style.display = "flex";
    football.style.display = "flex";
    aboutMe.style.display = "flex";
    // scientistsGame.style.display = "flex";
};

function numeric() {
    rockScissorsPaperGame.style.display = "none";
    dino.style.display = "none";
    football.style.display = "none";
    aboutMe.style.display = "none";
    // scientistsGame.style.display = "none";

    birthYearGame.style.display = "flex";
    gessTheNumberGame.style.display = "flex";
    calculatorGame.style.display = "flex";
    timeCalculatorGame.style.display = "flex";
    threeNumberGame.style.display = "flex";
};

function gaming() {
    birthYearGame.style.display = "none";
    gessTheNumberGame.style.display = "none";
    calculatorGame.style.display = "none";
    timeCalculatorGame.style.display = "none";
    threeNumberGame.style.display = "none";
    aboutMe.style.display = "none";

    // scientistsGame.style.display = "flex";
    rockScissorsPaperGame.style.display = "flex";
    dino.style.display = "flex";
    football.style.display = "flex";
};

function introductory() {
    birthYearGame.style.display = "none";
    gessTheNumberGame.style.display = "none";
    calculatorGame.style.display = "none";
    timeCalculatorGame.style.display = "none";
    threeNumberGame.style.display = "none";
    aboutMe.style.display = "none";
    // scientistsGame.style.display = "none";
    rockScissorsPaperGame.style.display = "none";
    dino.style.display = "none";
    football.style.display = "none";

    aboutMe.style.display = "flex";
};