var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 255;

function setup() {
  createCanvas(400, 400);
  btn_green=createButton("green")
  btn_green.position(300,50)
  btn_green.mousePressed(green_bg)

  btn_red=createButton("red")
  btn_red.position(100,50)
  btn_red.mousePressed(red_bg)
}

function draw() {
  background(r,g,b);
  
}
function red_bg(){
  r=225

  g=0

  b=0
}
function green_bg(){
  r=0

  g=225

  b=0
}