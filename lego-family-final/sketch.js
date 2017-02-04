/*  Created by Angela Rosette-Tavares
    Program draws lego Scooby Doo characters and makes them move from corners to meet in the center of canvas
    last edit 1/28/17 3:10pm
*/ 

function setup() {
  createCanvas(1100,500); // canvas big enough for 5 characters to move
}

// Variables to draw basic lego blocks
var legoWidth = 40; // all legos are this width
var smLegoHeight = 5; // height for smallest lego
var medLegoHeight = 15; // height for medium lego
var lgLegoHeight = 40; // height for large lego
var earLegoWidth = 5; // width for ear lego
var earLegoHeight = 10; // height of ear lego

// Variables to Control Characters Movement
// fred
var fredXMovement = 10; // start x position
var fredYMovement = 100; // start y postion
var fredSpeed = 1; // variable per character to modify speed and direction minus goes left plus goes right
// daphne
var daphneXMovement = 10; // start x position
var daphneYMovement = 350; // start y position
var daphneXSpeed = 1; // variable per character to modify speed and direction minus goes left plus goes right
var daphneYSpeed = -1; // variable per character to modify speed and direction minus goes up plus goes down
// vilma
var vilmaXMovement = 1090; // start x position
var vilmaYMovement = 100; // start x position
var vilmaXSpeed = -2; // variable per character to modify speed and direction minus goes left plus goes right
var vilmaYSpeed = 1; // variable per character to modify speed and direction minus goes up plus goes down
// shaggy
var shaggyXMovement = 1090; // start x position
var shaggyYMovement = 350; // start x position
var shaggyXSpeed = -2; // variable per character to modify speed and direction minus goes left plus goes right
var shaggyYSpeed = -1; // variable per character to modify speed and direction minus goes up plus goes down
// scooby
var scoobyXMovement = 800; // start x position
var scoobyYMovement = 300; // start x position
var scoobyXSpeed = -2; // variable per character to modify speed and direction minus goes left plus goes right
var scoobyYSpeed = -1; // variable per character to modify speed and direction minus goes up plus goes down

function draw() {
  background (0); // making a dark background in draw and not setup to force redraw of characters as they move  
  noStroke(); // don't want outlines on any legos but need a stroke for the tail line so this is in draw function not setup
  fred(); // calls function for fred legos
  daphne(); // calls function for daphne legos
  vilma(); // calls function for daphne legos
  shaggy(); // calls function for shaggy legos 
  scooby(); // calls function for shaggy legos   
}
 // drawing reusable lego blocks with the following sm med lg lego functions
 // parameters are for x and y position and rgb colors
function smLego (x, y, r, g, b) { // making a function for small lego size and with color represented by rgb
  fill(r, g, b); // options for color
  rect(x, y, legoWidth, smLegoHeight); // options for location, set width and height
}

function medLego (x, y, r, g, b) { // making a function for medium size lego size and with color represented by rgb
  fill(r, g, b); // options for color
  rect(x, y, legoWidth, medLegoHeight); // options for location, set width and height
}

function lgLego (x, y, r, g, b) { // making a function for large size lego size and with color represented by rgb
  fill(r, g, b); // options for color
  rect(x, y, legoWidth, lgLegoHeight); // options for location, set width and height
}

// drawing reusable small lego blocks with the following ear lego function
function earLego (x, y, r, g, b) { // making a function for ear lego size and with color represented by rgb
  fill(r, g, b);  // options for color
  rect(x, y, earLegoWidth, earLegoHeight); // options for location, set width and height
}

// function fred - creates character and moves him
function fred() {
  var xPosition = fredXMovement; // starting X position
  var yPosition = fredYMovement; // feet Y position
  var offSet = 0; // starting y postion of character - didn't make this a global variable in case I wanted to start them elsewhere
  lgLego (xPosition, yPosition, 15, 156, 216); //  pants
  offSet += lgLegoHeight; // stacking the next block on top by height of the next lego
  lgLego (xPosition, yPosition - offSet, 255, 255, 255); //  shirt y postion starting at bottom of block subtracting size of block before
  offSet += smLegoHeight; // stacking the next block on top by height of the next lego
  smLego (xPosition, yPosition - offSet, 15, 156, 216); // scarf
  offSet += lgLegoHeight; // stacking the next block on top by height of the next lego  
  lgLego (xPosition, yPosition - offSet, 254, 203, 144); // head
  
// moving and stopping fred
  if (xPosition < 200) { // move fred until he gets to x position of 200
    fredXMovement += fredSpeed; // direction and speed of movement along x axis
  }
  if (yPosition < 240) { // move fred until a final y coordinate
    fredYMovement += fredSpeed; // direction and speed of movement along y axis
  }
}

