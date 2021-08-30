class Paddle {
  constructor() {
    this.w = 100;
    this.h = 10;
    this.x = width / 2 - 50;
    this.y = height - this.h * 3;
    this.moving = false;
    this.speed = 8;
  }
  edges() {
    if (this.x <= 0) {
      this.x = 0;
    } else if (this.x >= width - this.w) {
      this.x = width - this.w;
    }
  }

  track(ball) {
    while (ball.x > this.x + this.w || ball.x < this.x) {
      if (ball.x > this.x) {
        this.move("right");
      } else {
        this.move("left");
      }
    }
  }

  move(dir) {
    if (dir === "left") {
      paddle.x -= paddle.speed;
    } else if (dir === "right") {
      paddle.x += paddle.speed;
    }
  }

  show() {
    push();
    fill("rgb(255, 0, 0)");
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
