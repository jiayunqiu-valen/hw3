function setup() {
  createCanvas(400, 400);
  background(255);
   noStroke();
}

// track the circle to draw next frame
var x1 = 25;
var y1 = 25;

var x2 = 50;
var y2= 25;

function draw() {
 

  // draw circle with random hue
  fill(200, random(255), random(150));
  ellipse(x1, y1, 20);

  fill(random(255), 0, random(150));
  ellipse(x2, y2, 20);

  // set up next circle
  x1 = x1 + 50;
  
  x2 = x2 + 50;

  // if we hit the right edge, go down a line
  if (x1 > width-25) {
    x1 = 25;
    y1 = y1 + 25;
  }

  if (x2 > width-50){
    x2 = 50;
  y2 = y2+25;
  }
  
  // if we hit the bottom edge, reset to top
  if (y1 > height-25) {
    y1 = 25;
  }
    
    if(y2 > height-25){
      y2= 25;
    }
  // mousepressed
  if (mouseIsPressed){
    fill(255)
    rect(0,0, 400,400)
    
  }
}
