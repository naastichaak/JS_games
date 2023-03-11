// from header
let userName = document.querySelector("#user")

// from modal
let modalSection = document.querySelector(".user-section")
let closeBtn = document.querySelector("#close");
let sectionInput = document.querySelector("#section-input");
let sectionButton = document.querySelector("#section-button");

const closeModal = () => {
    modalSection.style.display = "none";
};

closeBtn.addEventListener("click", closeModal);

const user = () => {
    userName.innerHTML = sectionInput.value;
    modalSection.style.display = "none";
}

sectionButton.addEventListener("click", user);