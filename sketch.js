const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  object1 = new particle(200,100);
  string01 = new String(object1.body,{x:200,y:200});
  platform = new Ground(500,230,290,10);
  box1 = new Box(480,175);
  box2 = new Box(460,175);
  box3 = new Box(440,175);
  box4 = new Box(420,175);
  box5 = new Box(400,175);
  box6 = new Box(500,175);
  box7 = new Box(520,175);
  box8 = new Box(540,175);
  box9 = new Box(560,175);
  box10 = new Box(580,175);
  box11 = new Box(420,145);
  box12 = new Box(440,145);
  box13 = new Box(460,145);
  box14 = new Box(480,145);
  box15 = new Box(500,145);
  box16 = new Box(520,145);
  box17 = new Box(540,145);
  box18 = new Box(560,145);
  box19 = new Box(440,115);
  box20 = new Box(460,115);
  box21 = new Box(480,115);
  box22 = new Box(500,115);
  box23 = new Box(520,115);
  box24 = new Box(540,75);
  box25 = new Box(460,75);
  box26 = new Box(480,75);
  box27 = new Box(500,75);
  box28 = new Box(520,75);
  box29 = new Box(480,35)
  box30 = new Box(500,35);

}

function draw() {
  background(0);  
  Engine.update(engine);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("Score : " + score,750,50);
  
  object1.display();
  string01.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

}

function mouseDragged(){
  Matter.Body.setPosition(object1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  string01.fly();
}

score() 
  if(this.visiblity<0 && this.visiblity>-105) {
    score ++
  }

  function keyPressed() {
    if (keyCode === 32) {
      slingShot.attach(this.ball);
    }
  }


