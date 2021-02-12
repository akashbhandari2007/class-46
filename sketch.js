var spaceship, missiles;
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12, enemy13, enemy14;

function setup() {

  createCanvas(1500,680);

  spaceship = createSprite(700, 600, 50, 50);
  enemygroup = createGroup();
}

function draw() {
  background(0);
  if(keyDown("space")){
    missiles = createSprite(700, 550, 10, 40);
    missiles.x = spaceship.x;
    missiles.y = spaceship.y;
    missiles.velocityY = -6;
  }
  enemyGroup.add();
  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x - 4; 
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x + 4; 
  }
  drawSprites();
}

function SpawnEnemy(){
  if (frameCount % 80 === 0 ){
    var enemy = createSprite(600, 50, 30, 30)
  }
}