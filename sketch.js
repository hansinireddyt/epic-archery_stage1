const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase;
var player;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
 playerBase = new PlayerBase (300,random(450,height - 300), 50,100); 
 player = new Player (285, playerBase.body.position.y - 10,10,50);
 
 computerBase = new ComputerBase (width-300,random(450,height-300),180,150);
 computerPlayer = new ComputerPlayer (width-280,computerBase.body.position.y-153,10,50)
 }

 function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display ();
   player.display();
   computerBase.display ();
   computerPlayer.display ();
   
    
    

}
