//Ayesha Khan
/11/9/17

var x = 200;
var y = 250;

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

//mouth
fill(10, 10, 10);
ellipse(x, y, 108, 47);


//pupils
var pupils = 15;

rect( x-54, y-55, pupils, pupils);//left eye
rect( x+45, y-55, pupils, pupils);//right eye
