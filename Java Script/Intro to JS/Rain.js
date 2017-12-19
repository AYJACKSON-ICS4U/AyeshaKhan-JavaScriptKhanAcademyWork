//27/9/17
//Ayesha Khan
var xPositions = [200];
var yPositions = [0];



draw = function() {
    background(204, 247, 255);
    var x = random (10, 400);
    
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        
    
        
      if (yPositions[i] > height)
    {
        yPositions[i] = 0;
        xPositions[i] = x;
    }
      
    }
     
        mouseClicked = function ()
    {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
       
    };
    
    
    
};
