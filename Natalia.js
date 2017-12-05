function drawAllSnowmen() {
  //draws two snowmen
  for (var i = 0; i < 2; i++) {
    moveTo(randomNumber(0, 318), 415);
    drawSnowmen();
  }
}
function drawSnowmen() {
  penColor("white");
  //base is the bottom of the body, body is the middle snowball, and head is the top
  drawBase();
  drawBody();
  drawHead();
  drawEyes();
}
function drawBase() {
  //bottom of the body
  dot(randomNumber(30, 40));
  moveForward(50);
}
function drawBody() {
  //middle of the body
  dot(randomNumber(20, 23));
  moveForward(36);
}
function drawHead() {
  dot(randomNumber(13, 17));
  //the top of the body
}
function drawEyes() {
  //its t add facial features to the snowmen
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
  //transperncy is high so that we are able to tell that it is snow
  penRGB(255, 255, 255, 0.43);
  dot(6);
}
function drawAllSnow() {
  //snowballs to represent active, falling snow
  for (var i = 0; i < 130; i++) {
    moveTo(randomNumber(-5, 350), randomNumber(-5, 400));
    drawSnow();
  }
}
drawAllSnowmen();
drawAllSnow();
