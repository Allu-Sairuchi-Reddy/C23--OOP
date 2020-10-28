const Eng=Matter.Engine;
const wo=Matter.World;
const bodies=Matter.Bodies;
var box1,ground,box2;
var phy,Myworld;

function setup() {
  createCanvas(800,400);
  phy=Eng.create();
  Myworld=phy.world;
  ground= new Ground(400,380,800,5);
  box1= new Box(200,200,50,50);
  box2= new Box(240,100,50,100);
}

function draw() {
  background("red");  
  Eng.update(phy);
  ground.display();
  box2.display();
  box1.display();
}