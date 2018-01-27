angleMode = "radians";


/////////////////// when the crowd hits the big green creature, it geta knocked out!!
/////////Moving object type////////////////////////////////////////////////////////////////
var Move = function(p, v, a){
    this.p = new PVector (0,350); //position
    this.v = new PVector (0,0); //velocity
    this.a = new PVector (0.01, -0.002); //acceleration
};


Move.prototype.update = function()
{
   
   ////creature 1 and 2///
    this.v.add(this.a); ///adding the acceleration to the velocity
    this.p.add(this.v); /// adding the velocity to the position 
    this.v.limit(5); //limiting velocity to a max of 5
    
    
};



//////////////////////////********Values for third movement only*********//////////////////
var MoveT = function(pt,vt,at)
{
    this.pt = new PVector (0,350);//position for third movement
    this.vt = new PVector (0, 0); ///Velocity for the third movement
    this.at = new PVector (0, 0.01); /// acceleration for third movement
};


MoveT.prototype.updatei = function()
{
    this.vt.add(this.at);
    this.pt.add(this.vt);
    this.vt.limit(5);
};



//////////////////////***********************************************//////////////////////







///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////Background///////////////////////////////////////////
var clouds = function()
{
    
    noStroke(); 
    fill(252, 252, 252);
    
    //cloud 1
    ellipse(100, 100, 30, 20);
    ellipse(133, 100, 30, 20);
    ellipse(116, 100, 40, 29);
    
    ///cloud 2
    ellipse(230, 164, 30, 20);
    ellipse(270, 164, 30, 20);
    ellipse(250, 164, 40, 29);
    
    ///cloud 3
    ellipse(93, 200, 30, 20);
    ellipse(135, 200, 30, 20);
    ellipse(115, 200, 40, 29);
    
    ///cloud 4
    ellipse(274, 50, 30, 20);
    ellipse(316, 50, 30, 20);
    ellipse(294, 50, 40, 29);
    
    ///cloud 5
    ellipse(274, 300, 30, 20);
    ellipse(316, 300, 30, 20);
    ellipse(294, 300, 40, 29);
    
    ///cloud 6
    ellipse(89, 350, 30, 20);
    ellipse(128, 350, 30, 20);
    ellipse(108, 350, 40, 29);
    
};




///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////FIRST PATTERN//////////////////////////////////////
///Bounce off the edges of the screen and play around


// bouncy mover conts.
///declare starting values and basics
var bm = function(p, v, a)
{
    
    Move.call(this, p, v, a); // call base
    
};


bm.prototype = Object.create(Move.prototype);



//displays image 
bm.prototype.display = function()
{
    ////first movement pattern////
    image((getImage("avatars/starky-ultimate")), this.p.x, this.p.y, 80, 80); // thing with horns
    
    image((getImage("avatars/aqualine-sapling")), this.p.x, this.p.y+100, 80, 80);//the blue one with the leaf on its head
    
    
};


//check for the edges of the display
bm.prototype.ce1 = function()
{ 

    if (this.p.x > width || this.p.x < 0) // if the x position is greater than the width of the screen or less than 0 then
    {
        this.v.x = this.v.x * -1; // bounce off
    }
    else if(this.p.y > height || this.p.y < 0) // if y pos is greater than the screen height or less than 0 then 
    {
        this.v.y= this.v.y * -1; //bounce off
    }
};



///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////SECOND PATTERN/////////////////////////////////////
///////These Guys Run across the screen whilst going up
////running across the screen critters
var rs = function(p, v, a)
{
    Move.call(this, p, v, a);
};

rs.prototype = Object.create(Move.prototype);

rs.prototype.display = function()
{
      
     image((getImage("avatars/aqualine-ultimate")), this.p.x+50, this.p.y+50, 80, 80);// the big blue on with wings
     
     image((getImage("avatars/aqualine-tree")), this.p.x+100, this.p.y+55, 80, 80); //the wierd blue one with the twisted body
};

rs.prototype.ce2 = function()
{
    
    
    if (this.p.x > width ) // if the x position is greater than the width of the screen or less than 0 then
    {
        this.p.x = 0; // restart at 0
    }
    else if (this.p.x < 0)
    {
        this.p.x = width;///restart at end 
    }
    
    if(this.p.y > height)  // if y pos is greater than the screen height or less than 0 then 
    {
        this.p.y = 0; //restart at 0
    }
    else if (this.p.y < 0) //
    {
        this.p.y = height; //restart at end
    }
};


///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////THIRD PATTERN//////////////////////////////////////
///These guys are just bouncing up and down

///function for third movement pattern critters
var tc = function(p, v, a)
{
   MoveT.call(this, p, v, a); //Call the base constructor and use its variables
};


tc.prototype = Object.create(MoveT.prototype);//// base off of the base conts.

