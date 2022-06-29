let canvas = document.getElementById('driving-game');
let ctx = canvas.getContext('2d');
let car = new Cars(250,450,100,100);
let brickwall = new Brickwall(0,0,100,100);
let point = 0;

//Move Car
window.addEventListener('keydown',function(event,KeyboardEvent) {
    switch(event.keyCode) {
        case 37:
            if (car.x >= 0) {
                car.moveLeft();
            }
            break;
        case 39:
            if (car.x + car.width < 450) {
                car.moveRight();
            }
            break;
        case 17:
            brickwall.setSpeedUpDrop();
            setTimeout('brickwall.setSpeedDownDrop()',6000);
            break;
    }
})

//Clear canvas
function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

//Draw brickwall random position x
function drawRandomBrickWall() {
    brickwall.setX(Math.floor(Math.random()*350));
    brickwall.drawBrickWall();
    }

//Check Collision
function checkCollisions() {
    if (brickwall.y + brickwall.height >= car.y
        && brickwall.x >= car.x - brickwall.width
        && brickwall.x <= car.x + car.width) {
            clearInterval(time);
            alert('You Lost!!!  Your Score: ' + point);
        } else if (brickwall.y + brickwall.height >= canvas.height) {
            point++;
            brickwall.y = -brickwall.height;
            drawRandomBrickWall();
            levelupdificult();
            brickwall.moveDown();
        }
}

//Play Game
function play() {
    clearCanvas();
    brickwall.drawBrickWall();
    brickwall.moveDown();
    car.drawCar();
    checkCollisions();
    document.getElementById('score').innerHTML = 'Score: ' + point;
}

//Set time loop
let time = setInterval(play,50);

//the difficult of the game level up
function levelupdificult() {
    if (point >= 10) {
        brickwall.setSpeedBrickDrop(15);
    } else if (point >= 20) {
        brickwall.setSpeedBrickDrop(20);
    } else if (point >= 40) {
        brickwall.setSpeedBrickDrop(30);
    }
}
