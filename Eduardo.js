//Draws Mountain
function drawMountain(location) {
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
  penUp();
  for (var i = 0; i < 3; i++) {
  drawMountain(randomNumber(-150,150));
  }
}
//draws snow on tips
function drawTip() {
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
 penRGB(44, 62, 80);
 dot(300);
}

//draws snow floor
function snowFloor() {
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
  for (var i = 0; i < 65; i++) {
  penUp();
  moveTo(randomNumber(-5,320),randomNumber(80,110 ));
  turnTo(randomNumber(175,180));
  drawRay(randomNumber(80,100)); 
  }
}
//draws rays for aurora
function drawRay(size){
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
  for (var i = 0; i < 20; i++) {
  penRGB(252, 226, 95, 0.5);
  penUp();
  moveTo(randomNumber(-10,320),randomNumber(-5,415 ));
  dot(randomNumber(3,5 )); 
  }
}
