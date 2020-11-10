var car,wall,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,150);

  car = createSprite(50, 200, 50, 50);
  car.velocityX =speed
  wall = createSprite(1500,200,60,height/2);


  
}

function draw() {
  background(0);  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    var damage = 0.5*weight*speed*speed/22500
    if(damage>180){
      car.shapeColor = "red"
    }
    if(damage<180&&damage>100){
      car.shapeColor = "yellow"
    }
    if(damage<100){
      car.shapeColor = "green"
    }
  }
  drawSprites();
}