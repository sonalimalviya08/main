const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground, ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,50,50,option);
  World.add(world,ground);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER) 
  console.log(ground)
  rect(200,200,50,50) 
  rect(ground.position.x,ground.position.y,600,10)
  //drawSprites();
}