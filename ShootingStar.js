//Ayesha Khan
//12/9/17

noStroke();

var xPos = -4;
var yPos = 204;
var ms = 100;
var leftX = 60;
var sx = 154;
var sy = 174;


draw = function() {
    background(29, 40, 115);
    fill(191, 171, 138);
    //moon
    ellipse(140,78,ms,ms);
    //clouds
    fill(222, 211, 211);
    ellipse(leftX, 138, 126, 97);
    ellipse(leftX+76, 138, 70, 60);
    ellipse(leftX-76, 138, 70, 60);
    
    // moving star 1
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    // mocing star 2
    ellipse(sx, sy, 10, 10);
    
    //stars
    ellipse(350, 34, 10, 10);
    ellipse(234, 149, 10, 10);
    ellipse(136, 17, 10, 10);
    ellipse(294, 87, 10, 10);
    ellipse(346, 141, 10, 10);
    
    //MStar 1
    xPos++;
    yPos--;
    
    //mstar2
    sy --;
    sx ++;
};
