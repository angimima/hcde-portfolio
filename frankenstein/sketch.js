var mic;

var vol;

function setup() {
  createCanvas(800, 800);
  
  mic = new p5.AudioIn();
  
  mic.start();
}

function draw() {

  background(255);
  
  vol = mic.getLevel();
  
  face();
  
  hair();
  
  eyes();
  
  eyebrows();
  
  pupils();
  
  bolts();
  
  mouth();
}
  function face(){
  noStroke();
  fill(22,163,17);
  rect(200, 200, 400, 400);
  }
  
  function hair(){
  fill(0);
  rect(200,200, 400, 50);
  }
  
  function eyes(){
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(300, 370, 150,150);
       
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(500, 420, 120,120);
  }
  
  function pupils(){
  fill(0);
    ellipse(320, 400, 30, 30);
    ellipse(500, 420, 30, 30);
  }
  
  
  function eyebrows(){
    stroke(0);
    strokeWeight(8);
  line(210, 280, 370, 260);
  
  stroke(0);
    strokeWeight(8);
  line(480, 320, 570, 360);
  
  }
  
  function bolts(){
    var adjustedVol = map(vol, 0, 1, 0, 500);
    fill(22);
    rect(170 - adjustedVol, 320, 30 + adjustedVol, 20);
    rect(600, 320, 30 + adjustedVol, 20);
  }
  
  function mouth(){
    fill(0);
    ellipse(380, 500, 20, 20);
  }
