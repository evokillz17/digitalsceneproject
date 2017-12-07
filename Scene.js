drawBackground();
allStars();
drawAllmountains(10);
drawAllpinetrees();
drawAllSnowmen();
drawAllSnow();
drawAllSnowflakes();
drawAuroralights();
snowFloor();

//Draws Mountain
function drawMountain(location) {
 //Made by Eduardo
 penColor(rgb(100,65,36));
 penWidth(40);
 penUp();
 moveTo(location, 415);
 turnTo(26);
 penDown();
 moveForward(250);
 turnTo(154);
 moveForward(250);
 colorMountain();
 drawTip();
 penUp();
}
//draws all mountains
function drawAllmountains() {
  //Made by Edaurdo
  penUp();
  for (var i = 0; i < 3; i++) {
  drawMountain(randomNumber(-150,150));
  }
}
//draws snow on tips
function drawTip() {
  //Made by Eduardo
  penWidth(45);
  penRGB(236, 240, 241);
  turnTo(154);
  moveForward(55);
  moveBackward(55);
  turnTo(206);
  moveForward(30);
  penUp();
}
function colorMountain() {
  //Made by Eduardo
  penWidth(40);
  turnTo(270);
  moveForward(185);
  moveBackward(75);
  turnRight();
  moveForward(62);
  dot(88);
  moveForward(161);
}

//draws Background
 function drawBackground() {
 //Made by Eduardo
 penRGB(44, 62, 80);
 dot(300);
}

//draws snow floor
function snowFloor() {
 //Made by Eduardo
 penRGB(236, 240, 241);
 penWidth(60);
 penUp();
 moveTo(0, 450);
 turnTo(90);
 penDown();
 moveForward(320);
 penUp();
}
//darws Aurora lights
function drawAuroralights(){
  //Made by Eduardo
  for (var i = 0; i < 65; i++) {
  penUp();
  moveTo(randomNumber(-5,320),randomNumber(80,110 ));
  turnTo(randomNumber(175,180));
  drawRay(randomNumber(80,100)); 
  }
}
//draws rays for aurora
function drawRay(size){
  //Made by Eduardo
  penDown();
  penWidth(randomNumber(3,10));
  penRGB(randomNumber(100, 190), randomNumber(120, 196), randomNumber(50, 198),0.6);
  turnTo(0);
  arcLeft(35,size);
  arcRight(60,size);
  arcLeft(60,size);
  arcRight(60,size);
  penUp();
}
//draws background stars
function allStars() {
  //Made by Eduardo
  for (var i = 0; i < 20; i++) {
  penRGB(252, 226, 95, 0.5);
  penUp();
  moveTo(randomNumber(-10,320),randomNumber(-5,415 ));
  dot(randomNumber(3,5 )); 
  }
}

//draws all the Snowmen
function drawAllSnowmen() {
  //Made by Natalia
  for (var i = 0; i < 2; i++) {
    moveTo(randomNumber(0, 318), 410);
    turnTo(0);
    drawSnowmen();
   
  }
}
function drawSnowmen() {
  //Made by natalia
  penRGB(236, 240, 241, 1);
  drawBase(randomNumber(30, 40));
  drawBody(randomNumber(20, 26));
  drawHead(randomNumber(16, 19));
  drawEyes();
}
function drawBase(size) {
  //Made by Natalia
  dot(size);
  moveForward(50);
}
function drawBody(size) {
  //Made by Natalia
  dot(size);
  moveForward(36);
}
function drawHead(size) {
  //Made by Natalia
  dot(size);
}
//// Draws snowmens eye's
function drawEyes() {
  //Made by Natalia
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
//drawsSnowFlake
function drawSnow() {
  //Made by Natalia
  penRGB(255, 255, 255, 0.43);
  dot(randomNumber(1, 6));
}
//Draws SnowFlakes
function drawAllSnow() {
  //Made by Natalia
  for (var i = 0; i < 100; i++) {
    moveTo(randomNumber(-5, 350), randomNumber(-5, 430));
    drawSnow();
  }
}

//The loop is for as many snowflakes you want to draw. 
//And it is all in random places because of the "moveTo"
function drawAllSnowflakes() {
  //Made by Seleste
  for (var i = 0; i < 50; i++) {
    penUp();
    moveTo(randomNumber(0,325), randomNumber(0,360));
    penDown();
    drawSnowflake();
  }
}

//The proccess of drawing the snowflake. (I wouldn't mess with the order)
function drawSnowflake() {
  //Made by Seleste
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
  //Made by Seleste
  drawLongLeg(5);
  drawPegs(3);
}

//Draws the stick before the little cross at the end.  
//"legLength" is how long the little stick is going to be.
//Get a smaller number to make small snowflakes, a bigger # for big snowflakes.  
function drawLongLeg(legLength) {
  //Made by Seleste
  moveForward(legLength);
  moveForward(legLength);
  turnLeft();
}
function turnAround() {
  //Made by Seleste
  turnLeft();
  turnLeft();
}

//The "pegLength" is used with the formula of the lehLength-2 pixels.  To get a good snowflake each time. 
//pegLength = legLength - 2 pixels 
function drawPegs(pegLength) {
  //Made by Seleste
  for (var i = 0; i < 3; i++) {
    moveForward(pegLength);
    turnAround();
    moveForward(pegLength);
    turnLeft();
  }
}

//resetToCenter has to be the same parameter as drawLongLeg so it can get to the middle of the snowflake each time to draw a new side.   time.  
function resetToCenter(legLength) {
  //Made by Seleste
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
    //Made by Seleste
  }

}
//draws one pine tree
function drawPinetree() {
    //Made by Seleste
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
  //Made by Seleste
  penUp();
  penRGB(124, 89, 8, 1);
  penWidth(trunkWidth);
  penDown();
  moveForward(35);
}
//Draws the freen triangle to represent the leaves.
function drawLeaves() {
  //Made by Seleste
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
  //Made by Seleste
  turnRight(90);
  moveForward(40);
  turnRight(90);
  moveForward(30);
  turnLeft(90);
}
