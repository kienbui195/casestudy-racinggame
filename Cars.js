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


    //thay doi toc do cua xe
    speedupCar(speed) {
        this.speed = speed;
    }


    //ve 1 chiec xe
    drawCar() {
        this.ctx.beginPath();
        const img = new Image(this.width,this.height);
        img.src = 'Car.png';
        this.ctx.drawImage(img,this.x,this.y);
        //this.ctx.fill();
        this.ctx.closePath();
    }


    //di chuyen sang phai
    moveRight() {
        this.x += this.speed;
    }


    //dui chuyen sang trai
    moveLeft() {
        this.x -= this.speed;
       
    }
}