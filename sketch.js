var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX ;
  drawSprites();
}

function createApples() {
  if(frameCount % 80 === 0){
  apple = createSprite(50,350)
  apple.velocityY = 3;
  apple.scale = 0.5 ;
  apple.addImage(appleImg);
  apple.y = Math.round(random(10,100));
  }
}

function createLeaves() {
  if(frameCount % 80 === 0){
    leaf = createSprite(150,350);
    leaf.velocityY = 3;
    leaf.scale = 0.5 ;
    leaf.addImage(leafImg);
    leaf.y = Math.round(random(10,100));
    }
}