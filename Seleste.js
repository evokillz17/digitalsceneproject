//The loop is for as many snowflakes you want to draw. 
//And it is all in random places because of the "moveTo"
function drawAllSnowflakes() {
  for (var i = 0; i < 50; i++) {
    penUp();
    moveTo(randomNumber(0,325), randomNumber(0,360));
    penDown();
    drawSnowflake();
  }
}

//The proccess of drawing the snowflake. (I wouldn't mess with the order)
function drawSnowflake() {
  penRGB(255, 255, 255, 0.6);
  penWidth(2);
  drawCross();
  resetToCenter(5);
  drawCross();
  resetToCenter(5);
  drawCross();
  resetToCenter(5);
  drawCross();
}

//Draws the one of the 4 sides of the snowflake.  
function drawCross() {
  drawLongLeg(5);
  drawPegs(3);
}

//Draws the stick before the little cross at the end.  
//"legLength" is how long the little stick is going to be.
//Get a smaller number to make small snowflakes, a bigger # for big snowflakes.  
function drawLongLeg(legLength) {
  moveForward(legLength);
  moveForward(legLength);
  turnLeft();
}
function turnAround() {
  turnLeft();
  turnLeft();
}

//The "pegLength" is used with the formula of the lehLength-2 pixels.  To get a good snowflake each time. 
//pegLength = legLength - 2 pixels 
function drawPegs(pegLength) {
  for (var i = 0; i < 3; i++) {
    moveForward(pegLength);
    turnAround();
    moveForward(pegLength);
    turnLeft();
  }
}

//resetToCenter has to be the same parameter as drawLongLeg so it can get to the middle of the snowflake each time to draw a new side.   time.  
function resetToCenter(legLength) {
  moveForward(legLength);
  moveForward(legLength);
  turnLeft();
}

//The loop here,  is how many pine trees you will want 
function drawAllpinetrees() {
  for (var i = 0; i < 3; i++) {
    penUp();
    moveTo(randomNumber(0, 318), 415);
    turnTo(0);
    drawPinetree();
  }

}
//draws one pine tree
function drawPinetree() {
    drawTrunk(randomNumber(20,40 ));
    turnTo(0);
    drawLeaves();
    backToTheTop();
    drawLeaves();
    backToTheTop();
    drawLeaves();
    penUp();
    turnRight(90);
}

//Every trunk has a different width.  Because I put the random number generator so you don't have to change that parameter.  
function drawTrunk(trunkWidth) {
  penUp();
  penRGB(124, 89, 8, 1);
  penWidth(trunkWidth);
  penDown();
  moveForward(35);
}
//Draws the freen triangle to represent the leaves.
function drawLeaves() {
  penRGB(8, 124, 10, 1);
  penWidth(25);
  penDown();
  moveForward(35);
  turnLeft(135);
  moveForward(35);
  turnLeft (180);
  moveForward(35);
  turnRight(90);
  moveForward(45);
  turnRight(135);
  moveForward(62);
  penUp();
}
//This was made to you can put a green triangle on top of another green triangle so that they're not all over the place.  
function backToTheTop() {
  turnRight(90);
  moveForward(40);
  turnRight(90);
  moveForward(30);
  turnLeft(90);
}
