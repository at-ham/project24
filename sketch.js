
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dust,ball,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new paper(200,450,40);
dust=new dustbin(1200,650);
var render = Render.create({
	 element: document.body,
	  engine: engine,
	   options: { 
		   width: 1200,
			height: 700, 
			wireframes: false }
		 });

	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
dust.display();
ball.display();



}

function keyPressed(){

if (keyCode===UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body,ball.body.position,{x:85,y:-85});
}

}


