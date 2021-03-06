function setup() {
  createCanvas(720, 480); // set dimensios of canvas element
  background(249, 162, 154); // background peach color
  smooth // draws with anti-aliased edge
  
  // Chair
  fill(81, 193, 146); // green color
  arc(430, 300, 400, 400, PI, TWO_PI); // arc for the top part 
  rect(230, 282, 400, 98); // rectangle for the bottom 
  
  // Hair
  fill(209, 122, 78); // brown color
  arc(430, 300, 280, 280, PI, TWO_PI); // arc for the top part
  rect(290, 300, 280, 40); // rectangle for the bottom
  
  // Face
  fill(249, 186, 154); // face color
  noStroke // remove outline of face
  arc(430, 310, 240, 240, PI, TWO_PI); // arc for top part
  rect(310, 300, 240, 40); // rectangle for the bottom
  
  //Ears
  fill(249, 186, 154); // face color
  ellipse(550, 300, 20, 40); // left ear is a circle behind face with only half showing
  ellipse(310, 300, 20, 40);  // right ear
  
  // Table
  fill(27, 115, 170); // blue color
  stroke(0); // outline for table
  quad(0, 480, 0, 360, 720, 315, 720, 480); // using 4 points to make table a quadrant for it to slant
  
  // Eyes
  fill(255); // white color
  stroke(0);  // outline for eyes
  ellipse(370, 290, 100, 40); // oval for left eye
  ellipse(485, 290, 100, 40); // oval for right eye
  
  fill(0); // black color
  arc(365, 270, 25, 30, TWO_PI, PI); // arc for left pupil radian starts on right
  arc(485, 270, 25, 30, TWO_PI, PI); // arc for right pupil

  // Lashes
  stroke(0);
  line(400, 305, 417, 317); // lashes on left eye bottom
  line(385, 308, 400, 325); // right to left
  line(373, 311, 378, 328); 
  line(360, 309, 357, 328); 
  line(350, 309, 347, 328);   
  line(336, 306, 328, 324); 
   
  line(520, 305, 527, 317); // lashes on right eye bottom
  line(505, 308, 510, 325); // right to left
  line(493, 311, 493, 325); 
  line(480, 309, 467, 325); 
  line(470, 309, 455, 325);   
  line(456, 306, 438, 322); 
  
 
  line(385, 269, 390, 255);  // lashes on left eye top
  line(373, 269, 378, 248); // right to left
  line(360, 269, 357, 248); 
  line(350, 269, 347, 248);   
  line(336, 276, 329, 259); 
  
  line(515, 275, 520, 265); // lashes on right eye top
  line(500, 269, 505, 255); // right to left
  line(483, 269, 478, 248); 
  line(463, 270, 457, 250); 
  line(451, 273, 445, 258);   

  // eyebrows
  noFill();
  arc(365, 260, 75, 40, PI, TWO_PI); // not sure I understand radians but I used the book and played around
  arc(480, 260, 75, 40, PI, TWO_PI); // arc for eyebrow radian starts on left
  
}

