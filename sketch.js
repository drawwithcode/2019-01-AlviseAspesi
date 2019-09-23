function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background("black");
  frameRate(12);
}

function draw() {
  push();
  translate(width/2-200,height/2);
  stroke(
    lerpColor(
      color("orange"),
      color("green"),
      frameCount/60)
  );
  line(50*cos(frameCount*6+3), 50*sin(frameCount*6+3), 50, 0);
  pop();
  push();
  translate(width/2+200,height/2);
  rotate(180);
  stroke(
    lerpColor(
      color("orange"),
      color("green"),
      frameCount/60)
  );
  line(50*cos(frameCount*6+3), 50*sin(frameCount*6+3), 50, 0);
  pop();
  push();
  translate(width/2,height/2-200);
  rotate(90);
  stroke(
  lerpColor(color("green"),
  color("orange"),
  frameCount/60)
);
  line(50*cos(frameCount*6), -50*sin(frameCount*6), 50, 0);
  pop();
  push();
  translate(width/2,height/2+200);
  rotate(-90);
  stroke(
  lerpColor(color("green"),
  color("orange"),
  frameCount/60)
);
  line(50*cos(frameCount*6), -50*sin(frameCount*6), 50, 0);
  pop();

//

  if(frameCount==60){
    noLoop()
  }
  translate(width/2, height/2);
  rotate(90);

//metà sopra
  stroke(
    lerpColor(
      color("orange"),
      color("green"),
      frameCount/60)
  );
  line(100*cos(frameCount*6+3), 100*sin(frameCount*6+3), 100, 0);

//metà sotto
  stroke(
  lerpColor(color("green"),
  color("orange"),
  frameCount/60)
);
  line(100*cos(frameCount*6), -100*sin(frameCount*6), 100, 0);





}
