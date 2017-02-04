/*  Created by Angela Rosette-Tavares
    Program draws a monster and makes his eyes follow mouse or makes him jump if mouse if pressed
<<<<<<< HEAD
    last edit 1/28/17 3:10pm
=======
    last edit 2/6/17 1:26am
>>>>>>> 02bb39213815dd0f8d35d888d2f757ceecebc0b7
*/ 

function setup() {
  createCanvas(800, 600);
}

var page = 0;
var eyeDirection = 0;
var jumpValue = 0;
var jumpDir = -1;

function draw() {
  background(255);
  fill(0);
  noStroke(); // put here to have stroke on arms only 
  monster(400, 350 + jumpValue); // calls monster function
  // if on starting page eyes follow mouse
  if (page == 0) { 
    if (mouseX > 330) {
      eyeDirection = +10; // eyes go right if mouse is above 350
    } else if (mouseX < 275) {
      eyeDirection = -10; // eyes go left if mouse is below 275
    }
  } 
  // otherwise if not on starting page monster is jumping
  else {
     jumpValue = jumpValue + jumpDir;
      if ((jumpValue > 0) || (jumpValue < -50)) { // moves from 0 position to 50
        // change direction
        jumpDir = jumpDir * -1; // changes direction when 0 or 50 is reached
      }
  }
  // changes from eye moving monster to jumping monster when mouse is clicked
  if (mouseIsPressed) {
    page = 1 - page;
    eyeDirection = 0; // resets eyes to center
  }
}

// building monster from 4 different functions
function monster(x, y) {
  legs(x, y);
  body(x, y);
  eyes(x, y); // calling function and passing parameters to eyes
  pupils(x + eyeDirection, y); // calling function and passing parameters to pupils
  mouth(x, y); // calls mouth function
  arms(x, y); // calls arms
}

// builds legs separate from body in case I want to animate later
function legs(x, y) {
  fill(3, 123, 161); // dark blue
  ellipse(265, y + 105, 20, 100); // left leg
  ellipse(340, y + 105, 20, 100); // right leg
  ellipse(248, y + 149, 44, 22); // left foot
  ellipse(357, y + 149, 44, 22); // right foot
}

// builds monster body
function body(x, y) {
  fill(0);
  triangle(346, y - 200, 345, y - 167, 318, y - 185); // right horn
  triangle(266, y - 200, 305, y - 177, 263, y - 168); // left horn
  triangle(303, y - 214, 324, y - 186, 289, y - 188); // middle horn
  fill(11, 158, 218);// medium blue
  ellipse(x - 96, y -135, 110, 110); // head
  ellipse(x - 96, y - 9, 150, 200); //body
  fill(41, 186, 231); // light blue
  ellipse(x - 96, y + 18, 85, 120); // tummy
  fill(0);
  ellipse(x - 96, y + 51, 10, 10); // belly button
}

// makes the yellow parts of eyes and calls pupils
function eyes(x, y) {
  fill(255, 204, 0);
  ellipse(x - 120, y - 145, 30, 30);
  ellipse(x - 72, y - 145, 30, 30);
}

// makes the pupils separate so they can be moved
function pupils(x, y) {
  fill(0);
  ellipse(x - 120, y - 145, 10, 10);
  ellipse(x - 72, y - 145, 10, 10);
}

// makes the mouth separate in case I want to animate later
function mouth(x, y) {
  fill(0);
  rect(284, y - 124, 40, 19);
  ellipse(304, y - 103, 40, 40);
  fill(124, 19, 27); // burgundy
  ellipse(304, y - 90, 22, 9); // tongue
  fill(255);
  triangle(284, y - 124, 304, y - 124, 295, y - 109); //tooth
  triangle(306, y - 124, 324, y - 124, 315, y - 109); // tooth
}

// draws lines for arms
function arms(x, y) {
  stroke(11, 158, 218); // for the line to have color
  strokeWeight(12.0);
  strokeCap(ROUND);
  line(365, y - 59, 405, y - 93);
  line(371, y - 21, 429, y - 68);
  line(248, y - 61, 206, y - 94);
  line(241, y - 22, 183, y - 69);
<<<<<<< HEAD
}
=======
}
>>>>>>> 02bb39213815dd0f8d35d888d2f757ceecebc0b7
