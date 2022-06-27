class Brickwall {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5;
        this.canvas = document.getElementById('racing-game');
        this.ctx = this.canvas.getContext('2d');
    }


    //gach roi
    moveDown() {
        this.y += this.speed;
    }


    //ve tuong gach
    drawBrickWall() {
        this.ctx.beginPath();
        const imgbrick = new Image(this.width,this.height);
        imgbrick.src = 'tuonggach2.png';
        this.ctx.drawImage(imgbrick,this.x,this.y);
        this.ctx.fill();
        this.ctx.closePath();
    }


    //thay doi toc do roi cua tuong gach
    setSpeedBrickDrop(speed) {
        this.speed = speed;
    }


    //thay doi vi tri ban dau cua tuong gach
    setX(x) {
        return this.x = x;
    }

    setSpeedUpDrop() {
        this.speed += 10;
    }

    setSpeedDownDrop() {
        if (this.speed > 10) {
            this.speed -= 10;
        }
    }

}