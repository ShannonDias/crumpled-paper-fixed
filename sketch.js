
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1800,20)
    log1 = new Log(600,700,200,20)
    log2 = new Log(500,650,20,100)
	log3 = new Log(700,650,20,100)
	paper = new Paper(85,600,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  log1.display()
  log2.display()
  log3.display()
  paper.display()



  drawSprites();
 
}

function keyPressed() {

if (keyCode === UP_ARROW) {


	Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65})
}
}



