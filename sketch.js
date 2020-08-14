var hr,mn,sc



function setup() {
  createCanvas(800,400);
  
}

function draw() {
  translate(200,200);
  rotate(-90);
  background(255,255,255);

  angleMode(DEGREES);
  hr =hour();
  mn =minute();
sc=second();

  scAngle=map(sc,0,60,0,360);
  schour=map(hr,0,60,0,360);
  scmin =map(mn,0,60,0,360)
push();
rotate(scAngle)
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
  

pop();
push();
rotate(schour)
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
  

pop();
push();
rotate(scmin)
stroke("green");
strokeWeight(7);
line(0,0,100,0);
  

pop();
  drawSprites();
}