const context = document.querySelector('canvas').getContext("2d");

const screen = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
};

context.canvas.width = screen.width;
context.canvas.height = screen.height;

class Snowflake {
    constructor(radius, x, y, v, color){
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.v = v;
        this.color = color;
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, Math.PI * 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }

    fall(){
        this.x += this.v.x;
        this.y += this.v.y;
    }
}

let snow = [];

for(let i =0; i<750; i++){
    let radius = Math.random() * 3 + 3;
    let x = Math.random() * screen.width;
    let y = Math.random() * screen.height;
    let v = {
        x: Math.random() * 2 + 1,
        y: Math.random() + 1
    };
    let color = "rgba(255, 255, 255, " + Math.random() + ")"

    snow.push(new Snowflake(radius, x, y, v, color));
}

function loop() {
    context.fillStyle = "black";
    context.fillRect(screen.x, screen.y, screen.width, screen.height);

    for(let i = 0; i< snow.length; i++){
        snow[i].draw()
        snow[i].fall()

        if(snow[i].y -snow[i].radius >= screen.height){
            snow[i].y = 0 - snow[i].radius;
        }

        if(snow[i].x -snow[i].radius >= screen.width){
            snow[i].x = 0
            snow[i].v.x = Math.random() * 2 + 1;
        }
        
    }
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
var startButton = document.getElementById("btn");
startButton.addEventListener("click", startAnimation);


function startAnimation(event){
    if(this.textContent === "Play"){
        console.log('clicked play')
        this.textContent = "Pause"
        requestAnimationFrame(loop)
    }
    if(this.textContent === "Pause"){
        console.log('clicked pause')
        cancelAnimationFrame(cancel);
        this.textContent = "Play"
    }
}
