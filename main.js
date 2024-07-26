// canvas
const canvas = document.getElementById("platformer");
const ctx = canvas.getContext("2d");

// Getting the keyboard keystrokes
document.addEventListener("keydown", (event) => {
    console.log(event.key);
})


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
    moveRight(){}
    moveLeft(){}
    dead(){}
    jump(){}

}

let p1 = new Player;
p1.draw();