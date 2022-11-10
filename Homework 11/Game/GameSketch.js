//player 
var playerX = 100
var playerY = 550
//square obstacle variables
var squareOneX = 100
var squareOneY = 400
var squareTwoX = 440
var squareTwoY = 200
//oval var
var OvalX = 130
var OvalY = 150
//speed variables
var S1Yspeed;
var S1Xspeed;
var S2Xspeed;
var S2Yspeed;
var OvalSpeedx = 4
var OvalSpeedY = 4
//mouseclick circle
var CircleX = 40
var CircleY = 50

function setup ()
{
  createCanvas (600,600);
 S1Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 S1Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  S2Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  S2Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function draw ()
{
  background (100);
  fill(200,0,200);
  //player
  circle(playerX,playerY,25);
  //game borders
  line(90, 525, 90, 100);
  line(130,525,500,525);
  line(500,525,500,100);
  line(500,100,300,100);
  line(250,100,90,100);
  
  //exit
  fill(0);
  textSize(16);
  text("Exit",265,100);

  //entrance
  fill(0);
  textSize(14);
  text("Enter",92,530);

  //square obstacles
  fill(80,0,0)
  square(squareOneX,squareOneY,50)
  if(squareOneX < 90 || squareOneX > 450)
  {
    S1Xspeed *= -1;
  }
  squareOneX += S1Xspeed;

  square(squareTwoX,squareTwoY,50)
  if(squareTwoX < 90 || squareTwoX > 450)
  {
    S2Xspeed *= -1;
  }
  squareTwoX += S2Xspeed;
  

  //oval obstacle
  fill(10,10,80)
  ellipse(OvalX,OvalY,20,60)
  OvalX += OvalSpeedx
  OvalY += OvalSpeedY
  if(OvalX < 90 || OvalY < 100)
  {
    OvalSpeedx *= -1;
    OvalSpeedY *= -1;
  }
  if(OvalX > 450 || OvalY > 525 )
  {
    OvalSpeedx *= -1;
    OvalSpeedY *= -1;
  }


  //winner message
  if(playerX <=350 && playerY <= 100)
  {
    fill(100,0,0);
    textSize(30);
    text( "CONGRATULATIONS YOU ESCAPED!", 50,300);
  }

  //mouseclick
  fill(350);
  circle(CircleX, CircleY, 10);


}

function mouseClicked()
{
    CircleX = mouseX;
    CircleY = mouseY;
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      playerX -= 20;
  } 
  else if (keyCode === RIGHT_ARROW) {
      playerX += 20;
  }
  else if (keyCode === UP_ARROW) {
      playerY -= 20;
  }
  else if (keyCode === DOWN_ARROW) {
      playerY += 20;
  }
}

