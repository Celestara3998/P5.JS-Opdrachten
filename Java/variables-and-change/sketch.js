var time = 60
var moontime = 560
var backgroundRed = 135
var backgroundGreen = 206
var backgroundBlue = 255

function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(backgroundRed, backgroundGreen, backgroundBlue);
    fill("yellow")
    stroke("orange")
    strokeWeight(10)
    circle(840,time,100);
    fill("gray")
    stroke("gray")
    strokeWeight(5)
    circle(30,moontime,50);
    fill("green")
    strokeWeight(0)
    rect(0,300,900,300)
    textSize(100)
    text("🌲", 100, 300)
    text("🌲", 550, 350)
    text("🌲", 350, 400)
    text("🌲", 150, 500)
    text("🌲", 700, 550)
    textSize(20)
    text(time , 0, 20)


if (time <= 600) {
    time += 0.1
}

if (moontime >= 40) {
    moontime -= 0.1;
}

if (time >= 60 && time <= 200) {
    backgroundRed -= 0.1
    backgroundGreen -= 0.1
}
if (time >= 200 && time <= 260) {
    backgroundRed += 0.4
    backgroundGreen += 0.1
    backgroundBlue -= 0.3
}
if (time >= 280 && time <= 600) {
    backgroundRed -= 0.2
    backgroundGreen -= 0.1
    backgroundBlue -= 0.1
}
}