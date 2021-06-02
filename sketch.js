const  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisionHeight = 300;
var divisions = [];
var engine;
var world;
var ground;
var score = 0;
var particle;
var gameState = "PLAY";
var PLAY;
var turn = 0;
var END;
var count;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

   

    

    
}
 


function draw() {
  background("black");
  textSize(30)
  text("Score : "+score,20,30);
  Engine.update(engine);

  if (gameState === END){
    background("black");
    fill("red");
    textSize(50);
    text("Game Over",200,400);
    count = count+1
  }

  if(particle != null){
   particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x<300){
        score = score+500;
        particle = null;
        if(count>=5) gameState = "END";
      }

      else if(particle.body.position.x<900 && particle.body.position.x>601){
        score = score + 200;
        particle = null;
        if(count>=5) gameState = "END"
      }
    }
  }


  textSize(35);
  text("500", 5,550);
  text("500", 80,550);
  text("500",160,550);
  text("500",240,550);
  //textSize(15);
  text("0",320,550);
  textSize(35);
  text("0",400,550);
  //textSize(15);
  text("0",480,550);
  textSize(35);
  text("200",560,550);
  text("200",640,550);
  text("200",725,550);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //ps.push(new p(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display();

  
}

function mousePressed(){
  if(gameState !== "END"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}