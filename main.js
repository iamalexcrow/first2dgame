import InputHandler from "./input.js";
import Player from "./player.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Game {
    constructor(width, height) {
      this.debug = true;
      this.width = width;
      this.height = height;
      this.groundMargin = 0;
      this.wallMargin = 15;
      //to implement
      this.difficulty = "easy";
      this.score = 0;
      this.time = 0;
      this.gameOver = false;
      this.player = new Player(this);
      this.input = new InputHandler(this);
    }

    update(deltaTime) {
      this.time += deltaTime;
      this.player.update(this.input.keys, deltaTime);
    }

    draw(context) {
      this.player.draw(context);
    }

    addEnemy() {}
  }

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;

  function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.draw(ctx);

    if (!game.gameOver) {
      requestAnimationFrame(animate);
    }
  }
  animate(0);
});
