
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 350);

	

	
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	leftdustbin = new Dustbin(550,620,20,100);
	bottomdustbin = new Dustbin(610,660,100,20);
	rightdustbin = new Dustbin(670,620,20,100);
	paper = new Paper(100,600,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   paper.display();
   leftdustbin.display();
   bottomdustbin.display();
   rightdustbin.display();

  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:15 , y: -15});
	}
}

