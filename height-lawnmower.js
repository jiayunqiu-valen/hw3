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

  //cut when grass achieve 50 and leave 25 height grass
  if (random(50) > 49.9) {
    fill(255);
    rect(0, 0, width, height-25);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
