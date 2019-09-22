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
  translate(width/2, height/2);

//metà sopra
  line(200*cos(frameCount*6+3), 200*sin(frameCount*6+3), 200, 0);

  stroke(
    lerpColor(
      color("orange"),
      color("green"),
      frameCount/60)
    );
//

//metà sotto
  line(200*cos(frameCount*6), -200*sin(frameCount*6), 200, 0);

  stroke(
    lerpColor(color("green"),
    color("orange"),
    frameCount/60)
  );

//metà sopra
  line(200*cos(frameCount*6+3), 200*sin(frameCount*6+3), 200, 0);

  stroke(
    lerpColor(
      color("orange"),
      color("green"),
      frameCount/60)
    );
//

//metà sotto
  line(200*cos(frameCount*6), -200*sin(frameCount*6), 200, 0);

  stroke(
    lerpColor(color("green"),
    color("orange"),
    frameCount/60)
  );

  if(frameCount==60){
    noLoop();
  }


  //



}
