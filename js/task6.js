let dinoCanvas = document.querySelector("#dino-canvas");
let dinoContext = dinoCanvas.getContext("2d");
dinoCanvas.width = 720;
dinoCanvas.height = 220;

let character = new Image();
let cactus = new Image();
let land = new Image();

character.src = "./images/dino.png";
cactus.src = "./images/cactus.png";
land.src = "./images/ground.png";

xPos = 50;
yPos = 100;

let gravity = 0.2;
let velY = 0;

let barrier = [];
barrier[0] = {
    x: dinoCanvas.width,
    y: 0,
};

function draw() {
    dinoContext.fillStyle = '#fff';
    dinoContext.fillRect(0, 0, 720, 220);
    
    dinoContext.drawImage(land, 0, dinoCanvas.height - land.height -20);
    dinoContext.drawImage(character, xPos, yPos);

    jumpDino();

    for (let i = 0; i < barrier.length; i++) {
        if (barrier[i] < -barrier.width) {
            barrier.shift();
        } else {
            dinoContext.drawImage(cactus, barrier[i].x, barrier[i].y + 139);
        
            barrier[i].x -= 5;

            if (barrier[i].x == 140) {
                barrier.push({
                    x: dinoCanvas.width,
                    y: 0,
                });
            }
        }

        if (yPos + character.height >= barrier[i].y + 139 &&
            xPos + character.width >= barrier[i].x) {
            location.reload();
        }
    }
}

let clickDino = false;

dinoCanvas.addEventListener("click", moveUp);

function moveUp() {
    // yPos -= 70;
    clickDino = true;
    // if (yPos > 0) {
    //     velY = -4;
    // }
}

setInterval(draw, 20);

let isUp = false;

function jumpDino() {
    if (yPos >= 99) {
        isUp = false;
        velY = 0;
    }

    if (yPos <= 105 && !isUp && clickDino) {
        yPos -= 5;
    }

    if (yPos <= 25) {
        isUp = true;
        clickDino = false;
    }

    if (yPos < 100 && isUp) {
        velY += gravity;
        yPos += velY;
    }
}