function drawAllSnowmen() {
  for (var i = 0; i < 2; i++) {
    moveTo(randomNumber(0, 320), randomNumber(0, 400));
    drawSnowmen();
  }
}
function drawSnowmen() {
  penColor("white");
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
  dot(randomNumber(13, 17));
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
  penRGB(255, 255, 255, .43);
  dot(6);
}
function drawAllSnow() {
  for (var i = 0; i < 100; i++) {
    moveTo(randomNumber(0, 350), randomNumber(0, 400));
    drawSnow();
  }
}
drawAllSnowmen();
drawAllSnow();
