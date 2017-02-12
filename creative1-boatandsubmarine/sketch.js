  /*  Created by Angela Rosette-Tavares
    Program draws a boat and submarine and moves them across the screen. submarine drps periscope when boat gets close
    last edit 2/9/17 4:36pm
*/ 

var img; // create a variable for the background image
var xB = 0; // boat x
var yB = 275; // boat y
var xS = 450; // submarine x
var yS = 400; // submarine y
var xP = 450; // periscope x
var yP = yS - 67; // perscope y
// var speedB = 0.5; // speed for boat to travel
// var speedS = 0.10 // speed for submarine to travel

// preload the underwater background image
function preload() {
  img = loadImage("underwater.png"); 
}

function setup() {
  createCanvas(770, 600); // create a canvas
  background(121, 209, 236); // fill with light blue color
}

function draw() {
  background(121, 209, 236); // fill with light blue color
  image(img, 0, 290); // place underwater image on canvas
  boat(xB, yB + random(-0.5, 0.5)); // call boat function and make boart jiggle
  submarine(xS, yS); // call submarine function
  periscope(xP, yP); // call periscope function
  xB = xB + 1; // to move the boat across the screen to the right
  if (xB > 860) { // if boat goes off screen at right
    xB = -50; // it starts in again on the left side of screen
  }
  // when boat passes sub move sub
  if (xB > 350) { // when the boat reaches 351 on screen
    xS = xS -2; // move submarine across screen to right
    xP = xP -2; // persiscope too
  }
  // make sub circle around with the periscope
  if (xS < 0 && xP < 0) {
    xS = 860;
    xP = 860;
  }
}

// create a black boat with 2 white sails
function boat(xB, yB) {
  fill(0);
  arc(xB, yB, 180, 60, 0, PI, TWO_PI);
  fill(255);
  triangle(xB, yB - 90, xB + 70, yB, xB, yB);
  triangle(xB - 5, yB - 90, xB - 5, yB, xB - 30, yB);
}

// create a submarine
function submarine(xS, yS) {
  fill(102);
  rect(xS - 38, yS - 67, 80, 20); // upper deck
  triangle(xS + 95, yS, xS + 125, yS -20, xS + 125, yS); //top fin
  triangle(xS + 95, yS, xS + 125, yS +20, xS + 125, yS); // bottom fin
  ellipse(xS, yS, 200, 100); // main body
  fill(255, 255, 0);
  ellipse(xS - 25, yS, 25, 25); // window 1
  ellipse(xS + 5, yS, 25, 25); // window 2
  ellipse(xS + 35, yS, 25, 25); // window 3
  strokeWeight(3);
  line(xS - 70, yS -34, xS - 70, yS + 32); // front decoration
}

// create a periscope for the submarine separately so it can be moved 
function periscope (xP, yP) {
  // move periscope up and down depending on how close the boat is
  if (xB <= xP - 120) { // above water if boat is far
    line(xP, yP, xP, yP - 70); 
    line(xP, yP -70, xP - 10, yP - 70); 
  } else { // below water if boat is near
    line(xP, yP, xP, yP - 20);
    line(xP, yP -20, xP - 10, yP - 20);
  }
}

