
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
  monkey = createSprite(30,260,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,300,800,20);
  ground.shapeColor = "chocolate";
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}


function draw() {

  background("skyblue");
  
  fill("green");
  textSize(30);
  text("MONKEY GO HAPPY", 50, 50 );
  
  fill("red");
  textSize(20);
  text("SURVIVAL TIME = "+ score, 20, 90);
  
  score = score+Math.round(getFrameRate()/60)
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  if(keyDown("space")){
    monkey.velocityY = -10;
   
  }
   monkey.velocityY = monkey.velocityY+1;
  monkey.collide(ground);
  
  meal();
  obstacles();
  
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX =0;
    monkey.velocityY = 0;
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
  }
  drawSprites();
}

function meal(){
  
   if(frameCount%80 === 0){ 
    banana = createSprite(400,20,10,10);
    banana.y = Math.round(random(100,200));
     banana.addImage("image",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    foodGroup.add(banana);
 }
  }
  
function obstacles(){
  
  if(frameCount%300 === 0){
    obstacle = createSprite(300,270,10,10);
    obstacle.addImage("image",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 80;
    obstacleGroup.add(obstacle);
    
  }
}




