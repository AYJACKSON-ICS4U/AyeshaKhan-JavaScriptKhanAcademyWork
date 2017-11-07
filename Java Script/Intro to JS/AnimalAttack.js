//9/20/17
//Ayesha Khan

var bodyX = 202;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;
var i = 30; //eyesocket
var h = 20;//hand
var ear = 10;
var p = 15; //eye
var d = 5;// pupil
var arm = 310;


draw = function() {
    
    noStroke();
    background(207, 254, 255);
    fill(62, 133, 46);
    ellipse(bodyX, bodyY, bodyW, 106); // body
    ellipse(bodyX, bodyY-70, bodyH, 47); // face
    
    
    
    //eyes
    fill(62, 133, 46);
    ellipse(177, 141, i,i);
    ellipse(227, 141, i,i);
    
    fill(247, 244, 244);
    ellipse(177,141,p,p);
    ellipse(227, 141, p,p);
    
    fill(3, 3, 3);
    ellipse(177, 141, d,d);
    ellipse(227, 141, d,d);
    
    ///mouth
    arc(203, 150, 29, 30, 4, 176);
    
    //arms 
    rect(244,198,67,8,arm);
    rect(97,198,67,8,arm);
    
    //hands
    ellipse(93,199,h,h);
    ellipse(312,199,h,h);
    
    //legs
    stroke(23, 20, 20);
    strokeWeight(5);
    line( 262,320, 226,263);  
    line( 134,320, 177,263);  
    ellipse(267,324,h,h);
    ellipse(134,324,h,h);
    
    bodyX = bodyX +1;
    bodyX = bodyX -1;
    
    bodyY = bodyY +1;
    bodyY = bodyY -1;  
    
    d= d+5;
    d = d-5;
    
    
};

