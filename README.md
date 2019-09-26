# hw3
1.What code draws the blades of grass?

//grass color
stroke(random(60, 70), 100, 90);
//grass shape
line(x, height-10, x+random(-10, 10), height-10-random(h));
//nostroke of the grass
noStroke();

2.What code makes the "lawnmower" come by? How often does it come by?

if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  
  if the grass grow(the height) achieved 100, the lawnmower will come and the grass will grow start from 10 (the beginning).  

3.What's the point of the h variable?

the height of the grass.

4.What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?

line(x, height-10, x+random(-10, 10), height-10-random(h));

height-10 means the y-coordinate of the first point, as height=400, height-10=390 where the grass are starting to grow
height-10-random(h) means the the y-coordinate of the second point，height-10-random(h) where how high could the grass grow to.


