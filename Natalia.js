function drawAllSnowmen() {
  for (var i = 0; i < 2; i++) {
    moveTo(randomNumber(0, 318), 410);
    turnTo(0);
    drawSnowmen();
   
  }
}
function drawSnowmen() {
  penRGB(236, 240, 241, 1);
  drawBase();
  drawBody();
  drawHead();
  drawEyes();
}
function drawBase() {
  dot(randomNumber(30, 40));
  moveForward(50);
}
function drawBody() {
  dot(randomNumber(20, 23));
  moveForward(36);
}
function drawHead() {
  dot(randomNumber(16, 19));
}
function drawEyes() {
  penColor("black");
  turnRight(90);
  moveForward(5);
  penUp();
  dot(3);
  turnLeft(180);
  moveForward(13);
  dot(3);
  turnTo(0);
}
function drawSnow() {
  penRGB(255, 255, 255, 0.43);
  dot(6);
}
function drawAllSnow() {
  for (var i = 0; i < 130; i++) {
    moveTo(randomNumber(-5, 350), randomNumber(-5, 430));
    drawSnow();
  }
}

drawAllSnowmen();
drawAllSnow();
