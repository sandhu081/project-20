var  movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 70, 50);
  fixedRect = createSprite(200, 200, 50, 70);
  fixedRect.debug = true;
  movingRect.debug = true;
  fixedRect.shapeColor= "green";
  movingRect.shapeColor= "green";
 
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (movingRect.x - fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x - movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.y - fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y - movingRect.y<movingRect.height/2+fixedRect.height/2)
   // else()

  drawSprites();

}