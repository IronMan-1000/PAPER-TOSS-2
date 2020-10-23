
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin, backImage;

function preload(){
  backImage = loadImage("back.jpg");
}

function setup() {
	createCanvas(1540, 600);


	engine = Engine.create();
	world = engine.world;

   paper= new Paper(100,200,70)
   ground = new Ground(770,600)
   dustbin = new Dustbin(1100,540)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(backImage);
  paper.display()
  ground.display()
  dustbin.display()
  
}

function keyPressed(){
  if (keyCode ===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}


