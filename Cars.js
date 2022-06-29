class Cars {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 10;
        this.canvas = document.getElementById('driving-game');
        this.ctx = this.canvas.getContext('2d');
    }

    //change speed of car
    speedupCar(speed) {
        this.speed = speed;
    }

    //draw a car
    drawCar() {
        this.ctx.beginPath();
        const img = new Image(this.width,this.height);
        img.src = 'Car.png';
        this.ctx.drawImage(img,this.x,this.y);
        this.ctx.fill();
        this.ctx.closePath();
    }

    //move car to right
    moveRight() {
        this.x += this.speed;
    }

    //move car to left
    moveLeft() {
        this.x -= this.speed;
    }
}