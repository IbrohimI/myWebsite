// This module will be responsible for effects in About section

export class Particle{
    constructor(canvas, mapped, ctx){
        this.canvas = canvas;
        this.mapped = mapped;
        this.ctx = ctx;
        this.x = Math.random() * this.canvas.width / 2 + 200;
        this.y = this.canvas.height / 4;
        this.speed = 0;
        this.velocity = Math.random() * 3.5 + 1;
        this.size = Math.random() * 2 + 1.5;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
    }
    update(){
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.speed = this.mapped[this.position1][this.position2][0];
        let movement = (2.5 - this.speed) + this.velocity;
        this.y += this.velocity;
        if(this.y >= this.canvas.height){
            this.y = this.canvas.height / 4;
            this.x = Math.random() * this.canvas.width / 2 + 300;
        }
    }
    draw(){
        const red = this.mapped[this.position1][this.position2][1];
        const green = this.mapped[this.position1][this.position2][2];
        const blue = this.mapped[this.position1][this.position2][3];
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
    windEffect(){
        this.y = this.y - Math.random() * 3.5 + 1;
        this.x = this.x + Math.cos(Math.random() * 360) * 5;
        this.size = this.size - 0.05;
    }
}