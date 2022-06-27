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

    moveDown() {
        this.y += this.speed;
    }

    drawBrickWall() {
        this.ctx.beginPath();
        const imgbrick = new Image(this.width,this.height);
        imgbrick.src = 'tuonggach2.png';
        this.ctx.drawImage(imgbrick,this.x,this.y);
        this.ctx.fill();
        this.ctx.closePath();
    }

    setSpeedBrickDrop(speed) {
        this.speed = speed;
    }

    drawRandomBrickWall (x) {
        this.ctx.beginPath();
        const imgbrick = new Image(this.width,this.height);
        imgbrick.src = 'tuonggach2.png';
        this.ctx.drawImage(imgbrick,x,this.y);
        this.ctx.fill();
        this.ctx.closePath();
    }
}