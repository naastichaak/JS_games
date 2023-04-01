let offset = 0;
let sliderLine = document.querySelector(".photo-slider-line");

let arrowL = document.querySelector("#arrow-left");
let arrowR = document.querySelector("#arrow-right");

let lines = document.querySelectorAll(".ind-slider");
let ind = 0;

arrowR.addEventListener("click", function () {
    offset = offset + 250;
    ind++;
    if (offset > 999) {
        offset = 0;
        ind = 0;
    }
    sliderLine.style.left = -offset + "px";
    activeSlider(ind);
});

arrowL.addEventListener("click", function () {
    offset = offset - 250;
    ind--;
    if (offset < 0) {
        offset = 999;
        ind = 4;
    }
    sliderLine.style.left = -offset + "px";
    activeSlider(ind);
});

function activeSlider(index) {
    for (const oneLine of lines) {
        console.log(oneLine);
        oneLine.classList.remove("ind-slider-active");
    }
    lines[index].classList.add("ind-slider-active");
}