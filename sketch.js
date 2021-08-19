const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var bgImg;
var snow=[];
var snow1,snow2;

function preload() {
bgImg=loadImage("snow2.jpg");

}

function setup() {
engine=Engine.create();
world=engine.world;
  
createCanvas(1200,600);

//After every 50 frames create a snow object
  
  
  
  
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
  
  // display snow drops on the screen
  
  
  
  
  drawSprites();
}
