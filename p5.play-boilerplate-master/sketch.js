var tim, timImage;
var jake, jakeImage;

function preload(){
  
}

function setup() {
  createCanvas(windowWidth,windowHeight); 
   tim = createSprite(random(100,300), random(100,300), 50, 50); 
   tim.scale = 0.3 
   tim.debug = true 
   tim.setCollider("rectangle",0,0,300,300) 

     jake = createSprite(random(100,300), random(100,300), 50, 50); 
     jake.scale = 0.3 
     jake.debug = true 
     jake.setCollider("rectangle",0,0,300,300) 
}

function draw() {
  background(255,255,255);  
  drawSprites();
}