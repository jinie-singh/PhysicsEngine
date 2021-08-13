const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;

var ball;
var ball_options;
var ground,ground_options;

function setup() {
  createCanvas(800,400);
  myengine = Engine.create();
  myworld = myengine.world;
  ball_options = {
    restitution : 0.95,
    frictionAir:0.01
  }
  ball = Bodies.circle(100,10,20,ball_options)
  World.add(myworld,ball);

  ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myworld,ground);

}

function draw() {
  background(0);  

  Engine.update(myengine)

  ellipseMode(RADIUS);
  ellipse(ball.position.x , ball.position.y , 20 )

  rectMode(CENTER)
  rect(ground.position.x , ground.position.y,400,20);

}