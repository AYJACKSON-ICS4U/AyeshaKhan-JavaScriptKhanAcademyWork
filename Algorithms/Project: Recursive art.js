var drawShape = function(x, y, radius) {
    var randomNumber=round(random(1,3));
    stroke(random(0,255), random(0,255), random(0,255));
    if(randomNumber===1){
    ellipse(3*x, 5*y, radius, radius);
    
    }
    else if(randomNumber===2){
    rect(2*x, y, x*2, y*2);
    rotate(13);
    
    }
    else{
    triangle(8*x, 7*y, x+1, y+1,x-1,y-1);
    
    }
    
    var newRadius = radius/2;
    if (newRadius >= 2) {
        drawShape(x, y, newRadius);
        drawShape(x/2, y/2, newRadius);
    }
};

drawShape(width/2, height/2, 380);
