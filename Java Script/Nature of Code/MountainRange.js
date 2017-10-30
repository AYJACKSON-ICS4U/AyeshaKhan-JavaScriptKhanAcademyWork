//Ayesha Khan
//10/30/17


background(11, 194, 214);

var birds = function()
{
    var v = 0;
    while(v <= 20)
    {
    var tx = random (400);
    var ty = random(0, 150);
    stroke(239, 245, 237);
    textSize(20);
    text("m", tx, ty);
    
   
    v++;
    }
};


 

var genx = new Random(1);
var geny = new Random(2);

var treesdraw = function() {
    var r = 0;
    while(r <= 250)
    {
    var txc = random (400);
    var tyc = random(250, 400);
    stroke(23, 79, 12);
    point(txc,tyc);
    strokeWeight(2);
    r++;
    }
    

    
var e = 0;
while (e <= 50)
{
    var numx = genx.nextGaussian();
    var numy = geny.nextGaussian();
    var sd = 18;
    var m = 350;
    
    var px = sd*numx + m;
    var py = sd*numy + m;
    point (px, py);
    
    e++;
}


var q = 0;
while (q <= 56)
{
    var numx = genx.nextGaussian();
    var numy = geny.nextGaussian();
    var sd = 18;
    var m = 265;
    
    var px = sd*numx + m;
    var py = sd*numy + m;
    point (px, py);
    
    q++;
}

};

var zOff = 0.0;
var clouddraw = function() {
var xOff = 0.0;

for (var x = 0; x < 550; x++) {
    
var yOff = 0.0;

for (var y = 0; y < 248; y++) {
    
var bright = map(noise(xOff, yOff, zOff), 0, 1, 0, 255);

stroke(bright, bright, bright);

point(x, y);

yOff += 0.01;
}
xOff += 0.01;
}
zOff += 0.01;
};


var drawRange = function() {
    var incAmount = 0.01;
    
    for (var j = 0;j < incAmount*width; j += incAmount) {
        var n2 = noise(j);
        var y = map(n2, -2, 0.75, -153, height/2);
        rect(j*100, height-y, 1, y);
        stroke(115, 76, 76);
    }
    
    for (var i = 0;i < incAmount*width; i += incAmount) {
        var n2 = noise(i);
        var y = map(n2, 3, 0, -254, height/2);
        rect(i*100, height-y, 1, y);
        stroke(89, 49, 49);
    }
    
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/2);
        rect(t*100, height-y, 1, y);
        stroke(79, 30, 30);
    }
    
    
   
};




clouddraw();
birds();
drawRange();
treesdraw();

