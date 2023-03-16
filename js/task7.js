let canvas = document.querySelector("#football");
let context = canvas.getContext("2d");

let ball = new Image();
ball.src = "./images/ball.png";
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
    
    console.log(mouseXinBlock);

    context.fillStyle = '#5ABB58';
    context.fillRect(0, 0, 720, 220);
});

let mouseXinBlock = 92;
let mouseYinBlock = 85;

function draw() {
    context.drawImage(ball, mouseXinBlock, mouseYinBlock);
};

setInterval(draw, 20);