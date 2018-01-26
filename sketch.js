function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  fill(255);
  noStroke();
  text(hr + ':' + mn + ':' + sc, width/2, height/2);

  strokeWeight(8);
  stroke(0, 150, 0);
  noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 560, 560, 0, end1);

  stroke(0, 0, 150);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 580, 580, 0, end2);

  stroke(150, 0, 0);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 600 , 600, 0, end3);
}
