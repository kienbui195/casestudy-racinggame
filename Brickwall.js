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


    //method brickwall move down
    moveDown() {
        this.y += this.speed;
    }


    //draw brickwall
    drawBrickWall() {
        this.ctx.beginPath();
        const imgbrick = new Image(this.width,this.height);
        imgbrick.src = 'tuonggach2.png';
        this.ctx.drawImage(imgbrick,this.x,this.y);
        this.ctx.fill();
        this.ctx.closePath();
    }


    //change drop speed of brickwall
    setSpeedBrickDrop(speed) {
        this.speed = speed;
    }


    //change first x position of brickwall
    setX(x) {
        this.x = x;
    }

    //set drop speed 
    setSpeedUpDrop() {
        this.speed += 10;
    }

    //set drop speed
    setSpeedDownDrop() {
        if (this.speed > 10) {
            this.speed -= 10;
        }
    }
}