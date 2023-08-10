import {
  CrawlingLeft,
  CrawlingRight,
  FallingLeft,
  FallingRight,
  JabLeft,
  JabRight,
  JumpingLeft,
  JumpingRight,
  LandingLeft,
  LandingRight,
  PunchLeft,
  PunchRight,
  RollingLeft,
  RollingRight,
  RunningLeft,
  RunningRight,
  SquatingLeft,
  SquatingRight,
  StandingLeft,
  StandingRight,
  WalkingLeft,
  WalkingRight,
  WallLandLeft,
  WallLandRight,
  WallSlideLeft,
  WallSlideRight,
} from "./playerStates.js";

export default class Player {
  constructor(game) {
    this.game = game;
    //COORDINATES
    this.width = 48;
    this.height = 48;
    this.x = 0;
    this.y = this.game.height - this.height - this.game.groundMargin;
    //FRAMES
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 9;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.images = {
      player_idle: document.getElementById("player_idle"),
      player_walk: document.getElementById("player_walk"),
      player_air_spin: document.getElementById("player_air_spin"),
      player_jump: document.getElementById("player_jump"),
      player_run: document.getElementById("player_run"),
      player_land: document.getElementById("player_land"),
      player_squat: document.getElementById("player_squat"),
      player_crawl: document.getElementById("player_crawl"),
      player_roll: document.getElementById("player_roll"),
      player_wall_land: document.getElementById("player_wall_land"),
      player_wall_slide: document.getElementById("player_wall_slide"),
      player_jab: document.getElementById("player_jab"),
      player_punch: document.getElementById("player_punch"),
    };
    this.currentImage = this.images.player_idle;
    //MOVING
    this.speed = 0;
    this.maxSpeed = 3;
    this.vy = 0;
    this.weight = 1;
    this.turnedLeft = false;
    this.fast = false;
    this.canDoubleJump = true;
    //STATE
    this.states = [
      new StandingLeft(this.game),
      new StandingRight(this.game),

      new WalkingLeft(this.game),
      new WalkingRight(this.game),

      new JumpingLeft(this.game),
      new JumpingRight(this.game),

      new FallingLeft(this.game),
      new FallingRight(this.game),

      new RunningLeft(this.game),
      new RunningRight(this.game),

      new LandingLeft(this.game),
      new LandingRight(this.game),

      new SquatingLeft(this.game),
      new SquatingRight(this.game),

      new CrawlingLeft(this.game),
      new CrawlingRight(this.game),

      new RollingLeft(this.game),
      new RollingRight(this.game),

      new WallLandLeft(this.game),
      new WallLandRight(this.game),

      new WallSlideLeft(this.game),
      new WallSlideRight(this.game),

      new JabLeft(this.game),
      new JabRight(this.game),

      new PunchLeft(this.game),
      new PunchRight(this.game),
    ];
    this.currentState = this.states[1];
  }
  update(input, deltaTime) {
    this.currentState.handleInput(input);
    this.x += this.speed;
    //horizontal movement
    if (
      input.includes("ArrowRight") &&
      (this.currentState !== this.states[11] ||
        this.currentState !== this.states[10])
    ) {
      this.speed = this.maxSpeed;
    } else if (
      input.includes("ArrowLeft") &&
      (this.currentState !== this.states[10] ||
        this.currentState !== this.states[11])
    ) {
      this.speed = -this.maxSpeed;
    } else if (
      this.currentState === this.states[16] ||
      this.currentState === this.states[17]
    ) {
      if (this.turnedLeft) {
        this.x -= 5;
      } else {
        this.x += 5;
      }
    } else {
      this.speed = 0;
    }

    //horizontal movement
    if (this.x < -this.game.wallMargin) this.x = -this.game.wallMargin;
    if (this.x > this.game.width - this.width + this.game.wallMargin) {
      this.x = this.game.width - this.width + this.game.wallMargin;
    }

    //vertical movement
    if (
      this.currentState !== this.states[18] &&
      this.currentState !== this.states[19]
    ) {
      // console.log(this.currentState);
      this.y += this.vy;
      if (!this.onGround()) {
        this.vy += this.weight;
      } else {
        this.vy = 0;
      }
    }
    // vertical boundaries
    if (this.y > this.game.height - this.height - this.game.groundMargin) {
      this.y = this.game.height - this.height - this.game.groundMargin;
    }

    //spriteAnimation
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    if (
      this.currentState === this.states[18] ||
      this.currentState === this.states[19]
    ) {
      input.splice(input.indexOf("ArrowUp"), 1);
    }
  }

  draw(context) {
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height);
    }

    if (this.states.indexOf(this.currentState) % 2 === 0) {
      context.save(); // Save the current state of the context
      context.scale(-1, 1); // Apply a horizontal scale
      context.drawImage(
        this.currentImage,
        this.width * this.frameX,
        this.height * this.frameY,
        this.width,
        this.height,
        -this.x - this.width, // Invert X position to maintain correct position after flip
        this.y,
        this.width,
        this.height
      );
      context.restore(); // Restore the context to its original state
    } else {
      context.drawImage(
        this.currentImage,
        this.width * this.frameX,
        this.height * this.frameY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }
  onGround() {
    return this.y >= this.game.height - this.height - this.game.groundMargin;
  }
  setState(state, speed) {
    this.currentState = this.states[state];
    if (speed) {
      this.maxSpeed = speed * 3;
    }
    // this.game.speed = speed * this.maxSpeed; // to control the moving screen
    this.currentState.enter();
  }
}
