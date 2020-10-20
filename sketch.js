const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Waste,dustbin,ground;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	Waste = new Paper(200,450,20)
	ground = new Ground(800,700,1600,20)
	dustbin = new Dustbin(800,450,20,20)

	Engine.run(engine);
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine)
  Waste.display();
  ground.display();
  dustbin.display();	

 drawSprites();
}
  function keyPressed() {
	 if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(Waste.body,Waste.body.position,{x:70,y:-70}); 
	 }

}