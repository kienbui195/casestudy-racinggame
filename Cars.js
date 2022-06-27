class Cars {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 10;
        this.canvas = document.getElementById('racing-game');
        this.ctx = this.canvas.getContext('2d');
    }

    speedupCar() {
        return this.speed = 30;
    }

    drawCar() {
        this.ctx.beginPath();
        const img = new Image(this.width,this.height);
        img.src = 'Car.png';
        this.ctx.drawImage(img,this.x,this.y);
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }
}