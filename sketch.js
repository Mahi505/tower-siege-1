const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
    polygon_img=loadImage("polygon.png")
}
function setup(){
    createCanvas(900,400)
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
    //ground = new Ground();
    //stand1 = new Stand(390,300,250,10)
    //stand2 = new Stand(700,200,200,10)

stand1=new Ground(400,350)
stand2=new Ground(700,210)



    //level one
    block1 = new Block(300,275,30,40);
    console.log(block1);
    block2 = new Block(330,275,30,40)
    block3 = new Block(360,275,30,40)
    block4 = new Block(390,275,30,40)
    block5 = new Block(420,275,30,40)
    block6 = new Block(450,275,30,40)  
    block7 = new Block(480,275,30,40)
    //level two
    block8 = new Block(330,235,30,40)
     block9 = new  Block(360,235,30,40)
     block10 =new Block(390,235,30,40)
    block11 = new Block(420,235,30,40)
    block12 =new Block(450,235,30,40)
   

}
function draw(){
    Engine.update(engine)
    background("red")
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    stand1.display()
    stand2.display()


}
