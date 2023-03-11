let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");

let biggestNum = document.querySelector("#biggest-num");

const biggestNumber = () => {
    if (+num1.value > +num2.value && +num1.value > +num3.value) {
        biggestNum.innerHTML = "Найбільше число, яке ви ввели - " + num1.value;
        console.log(num1.value);
    } else if (+num2.value > +num3.value && +num2.value > +num1.value) {
        biggestNum.innerHTML = "Найбільше число, яке ви ввели - " + num2.value;
        console.log(num2.value);
    } else if (+num3.value > +num1.value && +num3.value > +num2.value) {
        biggestNum.innerHTML = "Найбільше число, яке ви ввели - " + num3.value;
        console.log(num3.value);
    }
};

biggestNum.addEventListener("click", biggestNumber);