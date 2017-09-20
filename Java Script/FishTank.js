//Ayesha Khan
//9/20/17

background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);


var fish = function (X,Y, bl,bh, cl)
{
centerX =  X;
centerY =  Y;
bodyLength =  bl;
bodyHeight =  bh;
bodyColor = color(191, 13, cl);

fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

fish(40,248,40,40,188);
fish(99,196,78,40,90 );
fish(60,313,-34,26, 20 );
fish(152,291,23,25,250 );
fish(222,291,35,90, 60 );
fish(151,115,139,83, 175 );
fish(240,341,74,51, 210 );
fish(212,201,51,25, 3 );
fish(293,245,23,37,144 );

var cl;
mouseClicked = function()
{
    cl = random (0, 188);
    fish(mouseX, mouseY, 25,25,cl );
};

var Y = 454;
draw = function() {
    var X = random (0, 400);
    //var X = 70;
    noFill();
    ellipse(X,Y,10,10);
    
    Y = Y - 12;
   
};
