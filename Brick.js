class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 20;
    this.c = `rgb(${floor(random(100, 255))}, ${floor(
      random(100, 255)
    )} , ${floor(random(100, 255))})`;
  }

  show() {
    // fill(`rgb(${this.r}, ${this.g}, ${this.b})`);
    push();
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
