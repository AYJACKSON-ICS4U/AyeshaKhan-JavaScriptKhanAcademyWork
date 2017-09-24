//24/09/17

//Ayesha Khan


fill(0, 0, 0);
ellipse(200, 200, 375, 375);


textSize(12);
   
var answer = floor(random(0, 8));

if (answer === 0)
{
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 159, 229); 
   
}
else if (answer === 1)
{
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);  
    text("you do you", 171, 200);
}
else if (answer === 2)
{
    fill(236, 234, 242);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Who knows", 169, 200);
}

else if (answer === 3)
{
    fill(255, 0, 98);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Absolutely", 171, 200);
}

else if (answer === 4)
{
    fill(255, 187, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Yes", 190, 200);
}

else if (answer === 5)
{
    fill(93, 227, 154);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Never", 183, 200);
}

else if (answer === 6)
{
    fill(240, 88, 222);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Heck Yeaa", 169, 200);
}
else if (answer === 7)
{
    fill(223, 127, 232);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text(" Thats a terrible \n         idea", 158, 209);
}

else if (answer === 8)
{
    fill(60, 0, 105);
    triangle(200, 104, 280, 280, 120, 280);
    fill(247, 242, 247);
    text("Bye", 176, 200);
}



