function setup() {
  var canvas=createCanvas(640, 480);
  //canvas.parent('lienzo');
  background(68, 81, 89);
}

function draw() {
  fill(random(255),random(255),random(255));
  textSize(random (30))
  text("hola a todos",random(640),random(480));
}
function mouseClicked(){
  background(68, 81, 89);
  
}