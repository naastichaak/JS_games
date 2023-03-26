let firstNum = document.querySelector("#first-num");
let secondNum = document.querySelector("#second-num");
let result = document.querySelector("#result");

let btnPluss = document.querySelector("#pluss");
let btnMultiplication = document.querySelector("#multiplication");
let btnMinus = document.querySelector("#minus");
let btnDivision = document.querySelector("#division");

let equal = document.querySelector("#equal");
let answer;

const pluss = () => {
    answer = '+';
};

const multiplication = () => {
    answer = '*';
};

const minus = () => {
    answer = '-';
};

const division = () => {
    answer = '/';
};

const answerBtn = () => {
    switch (answer) {
        case "+":
            result.value = +firstNum.value + +secondNum.value;
            break;
        case "*":
            result.value = +firstNum.value * +secondNum.value;
            break;
        case "-":
            result.value = +firstNum.value - +secondNum.value;
            break;
        case "/":
            result.value = +firstNum.value / +secondNum.value;
            break;
    
        default:
            break;
    }
};

btnPluss.addEventListener("click", pluss);
btnMultiplication.addEventListener("click", multiplication);
btnMinus.addEventListener("click", minus);
btnDivision.addEventListener("click", division);

equal.addEventListener("click", answerBtn);