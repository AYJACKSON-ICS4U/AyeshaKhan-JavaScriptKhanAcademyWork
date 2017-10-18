//Ayesha Khan
//10/18/17

//generate the random values used to caluculate the x and y
var genx = new Random(1);
var geny = new Random(2);

 background(0); ///black background
var draw = function() {
    // no stroke
     noStroke();
     ///Randomize the values for the fill
     var f1 = floor(random(1,200)); 
     var f2 = floor(random(1,200));
     var f3 = floor(random(1,200));
     fill(f1, f2, f3);
     
     //Call next Gaussian functions and use normal distrubution for both x and y
     var numx = genx.nextGaussian(); //nextGaussian rand for x
     var numy = geny.nextGaussian(); //nextGaussian rand for y
     //println(numy); check values incase
     var sd = 65; //Standard deviation, fairly spread out
     var m = 200;//Mean, collect around the center (approx)
     
     //calculate the x and y values using the calculations faound fro standard deviation
     var x = sd*numx + m;
     var y = sd*numy + m;
     
    //draw  splatters
     ellipse(y, x, 2, 2);
     
};


