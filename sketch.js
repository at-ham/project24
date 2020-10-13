
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
grround=new Ground(800,680,1600,40)
d=new Divisions(1250,645,200,20);
d2=new Divisions(1140,555,20,200);
d3=new Divisions(1360,555,20,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
grround.display();
ball.display();
d.display();
d2.display();
d3.display();
}

function keyPressed(){

if (keyCode===UP_ARROW){

	Body.applyForce(ball.body,ball.body.position,{x:60,y:-85});
}

}


