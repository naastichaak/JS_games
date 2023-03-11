let firstNum = document.querySelector("#first-num");
let secondNum = document.querySelector("#second-num");
let result = document.querySelector("#result");

let btnPluss = document.querySelector("#pluss");
let btnMultiplication = document.querySelector("#multiplication");
let btnMinus = document.querySelector("#minus");
let btnDivision = document.querySelector("#division");

let equal = document.querySelector("#equal");

const pluss = () => {
    result.value = +firstNum.value + +secondNum.value;
    console.log(result.value);
};

const multiplication = () => {
    result.value = +firstNum.value * +secondNum.value;
    console.log(result.value);
};

const minus = () => {
    result.value = +firstNum.value - +secondNum.value;
    console.log(result.value);
};

const division = () => {
    result.value = +firstNum.value / +secondNum.value;
    console.log(result.value);
};

const answer = () => {
    console.log(result.value);
};

btnPluss.addEventListener("click", pluss);
btnMultiplication.addEventListener("click", multiplication);
btnMinus.addEventListener("click", minus);
btnDivision.addEventListener("click", division);

equal.addEventListener("click", answer);