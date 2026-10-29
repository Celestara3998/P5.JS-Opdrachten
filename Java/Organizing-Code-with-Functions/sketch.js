function setup() {
    createCanvas(900, 600);
}

function draw() {
    sky();
    sun();
    trees();
}

function sky() {
    background(135, 206, 255)
    fill("green")
    strokeWeight(0)
    rect(0,300,900,300)
}

function sun() {
    fill("yellow")
    stroke("orange")
    strokeWeight(10)
    circle(840,60,100)
}

function trees() {
    textSize(100)
    text("🌲", 100, 300)
    text("🌲", 550, 350)
    text("🌲", 350, 400)
    text("🌲", 150, 500)
    text("🌲", 700, 550)
}