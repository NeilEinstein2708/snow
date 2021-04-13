const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var snow = [];


var engine, world;

function setup() {
  createCanvas(660, 800);
  engine = Engine.create();
  world = engine.world;
 

  



  


  //create particle objects
  if(frameCount%90===0){
    snow.push(new Snow(random(width/2-10, width/2 + 10), 10,10) );
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
 
  if(frameCount%90===0){
    snow.push(new Snow(random(width/2-10, width/2 + 10), 10,10) );
  }
    


  //display the plinkos 



  for(var j = 0; j < snow.length; j++){
    snow[j].display();
  }


drawSprites();
  //display the paricles 
}
