
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	constructor(body1,body2,offsetX,offsetY)
{
this.offsetX=offsetX
this.offsetY=offsetY
var options={
	bodyA:Body1,
	bodyB:body2
	pointB:{x:this.offsetX,y:this.offsetY}

}
   //console.log(options)
   this.rope=Constraint.create(options)
world.add(world,this.rope)
}


	engine = Engine.create();
	world = engine.world;

	display{}
	{
		var pointA=this.rope.pointA.postion;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.x+this.offsetX

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



