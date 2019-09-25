var x = 205;
var y = 550;

function setup() {
  createCanvas(400, 800);
}

function draw() {
  background(100,140,100);
  noStroke();

  //draw mirro
  fill(120,150,200);
  rect(50,20,300,350);
  //draw shape
  fill(255);
  rect(100, 400, 200, 100,40);
  rect(190,480,30,70,20);
  
  //draw basin
  fill(150);
  rect(50,750,300,50,60);
  
  
  // draw drip
  fill(random(255),0,random(255));
  ellipse(x, y, 20);


  // accelerate
  y = y + 5;

  // reset
  if (y > height-60) {
    y = 570;
  }
  

    
}
