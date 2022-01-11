
var bg, backgroundImg;
var ironMan, ironManImage

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImage = loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  ironMan = createSprite(200,400);
  bg.addImage(backgroundImg);
  ironMan.addImage(ironManImage);
  ironMan.scale = 0.3

 
}

function draw() {
  bg.velocityY = -6;
  //scrool background
  if(bg.y < 215){
    bg.y=bg.width/4;
  }

  if(ironMan.x>1000){
    ironMan.x = 925
  }
  if(ironMan.y<50){
    ironMan.y = 50
  }
  if(keyDown("left")){
    ironMan.x = ironMan.x-5
  }
  if(keyDown("right")){
    ironMan.x = ironMan.x+5
  }
  if(keyDown("space") ) {
    ironMan.velocityY = -16;
  }
  ironMan.velocityY = ironMan.velocityY + 0.5;

    
 
    
    drawSprites();
   
}