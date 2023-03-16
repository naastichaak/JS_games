// from footer
let subscribeBtn = document.querySelector("#subscribe");
let footerEmailInput = document.querySelector("#footer-inp-email")

// from modal subscribe
let subscribeModal = document.querySelector(".footer-section");
let subscribeCloseBtn = document.querySelector("#close-subscribe");

const appearModal = () => {
    if (footerEmailInput.value != "") {
        subscribeModal.style.display = "flex";   
    }
};

subscribeBtn.addEventListener("click", appearModal);

const closeSubscribeModal = () => {
    subscribeModal.style.display = "none";
};

subscribeCloseBtn.addEventListener("click", closeSubscribeModal);