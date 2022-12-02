//player 
var playerX = 100
var playerY = 550

//square1
var myXs = [];
var myYs = [];
var squareSize = [];

var SXspeed = [];
var SYspeed = [];

//square2
var my2Xs = [];
var my2Ys = [];
var SquareSize2 = [];

var SX2speed = [];
var SY2speed = [];



//mouseclick circle
var CircleX = 40
var CircleY = 50

function setup ()
{
  createCanvas (600,600);
      //create square1
      var x = 100
      var y = 100
      var sSize = 50
      for(var i = 0; i < 6; i++)
      {
        SXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] = x;
        myYs[i] = y;
        squareSize[i] = sSize
        x += 100
        y += 50
        sSize += 10
      }
      //create square2
      var x2 = 200
      var y2 = 400
      var sSize2 = 10
      for(var i = 0; i < 6; i++)
      {
        SX2speed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SY2speed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        my2Xs[i] = x2;
        my2Ys[i] = y2;
       SquareSize2[i] = sSize2
        x2 += 50
        y2 += 50
        sSize2 += 10
      
}
}
function draw ()
{
  background (100);
  fill(200,0,200);

    //player
    drawPlayer();
    // call create borders function
    createBorders();
    //mouseclick
    drawMouse();
      // exit
      generateEE();
  
    // winner
    escapedExit();

    //create square1
  fill(0)
  for(var i = 0; i < myXs.length; i++)
  {
  square(myXs[i],myYs[i],squareSize[i]);
  SXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  SYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  myXs[i] += SXspeed[i];
  myYs[i] += SYspeed[i];

  if (myXs[i] > innerWidth) 
  {
    myXs[i] = 0
  }
  if (myXs[i] < 0)
  {
    myXs[i] = innerWidth;

  }
  if (myYs[i] > innerHeight) 
  {
    myYs[i] = 0
  }
  if (myYs[i] < 0)
  {
    myYs[i] = innerHeight
  }
}
 //create square2
 fill(10,50,30)
 for(var i = 0; i < my2Xs.length; i++)
 {
  square(my2Xs[i],my2Ys[i],SquareSize2[i]);
  SX2speed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  SY2speed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  my2Xs[i] += SX2speed[i];
  my2Ys[i] += SY2speed[i];

  if (my2Xs[i] > innerWidth) 
  {
    my2Xs[i] = 0
  }
  if (my2Xs[i] < 0)
  {
    my2Xs[i] = innerWidth;

  }
  if (my2Ys[i] > innerHeight) 
  {
    my2Ys[i] = 0
  }
  if (my2Ys[i] < 0)
  {
    my2Ys[i] = innerHeight
 }
}

}
  function escapedExit()
  {
      //winner message
      if(playerX <=350 && playerY <= 100)
      {
        fill(100,0,0);
        textSize(30);
        text( "CONGRATULATIONS YOU ESCAPED!", 50,300);
      }
  }
  
  function generateEE()
  {
      //exit
      fill(0);
      textSize(16);
      text("Exit",265,100);
        //entrance
    fill(0);
    textSize(14);
    text("Enter",92,530);
  }
  
  function drawPlayer ()
  {
    circle(playerX,playerY,25);
  }
  
  function createBorders()
  {
      //game borders
      line(90, 525, 90, 100);
      line(130,525,500,525);
      line(500,525,500,100);
      line(500,100,300,100);
      line(250,100,90,100);
  }
  
  function drawMouse()
  {
     //mouseclick
     fill(350);
     circle(CircleX, CircleY, 10);
  }
  
  function mouseClicked()
  {
      //mouseclick
      fill(350);
      circle(CircleX, CircleY, 10);
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