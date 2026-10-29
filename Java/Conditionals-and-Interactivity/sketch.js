var fire = 20

function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(135, 206, 255);
    fill("yellow")
    stroke("orange")
    strokeWeight(10)
    circle(840,60,100);
    fill("green")
    strokeWeight(0)
    rect(0,300,900,300)
    textSize(100)
    text("🌲", 100, 300)
    text("🌲", 550, 350)
    text("🌲", 350, 400)
    text("🌲", 150, 500)
    text("🌲", 700, 550)
    textSize(fire)
    text("🔥", mouseX, mouseY)

if (keyIsDown(UP_ARROW) && fire < 80) {
    fire += 1
}

if (keyIsDown(DOWN_ARROW) && fire > 20) {
    fire -= 1
}
}