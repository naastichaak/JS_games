let numberInput = document.querySelector("#number-input");
let numberSearch = document.querySelector("#number-search");
let numberText = document.querySelector("#number-text");

const rndNum = () => {
    let number = Math.floor(Math.random() * 10);
    if (numberInput.value == number) {
        numberText.innerHTML = "Вітаю, ви вгадали число " + number + "!";
        numberText.style.color = "#039900";
    } else {
        numberText.innerHTML = "Ви програли, комп’ютер загадав " + number;
        numberText.style.color = "#990000";
    }
};

numberSearch.addEventListener("click", rndNum);