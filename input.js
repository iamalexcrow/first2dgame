export default class InputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === " " ||
          e.key === "a" ||
          e.key === "s") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
        //EXTRA KEYS
      } else {
        //DEBUG
        if (e.key === "d") {
          this.game.debug = !this.game.debug;
        }
        //FAST MODE
        if (e.key === "Shift") {
          this.game.player.fast = true;
        }
      }
      // REMOVE LEFT WHEN RIGHT IS PRESSED, REMOVE RIGHT WHEN LEFT IS PRESSED
      if (e.key === "ArrowLeft") {
        if (this.keys.includes("ArrowRight")) {
          this.keys.splice(this.keys.indexOf("ArrowRight"), 1);
        }
        this.game.player.turnedLeft = true;
      }
      if (e.key === "ArrowRight") {
        if (this.keys.includes("ArrowLeft")) {
          this.keys.splice(this.keys.indexOf("ArrowLeft"), 1);
        }
        this.game.player.turnedLeft = false;
      }
      // console.log(this.keys);
    });

    window.addEventListener("keyup", (e) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "a" ||
        e.key === "s"
      ) {
        if (this.keys.indexOf(e.key) !== -1) {
          this.keys.splice(this.keys.indexOf(e.key), 1);
        }
      } else {
        if (e.key === "Shift") {
          this.game.player.fast = false;
        }
      }
    });
  }
}
