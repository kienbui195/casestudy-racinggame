let canvas = document.getElementById('racing-game');
let ctx = canvas.getContext('2d');
let car = new Cars(250,450,150,150);
let brickwall = new Brickwall(0,0,150,150);
let point = 0;

window.addEventListener('keydown',function(event,KeyboardEvent) {
    switch(event.keyCode) {
        case 37:
            car.moveLeft();
            break;
        case 39:
            car.moveRight();
            break;
        case 18:
            speedupCars();
    }
})

function speedupCars() {
    if (event.ctrlKey) {
        car.speedupCar();
    }
}

function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function drawRBrickWall() {
    brickwall.setX(Math.floor(Math.random()*350));
    brickwall.drawBrickWall();
    }


function checkCollisions() {
    if (brickwall.y + brickwall.height >= car.y
        && brickwall.x >= car.x - brickwall.width
        && brickwall.x <= car.x + car.width) {
            alert('Ban da thua. Diem so cua ban la: ' + point);
            clearInterval(setInterval(play,50));
        } else if (brickwall.y + brickwall.height >= canvas.height) {
            point++;
            brickwall.y = 0;
            drawRBrickWall();
            if (point >= 7) {
                brickwall.setSpeedBrickDrop(10);
            } else if (point >= 20) {
                brickwall.setSpeedBrickDrop(15);
            } else if (point >= 40) {
                brickwall.setSpeedBrickDrop(30);
            }
            brickwall.moveDown();
            
        }
}

function play() {
    clearCanvas();
    brickwall.drawBrickWall();
    brickwall.moveDown();
    car.drawCar();
    checkCollisions();
    document.getElementById('score').innerHTML = 'Score: ' + point;  
}


setInterval(play,50);