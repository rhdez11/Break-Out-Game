class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height - 100;
    this.r = 15;
    this.speed = 3;
    this.speedY = -4;
    this.score = 0;
    this.alive = true;
  }

  destroy(brick) {
    if (
      collideRectCircle(
        brick.x,
        brick.y,
        brick.w,
        brick.h,
        this.x,
        this.y,
        this.r
      )
    ) {
      this.speedY *= -1;
      return true;
    } else {
      return false;
    }
  }

  bounce(paddle) {
    if (
      collideRectCircle(
        paddle.x,
        paddle.y,
        paddle.w,
        paddle.h,
        this.x,
        this.y,
        this.r
      )
    ) {
      this.speed = map(this.x, paddle.x, paddle.x + paddle.w, -4, 4);
      console.log(this.speed);

      if (
        (this.speed <= 0 && this.x > paddle.x + paddle.w / 2) ||
        (this.speed >= 0 && this.x < paddle.x + paddle.w / 2)
      ) {
        this.speed *= -1;
      }

      this.speedY *= -1;
      return true;
    } else {
      return false;
    }
  }

  check(bricks) {
    for (let i = 0; i < bricks.length; i++) {
      bricks[i].show();
      if (ball.destroy(bricks[i])) {
        bricks.splice(i, 1);
        i--;
        ball.score++;
      }
    }
  }

  edges() {
    if (this.x > width || this.x < 0) {
      this.speed *= -1;
    }
    // if the ball hits the top or the bottom, change the direction of the ball
    if (this.y < 0) {
      this.speedY *= -1;
    }
  }

  show() {
    push();
    fill(`rgb(255,0,255)`);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
    pop();
    this.x += this.speed;
    this.y += this.speedY;
  }
}
