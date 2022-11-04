//eye variables
var rightPupilX = 500
var rightPupilY = 350
var leftPupilX = 300
var eyeMovement = 2
//eyebrow variables
// the right is actually the left and the left the right, all from the portrait perspective..of course
var RbrowY = 300
var LbrowY = 300
var RbrowMovement = 3
var LbrowMovement = 5
//mouth variables
var MouthX = 350
var MouthY = 500
var MouthMovementx = 2
var MouthMovementy = 2
//portrait title var
var size = 22;
var count = 0;
var sizeDirection = 2;

function setup() {
    createCanvas(800,800);
  }
  
  function draw() {
    background(220); 
    strokeWeight(2)
    //the head
    circle(400,400,400);
    //the eyes
    ellipse(500,350,100,50);
    ellipse(300,350,100,50);
    //the eyebrows
    ellipse(300,RbrowY,125,15);
    if(RbrowY > 300 || RbrowY < 200)
    {
      RbrowMovement *= -1;
   }

    RbrowY += RbrowMovement;
    ellipse(500,LbrowY,125,15);
    if(LbrowY > 300 || LbrowY < 200)
    {
      LbrowMovement *= -1;
   }

    LbrowY += LbrowMovement;
    //the mouth
    rect(MouthX,MouthY,100,25);
    MouthX = MouthX + MouthMovementx;
    MouthY = MouthY + MouthMovementy;
    if(MouthX >= 400 || MouthY >=550)
    {
      MouthMovementx *= -1
      MouthMovementy *= -1
    }
    if (MouthX <= 300 || MouthY <= 350)
    {
      MouthMovementx *= -1
      MouthMovementy *= -1
    }
  
    //the nose
    triangle(350, 445, 450, 445, 400, 350);

    //left head hair
    line(400, 250, 200, 300);
    line(400, 200, 205, 310);
    line(400,210,210,320);
    line(400,220,215,330);
    line(400,230,220,340);
    line(400,240,225,350);
    line(380,200,195,290);
    line(360,200,190,285);


    line(200,300,200,700);
    line(190,285,190,700);
    line(195,290,195,700);
    line(205,310,205,700);
    line(210,320,210,700);
    line(215,330,215,700);
    line(220,340,220,700);
    line(225,350,225,700);
    line(230,360,230,700);

    //right head hair
    line(400,250,600,300)
    line(400, 200, 605, 310);
    line(400,210,610,320);
    line(400,220,615,330);
    line(400,230,620,340);
    line(400,240,625,350);
    line(420,200,580,250);
    line(430,210,590,270);

    line(600,300,600,700);
    line(605,310,605,700);
    line(610,320,610,700);
    line(615,330,615,700);
    line(620,340,620,700);
    line(625,350,625,700);
    line(580,250,580,700);
    line(590,270,590,700);

    //the pupils
    strokeWeight(25); 
    point(rightPupilX,rightPupilY);
    if(rightPupilX > 530 || rightPupilX < 475)
    {
      eyeMovement *= -1;
   }

    rightPupilX += eyeMovement;
    
    point(leftPupilX,rightPupilY)
    if(leftPupilX > 330 || leftPupilX < 175)
    {
      eyeMovement *= 1
    }

    leftPupilX += eyeMovement

    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }


    text('GeometriCallie',600,750)
    text('Callie Luther',600,775)
  }
