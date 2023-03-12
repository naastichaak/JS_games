let stone = document.querySelector("#stone");
let scissors = document.querySelector("#scissors");
let paper = document.querySelector("#paper");

let computer = document.querySelector("#computer");
let you = document.querySelector("#you");

let computerTurnBtn = document.querySelector("#computerTurn");
let ticTacToeResult = document.querySelector("#ticTacToeResult");

let yourChoice;
let computerChoice;

const stoneChoice = () => {
    yourChoice = "stone";
    console.log("stone");
};

stone.addEventListener("click", stoneChoice);


const scissorsChoice = () => {
    yourChoice = "scissors";
    console.log("scissors");
};

scissors.addEventListener("click", scissorsChoice);


const paperChoice = () => {
    yourChoice = "paper";
    console.log("paper");
};


paper.addEventListener("click", paperChoice);

const computerRandomChoice = () => {
    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        computerChoice = "stone";
        console.log("computer stone");
    } else if (computerChoice == 1) {
        computerChoice = "scissors";
        console.log("computer scissors");
    } else if (computerChoice == 2) {
        computerChoice = "paper";
        console.log("computer paper");
    }

    // if (yourChoice === computerChoice) {
    //     ticTacToeResult.innerHTML = "Нічия";
    //     ticTacToeResult.style.color = "#000"
    // } else if (yourChoice == "stone" && computerChoice == "paper") { // stone-paper
    //     ticTacToeResult.innerHTML = "Комп’ютер виграв раунд!";
    //     ticTacToeResult.style.color = "#990000";
    // } else if (yourChoice == "scissors" && computerChoice == "paper") { // scissors-paper
    //     ticTacToeResult.innerHTML = "Ви виграли раунд!";
    //     ticTacToeResult.style.color = "#039900";
    // } else if (yourChoice == "paper" && computerChoice == "stone") { // paper-stone
    //     ticTacToeResult.innerHTML = "Ви виграли раунд!";
    //     ticTacToeResult.style.color = "#039900";
    // } else if (yourChoice == "paper" && computerChoice == "scissors") { // paper-scissors
    //     ticTacToeResult.innerHTML = "Комп’ютер виграв раунд!";
    //     ticTacToeResult.style.color = "#990000";
    // } else if (yourChoice == "stone" && computerChoice == "scissors") { // stone-scissors
    //     ticTacToeResult.innerHTML = "Ви виграли раунд!";
    //     ticTacToeResult.style.color = "#039900";
    // } else if (yourChoice == "scissors" && computerChoice == "stone") { // scissors-stone
    //     ticTacToeResult.innerHTML = "Комп’ютер виграв раунд!";
    //     ticTacToeResult.style.color = "#990000";
    // }

    if (yourChoice === computerChoice) { // a tie
        ticTacToeResult.innerHTML = "Нічия";
        ticTacToeResult.style.color = "#000"
    } else if (yourChoice == "stone" && computerChoice == "paper" ||
        yourChoice == "paper" && computerChoice == "scissors" ||
        yourChoice == "scissors" && computerChoice == "stone") { // computer win
        ticTacToeResult.innerHTML = "Комп’ютер виграв раунд!";
        ticTacToeResult.style.color = "#990000";
        computer.innerHTML++;
    } else if (yourChoice == "scissors" && computerChoice == "paper" ||
        yourChoice == "paper" && computerChoice == "stone" ||
        yourChoice == "stone" && computerChoice == "scissors") { // you win
        ticTacToeResult.innerHTML = "Ви виграли раунд!";
        ticTacToeResult.style.color = "#039900";
        you.innerHTML++;
    }
};

computerTurnBtn.addEventListener("click", computerRandomChoice);