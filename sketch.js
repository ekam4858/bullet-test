var thic,wall;
var bullet,speed, weight;
function setup() {
  createCanvas(1600, 400);
  thic=random(22,83)
speed=random(223,321)
weight=random(30,52)
bullet=createSprite(50, 200, 50,50);  
bullet.velocityX = speed;
bullet.shapeColor=color(255);
  wall=createSprite(1200,200, thic, height/2)
  wall.shapeColor="white";
}
function draw() {
 background(0);
  if (hascollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thic*thic*thic)

    if (damage>10){
      wall.shapeColor=color(250,0,0)
    }
    if (damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
 drawSprites();
}
function hascollided(lb,lw){
  bulletRightEdge=lb.x+lb.width;
  wallLeftEdge=lw.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false
}
