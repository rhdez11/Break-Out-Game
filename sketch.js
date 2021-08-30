var bricks = [];
var paddle;
var ball;
var score;

function setup() {
  createCanvas(700, 700);

  frameRate(200);
  paddle = new Paddle();
  ball = new Ball();
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 14; col++) {
      bricks.push(new Brick(col * 50, row * 20 + 100));
    }
  }
}

function draw() {
  background(0);
  if (bricks.length == 0) {
    push();
    fill("rgb(0,255,0)");
    textSize(60);
    textAlign(CENTER);
    text("You Win", width / 2, height / 2);
    pop();
    noLoop();
  }

  ball.check(bricks);

  ball.edges();
  ball.bounce(paddle);
  ball.show();

  moving();
  // paddle.track(ball);
  paddle.edges();
  paddle.show();

  if (ball.y > height) {
    ball.alive = false;
    paddle = new Paddle();
    ball = new Ball();
    bricks = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 14; col++) {
        bricks.push(new Brick(col * 50, row * 20 + 100));
      }
    }
  }

  textSize(45);
  fill(255);
  text(`Score: ${ball.score}`, 40, 40);
}

function moving() {
  if (keyIsDown(LEFT_ARROW)) {
    paddle.x -= paddle.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    paddle.x += paddle.speed;
  }
}
