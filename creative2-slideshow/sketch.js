/*  Created by Angela Rosette-Tavares
    Program creates a slideshow of photos that advance when user clicks image
    last edit 2/11/17 6:59pm
*/ 

var picture = []; // Array for images
var n = 0;  // image number

// preload the images for the slideshow
function preload() {
  picture[0] = loadImage("pixel1.jpg");
  picture[1] = loadImage("pixel2.jpg");
  picture[2] = loadImage("pixel3.jpg");
}

// no need for a background color since image fills screen
function setup() {
  createCanvas(450, 800);
}

// draw places the first image on the screen to start
function draw() {
  image(picture[n]); // variable for images
  instructions();
}

// this function cycles through the rest of the images as user clicks
// mod operator uses remainder to cycle between 0 and 2 - the last and the 1st photo
// when n gets to 3 the remainder is 0 so the 1st photo displays and it repeats
function mousePressed() {
  n = (n + 1) %3; //get next photo
}

// text to let people know what to do to see images
function instructions() {
  fill(255);
  textSize(30);
  text("click to see next picture", 25, 50);
}