//declaring variables
var trex ,trex_running;
var ground, ground_Image;
var invisibleGround;

//to load animation, images and sounds
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png")  
  ground_Image = loadImage("ground2.png");

}

//runs once; at the start of the game; is used to create stuff
function setup(){
  //creating canvas
  createCanvas(600,200)
  
  //create a trex sprite, gave it animation and scaled it down
  trex = createSprite (50,160);
  trex.addAnimation("running trex", trex_running)
  trex.scale = (0.5);

  //created a ground sprite, gave it image
  ground = createSprite(300,180,600,10);
  ground.addImage(ground_Image);
  //to move the ground right to left
  ground.velocityX = -4;

  invisibleGround = createSprite(300,190,600,10);
  invisibleGround.visible = false

  
}

//runs for every frame, continuous function
function draw(){
  //clears the screen and gives it color
  background(255);
  
  //to make the trex jump when space key is pressed
  if(keyDown("space")&&(trex.y > 155)){
    trex.velocityY = -11;
  }

  //to give gravity to the trex
  trex.velocityY = trex.velocityY+1;

  //to make the ground infinite
  //checking if ground is leaving the left edge
  if(ground.x<0){
    //starting it back from center of the canvas
    ground.x = width/2
  }

  //to make the trex walk on top of the ground
  trex.collide(invisibleGround);



  //display sprites
  drawSprites();
}
