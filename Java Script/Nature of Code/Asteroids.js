//ayesha khan
var Spaceship = function(x,y) {
this.position = new PVector(200, 200); //Starts off in the middle of the screen
this.velocity = new PVector(0,0); ///setting velocity equal to 0
this.acceleration = new PVector(0,0); /// setting the starting acceleration to zero, so it doesn't move right off the bat
this.angle = 0; //starting angle is 0
};


Spaceship.prototype.update = function() {
this.velocity.add(this.acceleration);// increase velocity
this.velocity.limit(5);//limit velocity
this.position.add(this.velocity);///moving the ship
this.acceleration.mult(0);///setting acceleration to zero so that it doesn't keep getting faster
};

Spaceship.prototype.applyForce = function(force) {
this.acceleration.add(force); ///adding the force to the acceleration
};

Spaceship.prototype.checkEdges = function() {
if(this.position.y < 0){ ///checking edges, if exceeds it then reset
this.position.y = height;

} else if(this.position.y > height) {
this.position.y = 0; //same as above exceot in reverse

}
if(this.position.x < 0) {
this.position.x = width; ///same as y except for x

} else if(this.position.x > width) {
this.position.x = 0;

}

};

Spaceship.prototype.display = function() {
pushMatrix(); /// pushing the variable into the matrix stack
translate(this.position.x,this.position.y); /// setting the translation factor
rotate(this.angle); // using the variable angle to rotate

// Create the spaceship itself
fill(0, 33, 82);
rectMode(CENTER); // set the point of origin to the center
rect(0,0,10,5);
fill(171, 171, 171);
triangle(8,0,-8,0,0,-16);

popMatrix(); //going to the previously saved values

};

var player1 = new Spaceship(200,200); ///set player1 equal to the spaceship
var draw = function() { //draw function
background(255, 255, 255);// background


// if these keys are pressed then chenge the angles
keyPressed = function() {
if(keyCode === LEFT) {
player1.angle-=10;
} else if(keyCode === RIGHT) {
player1.angle+=10;
}
};


/// creating a thrust var
var thrust = new PVector(0,-5);
thrust.rotate(player1.angle); 

//if key is pressed then set force equal to force 
if(keyIsPressed && keyCode === UP){
player1.applyForce(thrust);
}


/// calling the functions
player1.update();
player1.checkEdges();
player1.display(); 


};
