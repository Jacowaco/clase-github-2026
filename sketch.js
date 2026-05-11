
let c = [];
let cantidad = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for( let i=0 ; i<cantidad ; i++ ){
    c[i] = new Caminante();
  }

  
  background(0,255,0);
}

function draw() {
  push();
  fill(0,5);
  noStroke();
  rect(0,0,width,height);
  pop();
  for( let i=0 ; i<cantidad ; i++ ){
    c[i].mover();
    c[i].dibujar();
  }
}
