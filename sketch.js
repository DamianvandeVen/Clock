function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
    angleMode(DEGREES);
  );
}

function draw() {
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();

strokeWeight(6);
noFill();
stroke(255);
ellipse(width/2, height/2,  600, 600,);

stroke(255, 100, 150);
arc(width/2, height/2,  600, 600, 0, 360)

  //fill(255);
  //noStroke();
  //text(hr + ':' + mn + ':' + sc, 10, 200);
}
