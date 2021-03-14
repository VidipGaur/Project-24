
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Paper(100,100) ;
    ground= new Ground(400,680,850,20);
  log1 = new Basket(550,650,115,15);
  log2 = new Basket(500,580,15,115);
  log3 = new Basket(600,580,15,115);


  
}


function draw() {
	
	background(255);
  Engine.update(engine)
  rectMode(CENTER);
  if(keyDown(DOWN_ARROW)){
	  ball.x = 550
	  ball.y = 600
  }
 /*rect(log3.position.x,log3.position.y,log3.width,log3.height);
 rect(log2.position.x,log2.position.y,log2.width,log2.height);
 rect(log1.position.x,log1.position.y,log1.width,log1.height);*/
  ball.display();
  log1.display();
  log2.display();
  log3.display();
ground.display();
  
 
}



