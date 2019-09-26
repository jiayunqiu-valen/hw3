function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }
//flower
  if (random(20) > 19.9) {
    
     fill(128,90,97)
    rect (48,height-50,5,height-10) 
    
    
    fill (22,90,97);
    ellipse(35,height-50,20);
    ellipse(50,height-60,20);
    ellipse(65,height-50,20);
    ellipse(50,height-40,20);
  
    fill(50, 120, 150);
    ellipse(50,height-50,20);
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
