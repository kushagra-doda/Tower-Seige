const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1, shooter, ground1, slingshot;
var backgroundImg
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload(){
    getBackgroundImg();
}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

    block1 = new Block(1200,160,40,40);
	block2 = new Block(1160,160,40,40);
	block3 = new Block(1120,160,40,40);
	block4 = new Block(1240,160,40,40);
	block5 = new Block(1280,160,40,40);
	block6 = new Block(1260,120,40,40);
	block7 = new Block(1220,120,40,40);
	block8 = new Block(1180,120,40,40);
	block9 = new Block(1140,120,40,40);
    block10 = new Block(1240,80,40,40);
    block11 = new Block(1200,80,40,40);
    block12 = new Block(1160,80,40,40);
    block13 = new Block(1180,40,40,40);
    block14 = new Block(1220,40,40,40);
    block15 = new Block(1200,0,40,40);
    block16 = new Block(1000,360,40,40);
    block17 = new Block(1040,360,40,40);
    block18 = new Block(1080,360,40,40);
    block19 = new Block(960,360,40,40);
    block20 = new Block(920,360,40,40);
    block21 = new Block(1020,320,40,40);
    block22 = new Block(1060,320,40,40);
    block23 = new Block(980,320,40,40);
    block24 = new Block(940,320,40,40);
    block25 = new Block(1000,280,40,40);
    block26 = new Block(1040,280,40,40);
    block27 = new Block(960,280,40,40);
    block28 = new Block(1020,240,40,40);
    block29 = new Block(980,240,40,40);
    block30 = new Block(1000,200,40,40);
    block31 = new Block(1200,560,40,40);
    block32 = new Block(1160,560,40,40);
    block33 = new Block(1120,560,40,40);
    block34 = new Block(1240,560,40,40);
    block35 = new Block(1280,560,40,40);
    block36 = new Block(1260,520,40,40);
    block37 = new Block(1220,520,40,40);
    block38 = new Block(1180,520,40,40);
    block39 = new Block(1140,520,40,40);
    block40 = new Block(1240,480,40,40);
    block41 = new Block(1200,480,40,40);
    block42 = new Block(1160,480,40,40);
    block43 = new Block(1180,440,40,40);
    block44 = new Block(1220,440,40,40);
    block45 = new Block(1200,400,40,40);

    shooter = new Shooter(200,300,10);

	slingshot = new SlingShot(shooter.body,{x: 200 , y: 300});

    ground1 = new Ground(600,height,1900,55);
    ground2 = new Ground(1200,200,300,20);
    ground3 = new Ground(1000,400,300,20);
    ground4 = new Ground(1200,600,300,20);
    ground5 = new Ground(30,0,50,1000);
    ground6 = new Ground(width-0,0,20,1000);

	  Engine.run(engine);
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
    
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  
  shooter.display();

  slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    gameState = "launched"
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32 && shooter.body.speed < 1){
        shooter.trajectory= [];
        slingshot.attach(shooter.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if (hour>=06 && hour<=19) {
        bg = "bg.png";
    }
    else{
        bg = "bg2.png";
    }
    
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}