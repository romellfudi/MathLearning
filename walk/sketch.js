var axis_h;
var axis_v;

function setup() {
  createCanvas(400, 400);
  axis_h = 200;
  axis_v = 200;
  background(51);
}

function draw() {
  stroke(255, 100);
  strokeWeight(5);
  point(axis_h, axis_v);

  var r = floor(random(4));

  switch (r) {
    case 0:
      axis_h = axis_h + 1;
      break;
    case 1:
      axis_h = axis_h - 1;
      break;
    case 2:
      axis_v = axis_v + 1;
      break;
    case 3:
      axis_v = axis_v - 1;
      break;
  }
}