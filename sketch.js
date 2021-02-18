
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin, ground; 

function preload(){
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin = new Dustbin(1200, 650); 
	paper = new Paper(200, 450, 70);
	ground = new Ground(width/2, 660, width, 30);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("ivory");

	Engine.update(engine); 

	paper.display();

	dustbin.display(); 
	ground.display();

	drawSprites();
 
}

function keyPressed(){ 

	if (keyCode === UP_ARROW){ 
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130, y:-145});
	}
}



