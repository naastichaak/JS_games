let darkMod = document.querySelector("#checkbox");
let headerWrapper = document.querySelector(".header-wrapper");

const mod = () => {
    document.body.classList.toggle("dark");
};

darkMod.addEventListener("change", mod);