// function daphne - creates character and moves her
function daphne() {
  var xPosition = daphneXMovement; // starting X position
  var yPosition = daphneYMovement; // feet Y position
  var offSet = 0; // starting y position of character
  lgLego (xPosition, yPosition, 122, 104, 174); // dress bottom
  offSet += lgLegoHeight; // stacking the next block on top by height of the next lego
  lgLego (xPosition, yPosition - offSet, 187, 169, 210); // dress top y postion starting at bottom of block subtracting size of block before
  offSet += lgLegoHeight; // stacking the next block on top by height of the next lego
  lgLego (xPosition, yPosition - offSet, 254, 203, 144); // head
  offSet += smLegoHeight; // stacking the next block on top by height of the next lego  
  smLego (xPosition, yPosition - offSet, 243, 145, 31); // hair
  
// moving and stopping daphne
  if (xPosition < 260) { // move daphne until she gets to fred's position plus 40 for width plus 20 for spacing
    daphneXMovement += daphneXSpeed; // direction and speed of movement along x axis
  }
  if (yPosition > 240) { // move daphne until she gets next to fred on the y coordinate
    daphneYMovement += daphneYSpeed; // direction and speed of movement along y axis
  }
}

// function vilma - creates character and moves her
function vilma() {
  var xPosition = vilmaXMovement; // starting X position
  var yPosition = vilmaYMovement; // feet Y position
  var offSet = 0; // starting y position of character
  lgLego (xPosition, yPosition, 198, 31, 72); // dress bottom
  offSet += medLegoHeight; // stacking the next block on top by height of the next lego
  medLego (xPosition, yPosition - offSet, 248, 152, 33); // dress top y postion starting at bottom of block subtracting size of block before
  offSet += lgLegoHeight; // stacking the next block on top by height of the next lego
  lgLego (xPosition, yPosition - offSet, 254, 203, 144); // head
  offSet += smLegoHeight; // stacking the next block on top by height of the next lego  
  smLego (xPosition, yPosition - offSet, 181, 83, 64); // hair
  
// moving and stopping vilma
  if (xPosition > 400) { // move vilma until she gets to scooby's position plus 40 for width plus 20 for spacing
    vilmaXMovement += vilmaXSpeed; // direction and speed of movement along x axis
  }
  if (yPosition < 240) { // move vilma until she gets next to fred on the y coordinate
    vilmaYMovement += vilmaYSpeed; // direction and speed of movement along y axis
  }
}

// function shaggy - creates character and moves him
function shaggy() {
  var xPosition = shaggyXMovement; // starting X position
  var yPosition = shaggyYMovement; // feet Y position
  var offSet = 0; // starting y position of character
  lgLego (xPosition, yPosition, 181, 83, 64 ); // pants
  offSet += medLegoHeight; // stacking the next block on top by height of the next lego
  medLego (xPosition, yPosition - offSet, 181, 83, 64); // pants
  offSet += lgLegoHeight; // stacking the next block on top by height of the next lego
  lgLego (xPosition, yPosition - offSet, 178, 188, 54); // shirt top y postion starting at bottom of block subtracting size of block before
  offSet += lgLegoHeight; // stacking the next block on top by height of the next lego
  lgLego (xPosition, yPosition - offSet, 254, 203, 144); // head
  offSet += smLegoHeight; // stacking the next block on top by height of the next lego  
  smLego (xPosition, yPosition - offSet, 232, 168, 34); // hair
  
// moving and stopping shaggy
  if (xPosition > 460) { // move shaggy until he gets to vilma's position plus 40 for width plus 20 for spacing
    shaggyXMovement += shaggyXSpeed; // direction and speed of movement along x axis
  }
  if (yPosition > 240) { // move shaggy until he gets next to fred on the y coordinate
    shaggyYMovement += shaggyYSpeed; // direction and speed of movement along y axis
  }
}  
  
// function scooby - creates character and moves him
function scooby() {
  var xPosition = scoobyXMovement; // starting X position
  var yPosition = scoobyYMovement; // feet Y position
  var offSet = 0; // starting y position of character
  lgLego (xPosition, yPosition, 176, 112, 41); // bottom of body
  offSet += medLegoHeight; // stacking the next block on top by height of the next lego
  medLego (xPosition, yPosition - offSet, 176, 112, 41); // top of body
  offSet += earLegoHeight; // stacking the next block
  earLego (xPosition, yPosition - offSet, 176, 112, 41); // small lego stacked on top of med lego
  earLego (xPosition + 35, yPosition - offSet, 176, 112, 41); // same y postion as other ear but offset on x position
  stroke(176, 112, 41); // for the line to have color
  strokeWeight(2); // for thicker line
  line(xPosition + legoWidth, yPosition + 20, xPosition + legoWidth + 15, yPosition); // scooby's tail starts midway thru bottom lego
  
// moving and stopping scooby
  if (xPosition > 320) { // move scooby until he gets to daphne's position plus 40 for width plus 20 for spacing
    scoobyXMovement += scoobyXSpeed; // direction and speed of movement along x axis
  }
  if (yPosition > 240) { // move scooby until he gets next to fred on the y coordinate
    scoobyYMovement += scoobyYSpeed; // direction and speed of movement along y axis
  }
}  
