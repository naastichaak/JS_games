let birthInput = document.querySelector("#birth");
let birthSearch = document.querySelector("#birth-search");
let birthText = document.querySelector("#birth-text");

const checkBirth = () => {
    if (birthInput.value % 4 == 0) {
        birthText.innerHTML = "Ви народилися y високосний рік!";
        birthText.style.color = "#039900";
    } else {
        birthText.innerHTML = "Ви народилися не y високосний рік!";
        birthText.style.color = "#990000";
    }
};

birthSearch.addEventListener("click", checkBirth);