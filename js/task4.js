let firstNum = +document.querySelector("#first-num").value;
let secondNum = +document.querySelector("#second-num").value;
let result = document.querySelector("#result");

let btnPluss = document.querySelector("#pluss");
let btnMultiplication = document.querySelector("#multiplication");
let btnMinus = document.querySelector("#minus");
let btnDivision = document.querySelector("#division");

let equal = document.querySelector("#equal");

const pluss = () => {
    result.value = firstNum + secondNum;
    console.log(result.value);
};

const multiplication = () => {
    result.value = firstNum * secondNum;
    console.log(result.value);
};

const minus = () => {
    result.value = firstNum - secondNum;
    console.log(result.value);
};

const division = () => {
    result.value = firstNum / secondNum;
    console.log(result.value);
};

// const answer = () => {
//     result.value;
//     console.log(result);
// };

btnPluss.addEventListener("click", pluss);
btnMultiplication.addEventListener("click", multiplication);
btnMinus.addEventListener("click", minus);
btnDivision.addEventListener("click", division);

// result.addEventListener("click", answer)