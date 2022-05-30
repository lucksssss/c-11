var bac, bacani
var cen, cenani
function preload(){
  bacani = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  cenani = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  cen = createSprite(450, 200)
  cen.scale = 0.25
  cen.addImage("cenario", cenani)
  bac = createSprite(100, 200, 20, 20)
  bac.addAnimation("barco", bacani)
  bac.scale = 0.25
}

function draw() {
  background("blue");
    drawSprites();

 
}
