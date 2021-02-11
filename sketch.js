
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball;
var ground;

function setup() {
  
  createCanvas(800,400);
  
  
  engine = Engine.create();
  world = engine.world;
  
  var groundOptions = {

    isStatic: true
  }

   ground = Bodies.rectangle(400,350,800,50,groundOptions);
  World.add(world,ground)

  var ballOptions = {

    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20, ballOptions);
  World.add(world,ball);

}

function draw() {
  
  background(0);  
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  
  ellipseMode(RADIUS); 
  ellipse(ball.position.x, ball.position.y, 20, 20);
}