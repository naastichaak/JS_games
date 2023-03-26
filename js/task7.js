let canvas = document.querySelector("#football");
let context = canvas.getContext("2d");

let ball = new Image();
ball.src = "./images/ball.svg";
canvas.width = 720;
canvas.height = 220;

canvas.addEventListener("click", function (event) {
    var mouseX = event.pageX;
    var mouseY = event.clientY;
    var block = document.querySelector("#football");
    var blockRect = block.getBoundingClientRect();
    var blockX = blockRect.left;
    var blockY = blockRect.top;
    mouseXinBlock = mouseX - blockX - 25;
    mouseYinBlock = mouseY - blockY - 25;
});

let mouseXinBlock = 92;
let mouseYinBlock = 85;

function draw() {
    if (mouseXinBlock > 0 && mouseXinBlock < 670 && mouseYinBlock > 0 && mouseYinBlock < 170) {
        context.fillStyle = '#5ABB58';
        context.fillRect(0, 0, 720, 220);
        context.drawImage(ball, mouseXinBlock, mouseYinBlock);
    }
};

setInterval(draw, 20);