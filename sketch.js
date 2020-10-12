
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,bal1

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bin = new dust(1200,650);
 bal1 = new ball(200,450,40);
 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bal1.display();
  bin.display();
  //keypressed();
drawsprites;
 
}

function keypressed(){
  if(keycode === UP_ARROW){
    MAtter.Body.applyForce(bal1.body,bal1.body.position,{x:85,y:-85})
  }
}


