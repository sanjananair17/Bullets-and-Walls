var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0); 
  
  if (collide (bullet, wall)) {
    bullet.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if (deformation < 10) {
      wall.shapeColor = color (0, 255, 0);
    }

    if (deformation > 10) {
      wall.shapeColor = color (255, 0, 0);
    }
  }

  drawSprites();
}

function collide (object1, object2) {
  bulletRightEdge = object1.x + object1.width;
  wallLeftEdge = object2.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
}