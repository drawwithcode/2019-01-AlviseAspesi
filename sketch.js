function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(207, 152, 62);
  frameRate(12);
}

function draw() {
  push();
  translate(width/2-200,height/2);
  rotate(-90);
  stroke(200, 210, 174);
  line(0, 50, 50*sin(frameCount*3-2), -50*cos(frameCount*3-2));
  stroke(200, 210, 174);
  line(0, 50, 50*sin(-frameCount*3+1), -50*cos(-frameCount*3+1));
  pop();
  push();
  translate(width/2+200,height/2);
  rotate(90);
  stroke(200, 210, 174);
  line(0, 50, 50*sin(frameCount*3-2), -50*cos(frameCount*3-2));
  stroke(200, 210, 174);
  line(0, 50, 50*sin(-frameCount*3+1), -50*cos(-frameCount*3+1));
  pop();
  push();
  translate(width/2,height/2-200);
  rotate(0);
  stroke(200, 210, 174);
  line(0, 50, 50*sin(frameCount*3-2), -50*cos(frameCount*3-2));
  stroke(200, 210, 174);
  line(0, 50, 50*sin(-frameCount*3+1), -50*cos(-frameCount*3+1));
  pop();
  push();
  translate(width/2,height/2+200);
  rotate(180);
  stroke(200, 210, 174);
  line(0, 50, 50*sin(frameCount*3-2), -50*cos(frameCount*3-2));
  stroke(200, 210, 174);
  line(0, 50, 50*sin(-frameCount*3+1), -50*cos(-frameCount*3+1));
  pop();

  if(frameCount==60){
    noLoop()
  }
  translate(width/2, height/2);
  rotate(90);

//metà sopra
  stroke(color(85, 87, 92));
  line(100*cos(frameCount*6+3), 100*sin(frameCount*6+3), 100, 0);

//metà sotto
  stroke(color(85, 87, 92));
  line(100*cos(frameCount*6), -100*sin(frameCount*6), 100, 0);
}
