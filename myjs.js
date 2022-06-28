let canvas = document.getElementById('racing-game');
let ctx = canvas.getContext('2d');
let car = new Cars(250,450,100,100);
let brickwall = new Brickwall(0,0,100,100);
let point = 0;
let scoretable = document.getElementById('result');



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
function drawRBrickWall() {
    brickwall.setX(Math.floor(Math.random()*350));
    brickwall.drawBrickWall();
    }

//Check Collision
function checkCollisions() {
    if (brickwall.y + brickwall.height >= car.y
        && brickwall.x >= car.x - brickwall.width
        && brickwall.x <= car.x + car.width) {
            alert('You Lost!!!  Your Score: ' + point);
            clearInterval(time);
        } else if (brickwall.y + brickwall.height >= canvas.height) {
            point++;
            brickwall.y = -brickwall.height;
            drawRBrickWall();
            if (point >= 10) {
                brickwall.setSpeedBrickDrop(15);
            } else if (point >= 20) {
                brickwall.setSpeedBrickDrop(20);
            } else if (point >= 40) {
                brickwall.setSpeedBrickDrop(30);
            }
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
    console.log(car.x);
    console.log(car.width);
    document.getElementById('score').innerHTML = 'Score: ' + point;  
}

//Set time loop
let time = setInterval(play,50);