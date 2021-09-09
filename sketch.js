var maze1,
  maze2,
  maze3,
  maze4,
  maze5,
  maze6,
  maze7,
  maze8,
  maze9,
  maze10,
  maze11,
  maze12,
  maze13,
  aze14,
  maze15,
  maze16,
  maze17,
  maze18,
  maze19,
  maze20,
  maze21,
  maze22,
  maze23,
  maze24;
var cheese = [];
var player;
var enemy1, enemy2, enemy3;
var enemy1_img, enemy2_img, enemy3_img,edges;
var gameState = 0;
var score = 0;
function preload() {
  player_img = loadImage("images/Jerry.png");
  enemy1_img = loadImage("images/Tom.png");
  enemy2_img = loadImage("images/Tom.png");
  enemy3_img = loadImage("images/Tom.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

   edges=createEdgeSprites();

  maze1 = createSprite(140, 10, 30, 400);
  maze2 = createSprite(250, 215, 250, 30);
  maze3 = createSprite(140, 560, 30, 350);
  maze4 = createSprite(250, 400, 250, 30);
  maze5 = createSprite(390, 10, 30, 440);
  maze6 = createSprite(390, 560, 30, 350);
  maze7 = createSprite(500, 135, 30, 50);
  maze8 = createSprite(500, 380, 30, 140);
  maze9 = createSprite(500, 610, 30, 100);
  maze10 = createSprite(610, 175, 250, 30);
  maze11 = createSprite(610, 295, 250, 30);
  maze12 = createSprite(610, 435, 250, 30);
  maze12 = createSprite(610, 565, 250, 30);
  maze13 = createSprite(610, 115, 250, 30);
  maze14 = createSprite(720, 135, 30, 50);
  maze15 = createSprite(720, 365, 30, 150);
  maze16 = createSprite(720, 665, 30, 175);
  maze17 = createSprite(870, 135, 30, 355);
  maze18 = createSprite(870, 665, 30, 165);
  maze18 = createSprite(870, 455, 30, 75);
  maze19 = createSprite(1065, 315, 420, 30);
  maze20 = createSprite(1005, 430, 300, 30);
  maze21 = createSprite(1005, 485, 300, 30);
  maze22 = createSprite(1065, 585, 420, 30);
  maze23 = createSprite(1140, 455, 30, 75);
  maze24 = createSprite(1260, 450, 30, 275);
  player = createSprite(20, 335, 20, 50);
  enemy1 = createSprite(440, 586, 20, 50);
  enemy1.visible = false;
  enemy2 = createSprite(1195, 445, 20, 50);
  enemy2.visible = false;
  enemy3 = createSprite(795, 35, 20, 50);
  enemy3.visible = false;
  //1

  for (var i = 110; i <= 415; i += 50) {
    cheese.push(new Cheese(i, 294));
  }
  //2
  for (var i = 13; i <= 645; i += 50) {
    cheese.push(new Cheese(445, i));
  }

  //3
  for (var i = 485; i <= 750; i += 50) {
    cheese.push(new Cheese(i, 55));
  }
  //6
  for (var i = 13; i <= 645; i += 50) {
    cheese.push(new Cheese(780, i));
  }

  //4
  for (var i = 485; i <= 750; i += 50) {
    cheese.push(new Cheese(i, 235));
  }

  //5
  for (var i = 485; i <= 750; i += 50) {
    cheese.push(new Cheese(i, 495));
  }

  //7
  for (var i = 850; i <= 1160; i += 50) {
    cheese.push(new Cheese(i, 365));
  }

  //9

  for (var i = 850; i <= 1160; i += 50) {
    cheese.push(new Cheese(i, 525));
  }

  for (var i = 360; i <= 520; i += 50) {
    cheese.push(new Cheese(1195, i));
  }
  player.addImage(player_img);
  enemy1.addImage(enemy1_img);
  enemy2.addImage(enemy1_img);
  enemy3.addImage(enemy1_img);
}

function draw() {
  background(0);
  text(mouseX + "," + mouseY, mouseX, mouseY);

  if(gameState==2){
    enemy1.velocityY=-10;
    enemy1.bounceOff(edges[2]);
  }





  if (keyDown("space") && gameState === 0) {
    gameState = 1;
  }
  if (keyDown("RIGHT_ARROW") && gameState !== 0) {
    player.x += 5;
  }
  if (keyDown("LEFT_ARROW") && gameState !== 0) {
    player.x -= 5;
  }
  if (keyDown("UP_ARROW") && gameState !== 0) {
    player.y -= 5;
  }
  if (keyDown("DOWN_ARROW") && gameState !== 0) {
    player.y += 5;
  }

  if (player.isTouching(maze1)) {
    player.x = 20;
    player.y = 335;
  }

  if (player.isTouching(maze2)) {
    player.x = 20;
    player.y = 335;
  }

  if (player.isTouching(maze3)) {
    player.x = 20;
    player.y = 335;
  }

  if (player.isTouching(maze4)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze5)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze6)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze7)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze8)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze9)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze10)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze1)) {
    player.x = 20;
    player.y = 335;
  }

  if (player.isTouching(maze11)) {
    player.x = 20;
    player.y = 335;
  }

  if (player.isTouching(maze12)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze13)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze14)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze15)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze16)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze17)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze18)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze19)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze20)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze21)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze22)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze23)) {
    player.x = 20;
    player.y = 335;
  }
  if (player.isTouching(maze24)) {
    player.x = 20;
    player.y = 335;
  }

  if (5 - World.seconds === 0 && gameState === 1) {
    enemy1.visible = true;
    enemy2.visible = true;
    enemy3.visible = true;
    gameState = 2;
  }

  console.log(cheese.length);
  for (var i = 0; i < cheese.length; i++) {
    console.log(cheese);
    if (player.isTouching(cheese[i].body) && gameState !== 0) {
      cheese[i].body.destroy();
      score = score + 5;
    }
  }

  textSize(15);
  text("1", 260, 286);

  textSize(15);
  text("2", 449, 320);

  textSize(15);
  text("3", 575, 50);

  textSize(15);
  text("4", 575, 233);

  textSize(15);
  text("5", 575, 490);

  textSize(15);
  text("6", 803, 286);

  textSize(15);
  text("7", 1020, 370);

  textSize(15);
  text("8", 1200, 455);

  textSize(15);
  text("9", 1020, 530);

  drawSprites();

  if (gameState === 0) {
    text("PRESS SPACE TO START", 504, 20);
  }

  text("SCORE:" + score, 1075, 40);
}
