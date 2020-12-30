var knife,knifeImage;
var sword,swordImage;
var  PLAY=1;
var END= 0;
var gamestate=PLAY;
var  enemy,alienImage;
var fruit ,fruitImage,fruit1,fruit2,fruit3,fruit4;
var score=0;
var enemyGroup;
var fruitGroup;

var 

function preload(){ 
  
  fruit1=loadImage("fruit1.png"); 
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  
  swordImage=loadImage("sword.png")
  //knifeImage=loadImage("knifeSword.png")
 alienImage=loadImage("alien1.png"); 
}
function setup(){
  createCanvas(600,600)
  
  
  //creatingsword 
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  
   enemyGroup=createGroup();
   fruitGroup = createGroup();
  

}
function draw(){
    background("white");
  if(gamestate=== PLAY){
    sword.y=World.mouseY;
    sword.x=World.mouseX;
 text("score "+score,500,20)
     fruits();
     Enemy( );
    
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2;
    }
    
   if(enemyGroup.isTouching(sword)){
     gamestate=END;
     
   }
  } 
  if(gamestate===END){

    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
    enemyGroup.destroyEach();
    fruitGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    

  }
  drawSprites();
}
function fruits(){
  if(World.frameCount%80===0){
    var fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    //debug route
    r=Math.round(random(1,4)); 
    if (r === 1){  
      fruit.addImage(fruit1);
    }else if(r === 2){
      fruit.addImage(fruit2);
    }else if(r === 3){
      fruit.addImage(fruit3);
      }else{
      fruit.addImage(fruit4);
       }
     fruit.y=Math.round(random(50,340));
  
     fruit.velocityX=-7;
     fruit.setLifetime=100;
  
     fruitGroup.add(fruit);
  }
}
function Enemy(){
  if(World.frameCount%200===0){
    
    //change monster to alien everywhere
    //change monterImage to alienImage
    enemy=createSprite(400,200,20,20);
    enemy.addAnimation("moving",alienImage);
    enemy.y=Math.round(random(100,300));
    enemy.velocityX=-8;
    enemy.setLifetime=50;
    
    enemyGroup.add(enemy);
    
     }
}