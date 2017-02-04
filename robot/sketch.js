function setup() {
 createCanvas(720, 480); // sets dimensions of canvas element
 smooth // draws with anti-aliased edge
 strokeWeight(6); // sets the width of line
}

function draw() {
  background(205); // when used in draw it clears the disply window in the beginning of each frame. If I remove it the display doesn't get cleared so you see repeated robots drawn
  translate(mouseX, mouseY);

 // Neck
 stroke(51); // sets the color of the line 1 # means grayscale value
 line(266, 257, 266, 162) // draws a line
 line(276, 257, 276, 162); // 4 parameters draws in 2D
 line(286, 257, 286, 162); // can't be filled

// Antennae
stroke(98, 210, 162);
line(276, 155, 246, 112);
line(276, 155, 306, 56);
line(276, 155, 342, 170);

// Body
noStroke(); // disables stroke or outline
fill(98, 210, 162); // sets the color used to fill shapes
ellipse(264, 377, 66, 66); //draws an oval
fill(31, 171, 137);
rect(219, 257, 90, 120); //draws a rectangle
fill(215, 251, 232);
rect(219, 274, 90, 6);

// Head
fill(215, 251, 232);
ellipse(276, 155, 90, 90);
fill(157, 243, 196); // nose-like circle
ellipse(288, 150, 28, 28);
fill(11, 64, 156); // little dot
ellipse(288, 150, 6, 6);
fill(0); // the 3 dots
ellipse(263, 148, 10, 10);
ellipse(296, 130, 8, 8);
ellipse(305, 162, 6, 6);

}