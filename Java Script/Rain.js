//27/9/17
//Ayesha Khan
var xPositions = [200 ];
var yPositions = [0];

var x = random (10, 400);

draw = function() {
    background(204, 247, 255);
    
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        
    
        
        if (yPositions[i] === 410)
    {
        yPositions[i] = 0;
        xPositions.push(x);
    }
      
    }
     
        mouseClicked = function ()
    {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
       
    };
    
    
    
};
  draw();

/// was unable to figure out how to randomize the raindrops, something to work on later