///display images
tc.prototype.display = function()
{
    image((getImage("avatars/duskpin-tree")), this.pt.x+20, this.pt.y-200, 80, 80);// the medium purple one that looks kinda like a fox, with the large ears
    
    image((getImage("avatars/duskpin-sapling")), this.pt.x+285, this.pt.y-337, 80, 80);// the purple one that looks kinda like a ball, with the big head
    
    image((getImage("avatars/duskpin-ultimate")), this.pt.x+129, this.pt.y-404, 80, 80);// the mature purple one that looks kinda like a fox, with the mane
    
    
        image((getImage("avatars/duskpin-seedling")), this.pt.x+239, this.pt.y-113, 80, 80);// the not mature purple one that looks kinda like a seed, with the large leaf
};


tc.prototype.ce3 = function()
{
    if (this.pt.y > 400 || this.pt.y < 300)
    {
        this.vt.mult(-1);
        //this.pt.x.add(3);
    }
    
    if(this.pt.x <0 || this.pt.x > 400)
    {
        this.pt.x = 400;
    }
};


/////////////////////////////////////////////////////////////////////
/// fourth repulsed

///function for third movement pattern critters
var re = function()
{
   this.pr = new PVector (0, 352);
   this.vr = new PVector (0,0);
   this.ar = new PVector (0.02, -0.003);
  
   
   this.pr2 = new PVector (350, 0);
   this.vr2 = new PVector (0,0);
   this.ar2 = new PVector (0.02, -0.004);
   this.angle = 0; // setting angle to 0

};



re.prototype.display = function(){
    
     image((getImage("avatars/avatar-team")), this.pr.x-100, this.pr.y, 130, 80);// crowd
     
};


re.prototype.display2 = function(){
    pushMatrix(); /// pushing the variable into the matrix stack
    translate(this.pr2.x,this.pr2.y); /// setting the translation factor
    rotate(this.angle +=0.01); // using the variable angle to rotate
    image((getImage("avatars/leafers-ultimate")), this.pr2.x, this.pr2.y, 130, 80);// the big green one
     imageMode(CENTER);
     /// The greenn critter goes arounf the screen spinning making it seem like it's weightlessly bouncing about

     popMatrix();
    
};


re.prototype.update = function(){
    this.vr.add(this.ar);
    this.pr.add(this.vr);
    
    this.vr2.sub(this.ar2);
    this.pr2.add(this.vr2);
    
};

var w = 65;
var h = 40;

var w2 = 65;
var h2 = 40;
re.prototype.rc = function(p, v, a){
    //tc.call(this, p, v, a); 
    this.h2 = this.pr2.y - 65 && this.pr2.y + 65;
    this.w2 = this.pr2.x - 65 && this.pr2.x + 65;
    
    this.w = this.pr.x - 65 && this.pr.x + 65;
    this.h = this.pr.y - 40 && this.pr.y + 40;
    
    if (this.w2 > this.pr.x - w && this.w2 < this.pr.x + w )
    {
        
        if (this.h2 > this.pr.y - h && this.h2 < this.pr.y + h)
        {
            this.ar.mult(2);
            
            //println("HIT");
        }
        
    }
    
};

re.prototype.ce = function(){
     if (this.pr.x > width || this.pr.x < 0) // if the x position is greater than the width of the screen or less than 0 then
    {
        this.vr.x = this.vr.x * -1; // bounce off
    }
    else if(this.pr.y > height || this.pr.y < 0) // if y pos is greater than the screen height or less than 0 then 
    {
        this.vr.y= this.vr.y * -1; //bounce off
    }
    
    
    ///////////////////////////
    
    if (this.pr2.x > width || this.pr2.x < 0) // if the x position is greater than the width of the screen or less than 0 then
    {
        this.vr2.x = this.vr2.x * -1; // bounce off
    }
    else if(this.pr2.y > height || this.pr2.y < 0) // if y pos is greater than the screen height or less than 0 then 
    {
        this.vr2.y= this.vr2.y * -1; //bounce off
    }
};







var r = new rs();/// setting r as running mover
var b = new bm(); /// setting b as the new variable for bm or bouncy mover
var t = new tc(); /// setting t as third movement pattern mover
var rep = new re();//repulsion















// draws the actual image
draw = function() {
    var xc = random(0, 400);
    var yc = random(0, 400);
    
    
    background(204, 230, 237); //setting backgrond to off white
   
    
    /////clouds
    clouds();
    
    ////bouncy movers(blue amd black)
    b.update(); // update the values
    b.ce1();
    b.display();//then draw the function
    
    ///running movers(blue)
    r.update();
    r.ce2();
    r.display();
    
    
    ///third movement pattern(purple)
    t.updatei();
    t.ce3();
    t.display();
    
    
    rep.update();
    rep.display2();
    rep.rc();
    rep.ce();
    rep.display();
};

draw();





