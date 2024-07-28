// canvas
const canvas = document.getElementById("platformer");
const ctx = canvas.getContext("2d");


let g = 2;


class Platformer{
    constructor(){}
}

class Player{
    constructor(){
        this.height=20;
        this.width=20;
        this.px=20;
        this.py=20;
        this.vx=0;
        this.vy=0;
    }
    draw(){
        ctx.fillStyle = "black";
        ctx.fillRect(this.px, this.py, this.height, this.width);
    }
    clear(){
        ctx.clearRect(this.px - 5, this.py - 5, this.height + 10, this.width + 10);
    }
    gravity(){
        // gravity
        if(this.py + this.height + 20 < document.getElementById("platformer").height){
            this.py += g - this.vy;
            this.vy -= g;
        } else {
        }
        // Momentum
        if(this.vx != 0){
            if(this.vx > 0){ // left
                this.px += this.vx + 0.5;
                this.vx -= 0.5;
            } else { // right
                this.px += this.vx - 0.5;
                this.vx += 0.5;
            }
        }
    }
    jump(){
        this.py -= this.vy;
    }
    moveHorizontal(){
        this.px += vx;
    }
    dead(){}
}

let p1 = new Player;
// Getting the keyboard keystrokes
document.addEventListener("keydown", (event) => {
    console.log(event.key == 'w');
    lastKeyStroke = event.key;
    if(event.key=='w'){
        p1.vy = 10;
        p1.clear();
        p1.jump();
    }
    if(event.key=="a"){
        console.log("left");
        p1.vx = -5;
        p1.clear();
        p1.moveHorizontal();
    }
    if(event.key=="d"){
        console.log("right")
        p1.vx = 5;
        p1.clear();
        p1.moveHorizontal();
    }
})

setInterval(() => {
    p1.clear();
    p1.gravity();
    p1.draw();
}, 30);