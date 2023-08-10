const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
  WALKING_LEFT: 2,
  WALKING_RIGHT: 3,
  JUMPING_LEFT: 4,
  JUMPING_RIGHT: 5,
  FALLING_LEFT: 6,
  FALLING_RIGHT: 7,
  RUNNING_LEFT: 8,
  RUNNING_RIGHT: 9,
  LANDING_LEFT: 10,
  LANDING_RIGHT: 11,
  SQUATING_LEFT: 12,
  SQUATING_RIGHT: 13,
  CRAWLING_LEFT: 14,
  CRAWLING_RIGHT: 15,
  ROLLING_LEFT: 16,
  ROLLING_RIGHT: 17,
  WALL_LAND_LEFT: 18,
  WALL_LAND_RIGHT: 19,
  WALL_SLIDE_LEFT: 20,
  WALL_SLIDE_RIGHT: 21,
  JAB_LEFT: 22,
  JAB_RIGHT: 23,
  PUNCH_LEFT: 24,
  PUNCH_RIGHT: 25,
};

class State {
  constructor(state, game) {
    this.game = game;
    this.state = state;
  }
}

export class StandingLeft extends State {
  constructor(game) {
    super("STANDING_LEFT", game);
  }
  enter() {
    console.log("enter standing left");
    this.game.player.canDoubleJump = true;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 9;
    this.game.player.weight = 1;
    this.game.wallMargin = 15;
    this.game.player.currentImage = this.game.player.images.player_idle;
  }
  handleInput(input) {
    if (this.game.player.fast) {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.RUNNING_LEFT, 2);
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.RUNNING_RIGHT, 2);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 1);
      }
    } else {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.WALKING_LEFT, 1);
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.WALKING_RIGHT, 1);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 1);
      } else if (input.includes("ArrowDown")) {
        this.game.player.setState(states.SQUATING_LEFT, 1);
      } else if (input.includes(" ")) {
        this.game.player.setState(states.ROLLING_LEFT, 1);
      } else if (input.includes("a")) {
        this.game.player.setState(states.JAB_LEFT, 1);
      } else if (input.includes("s")) {
        this.game.player.setState(states.PUNCH_LEFT, 1);
      }
    }
  }
}

export class StandingRight extends State {
  constructor(game) {
    super("STANDING_RIGHT", game);
  }
  enter() {
    console.log("enter standing right");
    this.game.player.canDoubleJump = true;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 9;
    this.game.player.weight = 1;
    this.game.wallMargin = 15;
    this.game.player.currentImage = this.game.player.images.player_idle;
  }
  handleInput(input) {
    if (this.game.player.fast) {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.RUNNING_LEFT, 2);
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.RUNNING_RIGHT, 2);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_RIGHT, 1);
      }
    } else {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.WALKING_LEFT, 1);
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.WALKING_RIGHT, 1);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_RIGHT, 1);
      } else if (input.includes("ArrowDown")) {
        this.game.player.setState(states.SQUATING_RIGHT, 1);
      } else if (input.includes(" ")) {
        this.game.player.setState(states.ROLLING_RIGHT, 1);
      } else if (input.includes("a")) {
        this.game.player.setState(states.JAB_RIGHT, 1);
      } else if (input.includes("s")) {
        this.game.player.setState(states.PUNCH_RIGHT, 1);
      }
    }
  }
}

export class WalkingLeft extends State {
  constructor(game) {
    super("WALKING_LEFT", game);
  }
  enter() {
    console.log("enter walking left");
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 7;
    this.game.player.currentImage = this.game.player.images.player_walk;
  }
  handleInput(input) {
    if (this.game.player.fast) {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.RUNNING_LEFT, 2);
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.RUNNING_RIGHT, 2);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 2);
      } else {
        this.game.player.setState(states.STANDING_LEFT, 1);
      }
    } else {
      if (input.includes("ArrowDown")) {
        if (input.includes("ArrowRight")) {
          this.game.player.setState(states.CRAWLING_RIGHT, 0.5);
        } else if (input.includes("ArrowLeft")) {
          this.game.player.setState(states.CRAWLING_LEFT, 0.5);
        }
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.WALKING_RIGHT, 1);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 1);
      } else if (input.includes(" ")) {
        this.game.player.setState(states.ROLLING_LEFT, 2);
      } else if (input.length < 1) {
        this.game.player.setState(states.STANDING_LEFT, 1);
      }
    }
  }
}

export class WalkingRight extends State {
  constructor(game) {
    super("WALKING_RIGHT", game);
  }
  enter() {
    console.log("enter walking right");
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 7;
    this.game.player.currentImage = this.game.player.images.player_walk;
  }
  handleInput(input) {
    if (this.game.player.fast) {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.RUNNING_LEFT, 2);
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.RUNNING_RIGHT, 2);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 2);
      } else {
        this.game.player.setState(states.STANDING_LEFT, 1);
      }
    } else {
      if (input.includes("ArrowDown")) {
        if (input.includes("ArrowRight")) {
          this.game.player.setState(states.CRAWLING_RIGHT, 0.5);
        } else if (input.includes("ArrowLeft")) {
          this.game.player.setState(states.CRAWLING_LEFT, 0.5);
        }
      } else if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.WALKING_LEFT, 1);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_RIGHT, 1);
      } else if (input.includes(" ")) {
        this.game.player.setState(states.ROLLING_RIGHT, 2);
      } else if (input.length < 1) {
        this.game.player.setState(states.STANDING_RIGHT, 1);
      }
    }
  }
}

export class JumpingLeft extends State {
  constructor(game) {
    super("JUMPING_LEFT", game);
  }
  enter() {
    console.log("enter jumping left");
    if (this.game.player.onGround()) {
      this.game.player.vy -= 28;
    }
    this.game.player.currentImage = this.game.player.images.player_air_spin;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 5;
  }
  handleInput(input) {
    //WALL LANDING
    if (
      !this.game.player.onGround() &&
      this.game.player.x >= this.game.width - this.game.player.width
    ) {
      this.game.player.setState(states.WALL_LAND_RIGHT, 1);
    } else if (
      !this.game.player.onGround() &&
      this.game.player.x <= -this.game.wallMargin
    ) {
      this.game.player.setState(states.WALL_LAND_LEFT, 1);
    }
    // FALLING
    if (this.game.player.vy > this.game.player.weight) {
      this.game.player.setState(states.FALLING_LEFT);
    }
  }
}

export class JumpingRight extends State {
  constructor(game) {
    super("JUMPING_RIGHT", game);
  }
  enter() {
    console.log("enter jumping right");
    if (this.game.player.onGround()) {
      this.game.player.vy -= 28;
    }
    this.game.player.currentImage = this.game.player.images.player_air_spin;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 5;
  }
  handleInput(input) {
    // WALL LANDING
    if (
      !this.game.player.onGround() &&
      this.game.player.x >= this.game.width - this.game.player.width
    ) {
      this.game.player.setState(states.WALL_LAND_RIGHT, 1);
    } else if (
      !this.game.player.onGround() &&
      this.game.player.x <= -this.game.wallMargin
    ) {
      this.game.player.setState(states.WALL_LAND_LEFT, 1);
    }
    // FALLING
    if (this.game.player.vy > this.game.player.weight) {
      this.game.player.setState(states.FALLING_RIGHT);
    }
  }
}

export class FallingLeft extends State {
  constructor(game) {
    super("FALLING_LEFT", game);
  }
  enter() {
    console.log("enter falling left");
    if (this.game.player.onGround()) {
      this.game.player.vy -= 28;
    }
    this.game.player.currentImage = this.game.player.images.player_jump;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 2;
  }
  handleInput(input) {
    console.log("FALLING DOWN", this.game.player.weight, this.game.player.vy);
    if (
      !this.game.player.onGround() &&
      this.game.player.x >= this.game.width - this.game.player.width
    ) {
      console.log(
        "ds",
        this.game.player.x,
        this.game.width - this.game.player.width
      );
      this.game.player.setState(states.WALL_LAND_RIGHT, 1);
    } else if (
      !this.game.player.onGround() &&
      this.game.player.x <= -this.game.wallMargin
    ) {
      this.game.player.setState(states.WALL_LAND_LEFT, 1);
    }
    if (this.game.player.onGround()) {
      if (this.game.player.turnedLeft) {
        this.game.player.setState(states.LANDING_LEFT, 0);
      } else {
        this.game.player.setState(states.LANDING_RIGHT, 0);
      }
    }
  }
}

export class FallingRight extends State {
  constructor(game) {
    super("FALLING_RIGHT", game);
  }
  enter() {
    console.log("enter falling right");
    this.game.player.currentImage = this.game.player.images.player_jump;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 2;
  }
  handleInput(input) {
    if (
      !this.game.player.onGround() &&
      this.game.player.x >= this.game.width - this.game.player.width
    ) {
      this.game.player.setState(states.WALL_LAND_RIGHT, 1);
    } else if (
      !this.game.player.onGround() &&
      this.game.player.x <= -this.game.wallMargin
    ) {
      this.game.player.setState(states.WALL_LAND_LEFT, 1);
    }
    if (this.game.player.onGround()) {
      if (this.game.player.turnedLeft) {
        this.game.player.setState(states.LANDING_LEFT, 0);
      } else {
        this.game.player.setState(states.LANDING_RIGHT, 0);
      }
    }
  }
}

export class RunningLeft extends State {
  constructor(game) {
    super("RUNNING_LEFT", game);
  }
  enter() {
    console.log("enter running left");
    this.game.player.currentImage = this.game.player.images.player_run;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 7;
  }
  handleInput(input) {
    if (this.game.player.fast) {
      if (input.includes("ArrowRight")) {
        this.game.player.setState(states.RUNNING_RIGHT, 2);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 2);
      } else if (input.includes(" ")) {
        this.game.player.setState(states.ROLLING_LEFT, 3);
      } else if (
        !input.includes("ArrowLeft") &&
        !input.includes("ArrowRight")
      ) {
        if (this.game.player.turnedLeft) {
          this.game.player.setState(states.STANDING_LEFT, 1);
        } else {
          this.game.player.setState(states.STANDING_RIGHT, 1);
        }
      }
    } else {
      if (input.includes("ArrowRight")) {
        this.game.player.setState(states.WALKING_RIGHT, 1);
      } else if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.WALKING_LEFT, 1);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 1);
      } else if (input.includes("ArrowDown")) {
        this.game.player.setState(states.ROLLING_LEFT, 1);
      }
    }
  }
}

export class RunningRight extends State {
  constructor(game) {
    super("RUNNING_RIGHT", game);
  }
  enter() {
    console.log("enter running right");
    this.game.player.currentImage = this.game.player.images.player_run;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 7;
  }
  handleInput(input) {
    if (this.game.player.fast) {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.RUNNING_LEFT, 2);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 2);
      } else if (input.includes(" ")) {
        this.game.player.setState(states.ROLLING_LEFT, 3);
      } else if (
        !input.includes("ArrowLeft") &&
        !input.includes("ArrowRight")
      ) {
        if (this.game.player.turnedLeft) {
          this.game.player.setState(states.STANDING_LEFT, 1);
        } else {
          this.game.player.setState(states.STANDING_RIGHT, 1);
        }
      }
    } else {
      if (input.includes("ArrowRight")) {
        this.game.player.setState(states.WALKING_RIGHT, 1);
      } else if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.WALKING_LEFT, 1);
      } else if (input.includes("ArrowUp")) {
        this.game.player.setState(states.JUMPING_LEFT, 1);
      } else if (input.includes("ArrowDown")) {
        this.game.player.setState(states.ROLLING_LEFT, 1);
      }
    }
  }
}

export class LandingLeft extends State {
  constructor(game) {
    super("LANDING_LEFT", game);
  }
  enter() {
    console.log("enter landing left");
    this.game.player.currentImage = this.game.player.images.player_land;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 8;
    this.game.player.maxSpeed = 0;
  }
  handleInput(input) {
    if (this.game.player.frameX >= 3 && this.game.player.onGround()) {
      if (input.includes("ArrowDown")) {
        if (this.game.player.turnedLeft) {
          this.game.player.setState(states.SQUATING_LEFT, 1);
        } else {
          this.game.player.setState(states.SQUATING_RIGHT, 1);
        }
      } else {
        if (this.game.player.turnedLeft) {
          this.game.player.setState(states.STANDING_LEFT, 1);
        } else {
          this.game.player.setState(states.STANDING_RIGHT, 1);
        }
      }
    }
  }
}

export class LandingRight extends State {
  constructor(game) {
    super("LANDING_RIGHT", game);
  }
  enter() {
    console.log("enter landing right");
    this.game.player.currentImage = this.game.player.images.player_land;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 8;
    this.game.player.maxSpeed = 0;
  }
  handleInput(input) {
    if (this.game.player.frameX >= 3 && this.game.player.onGround()) {
      if (input.includes("ArrowDown")) {
        if (this.game.player.turnedLeft) {
          this.game.player.setState(states.SQUATING_LEFT, 1);
        } else {
          this.game.player.setState(states.SQUATING_RIGHT, 1);
        }
      } else {
        if (this.game.player.turnedLeft) {
          this.game.player.setState(states.STANDING_LEFT, 1);
        } else {
          this.game.player.setState(states.STANDING_RIGHT, 1);
        }
      }
    }
  }
}

export class SquatingLeft extends State {
  constructor(game) {
    super("SQUATING_LEFT", game);
  }
  enter() {
    console.log("enter squat left");
    this.game.player.currentImage = this.game.player.images.player_squat;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 9;
  }
  handleInput(input) {
    if (this.game.player.fast) {
    } else {
      if (input.includes("ArrowDown")) {
        if (input.includes("ArrowRight")) {
          this.game.player.setState(states.CRAWLING_RIGHT, 0.5);
        } else if (input.includes("ArrowLeft")) {
          this.game.player.setState(states.CRAWLING_LEFT, 0.5);
        } else if (input.includes(" ")) {
          this.game.player.setState(states.ROLLING_LEFT, 1);
        }
      } else {
        if (this.game.player.turnedLeft) {
          this.game.player.setState(states.STANDING_LEFT, 1);
        } else {
          this.game.player.setState(states.STANDING_RIGHT, 1);
        }
      }
    }
  }
}

export class SquatingRight extends State {
  constructor(game) {
    super("SQUATING_RIGHT", game);
  }
  enter() {
    console.log("enter squat right");
    this.game.player.currentImage = this.game.player.images.player_squat;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 9;
  }
  handleInput(input) {
    if (this.game.player.fast) {
    } else {
      if (input.includes("ArrowDown")) {
        if (input.includes("ArrowRight")) {
          this.game.player.setState(states.CRAWLING_RIGHT, 0.5);
        } else if (input.includes("ArrowLeft")) {
          this.game.player.setState(states.CRAWLING_LEFT, 0.5);
        } else if (input.includes(" ")) {
          this.game.player.setState(states.ROLLING_RIGHT, 1);
        }
      } else {
        if (this.game.player.turnedLeft) {
          this.game.player.setState(states.STANDING_LEFT, 1);
        } else {
          this.game.player.setState(states.STANDING_RIGHT, 1);
        }
      }
    }
  }
}

export class CrawlingLeft extends State {
  constructor(game) {
    super("CRAWLING_LEFT", game);
  }
  enter() {
    console.log("enter crawl left");
    this.game.player.currentImage = this.game.player.images.player_crawl;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 9;
  }
  handleInput(input) {
    if (input.includes("ArrowRight")) {
      this.game.player.setState(states.CRAWLING_RIGHT, 0.5);
    } else if (input.includes(" ")) {
      this.game.player.setState(states.ROLLING_LEFT, 2);
    } else if (!input.includes("ArrowRight") && !input.includes("ArrowLeft")) {
      if (this.game.player.turnedLeft) {
        this.game.player.setState(states.SQUATING_LEFT, 1);
      } else {
        this.game.player.setState(states.SQUATING_RIGHT, 1);
      }
    } else if (!input.includes("ArrowDown")) {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.WALKING_LEFT, 1);
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.WALKING_RIGHT, 1);
      }
    }
  }
}

export class CrawlingRight extends State {
  constructor(game) {
    super("CRAWLING_LEFT", game);
  }
  enter() {
    console.log("enter crawl right");
    this.game.player.currentImage = this.game.player.images.player_crawl;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 9;
  }
  handleInput(input) {
    if (input.includes("ArrowLeft")) {
      this.game.player.setState(states.CRAWLING_LEFT, 0.5);
    } else if (input.includes(" ")) {
      this.game.player.setState(states.ROLLING_RIGHT, 2);
    } else if (!input.includes("ArrowRight") && !input.includes("ArrowLeft")) {
      if (this.game.player.turnedLeft) {
        this.game.player.setState(states.SQUATING_LEFT, 1);
      } else {
        this.game.player.setState(states.SQUATING_RIGHT, 1);
      }
    } else if (!input.includes("ArrowDown")) {
      if (input.includes("ArrowLeft")) {
        this.game.player.setState(states.WALKING_LEFT, 1);
      } else if (input.includes("ArrowRight")) {
        this.game.player.setState(states.WALKING_RIGHT, 1);
      }
    }
  }
}

export class RollingLeft extends State {
  constructor(game) {
    super("ROLLING_LEFT", game);
  }
  enter() {
    console.log("enter rolling left");
    this.game.player.currentImage = this.game.player.images.player_roll;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 6;
  }
  handleInput(input) {
    if (this.game.player.frameX >= 6) {
      if (this.game.player.turnedLeft) {
        this.game.player.setState(states.STANDING_LEFT, 1);
      } else {
        this.game.player.setState(states.STANDING_RIGHT, 1);
      }
    }
  }
}

export class RollingRight extends State {
  constructor(game) {
    super("ROLLING_LEFT", game);
  }
  enter() {
    console.log("enter rolling right");
    this.game.player.currentImage = this.game.player.images.player_roll;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 6;
  }
  handleInput(input) {
    if (this.game.player.frameX >= 6) {
      if (this.game.player.turnedLeft) {
        this.game.player.setState(states.STANDING_LEFT, 1);
      } else {
        this.game.player.setState(states.STANDING_RIGHT, 1);
      }
    }
  }
}

export class WallLandLeft extends State {
  constructor(game) {
    super("WALL_LAND_LEFT", game);
  }
  enter() {
    console.log("enter wall land left");
    this.game.player.currentImage = this.game.player.images.player_wall_land;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 5;
    this.game.wallMargin = 18;
    this.game.player.vy = 0;
    this.game.player.turnedLeft = false;
    // this.game.player.x = -this.game.wallMargin;
    // this.weight = 0;
  }
  handleInput(input) {
    if (input.includes("ArrowUp") && this.game.player.canDoubleJump) {
      this.game.player.x += this.game.wallMargin;
      this.game.player.vy -= 20;
      this.game.player.setState(states.JUMPING_RIGHT, 1);
      this.game.player.canDoubleJump = false;
    } else if (input.includes("ArrowRight") || input.includes("ArrowDown")) {
      this.game.player.x += this.game.wallMargin;
      this.game.player.setState(states.FALLING_RIGHT, 1);
    }
    if (this.game.player.frameX >= 5) {
      this.game.player.setState(states.WALL_SLIDE_LEFT, 0.2);
    }
  }
}

export class WallLandRight extends State {
  constructor(game) {
    super("WALL_LAND_LEFT", game);
  }
  enter() {
    console.log("enter wall land right");
    this.game.player.currentImage = this.game.player.images.player_wall_land;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 5;
    this.game.wallMargin = 18;
    this.game.player.vy = 0;
    this.game.player.turnedLeft = true;
    this.game.player.x =
      this.game.width - this.game.player.width + this.game.wallMargin;
  }
  handleInput(input) {
    if (input.includes("ArrowUp") && this.game.player.canDoubleJump) {
      this.game.player.canDoubleJump = false;
      this.game.player.x -= this.game.wallMargin + 1;
      this.game.player.vy -= 20;
      this.game.player.setState(states.JUMPING_LEFT, 1);
    } else if (input.includes("ArrowLeft") || input.includes("ArrowDown")) {
      this.game.player.x -= this.game.wallMargin + 1;
      this.game.player.setState(states.FALLING_LEFT, 1);
    } else if (this.game.player.frameX >= 5) {
      this.game.player.setState(states.WALL_SLIDE_RIGHT, 0.2);
    }
  }
}

export class WallSlideLeft extends State {
  constructor(game) {
    super("WALL_SLIDE_LEFT", game);
  }
  enter() {
    this.game.player.weight = 0.15;
    console.log("enter sliding left");
    this.game.player.currentImage = this.game.player.images.player_wall_slide;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 2;
  }
  handleInput(input) {
    if (this.game.player.onGround()) {
      this.game.player.setState(states.STANDING_RIGHT, 1);
    } else if (input.includes("ArrowUp") && this.game.player.canDoubleJump) {
      this.game.player.canDoubleJump = false;
      this.game.player.x -= this.game.wallMargin;
      this.game.player.vy -= 20;
      this.game.player.weight = 1;
      this.game.player.setState(states.JUMPING_LEFT, 1);
    } else if (input.includes("ArrowRight") || input.includes("ArrowDown")) {
      this.game.player.x += this.game.wallMargin;
      this.game.player.weight = 1;
      this.game.player.setState(states.FALLING_RIGHT, 1);
    }
  }
}

export class WallSlideRight extends State {
  constructor(game) {
    super("WALL_SLIDE_RIGHT", game);
  }
  enter() {
    this.game.player.weight = 0.15;
    console.log("enter sliding right");
    this.game.player.currentImage = this.game.player.images.player_wall_slide;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 2;
  }
  handleInput(input) {
    if (this.game.player.onGround()) {
      this.game.player.setState(states.STANDING_LEFT, 1);
    } else if (input.includes("ArrowUp") && this.game.player.canDoubleJump) {
      this.game.player.canDoubleJump = false;
      this.game.player.x -= this.game.wallMargin + 1;
      this.game.player.vy -= 20;
      this.game.player.weight = 1;
      this.game.player.setState(states.JUMPING_RIGHT, 1);
    } else if (input.includes("ArrowLeft") || input.includes("ArrowDown")) {
      this.game.player.x -= this.game.wallMargin + 1;
      this.game.player.weight = 1;
      this.game.player.setState(states.FALLING_LEFT, 1);
    }
  }
}

export class JabLeft extends State {
  constructor(game) {
    super("JAB_LEFT", game);
  }
  enter() {
    console.log("enter jab left");
    this.game.player.currentImage = this.game.player.images.player_jab;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 5;
  }
  handleInput() {
    if (this.game.player.frameX >= 5) {
      if (this.game.player.turnedLeft) {
        this.game.player.setState(states.STANDING_LEFT, 1);
      } else {
        this.game.player.setState(states.STANDING_RIGHT, 1);
      }
    }
  }
}

export class JabRight extends State {
  constructor(game) {
    super("JAB_RIGHT", game);
  }
  enter() {
    console.log("enter jab left");
    this.game.player.currentImage = this.game.player.images.player_jab;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 5;
  }
  handleInput() {
    if (this.game.player.frameX >= 5) {
      if (this.game.player.turnedLeft) {
        this.game.player.setState(states.STANDING_LEFT, 1);
      } else {
        this.game.player.setState(states.STANDING_RIGHT, 1);
      }
    }
  }
}

// export class PunchLeft extends State {
//   constructor(game) {
//     super("PUNCH_LEFT", game);
//   }
//   enter() {
//     console.log("enter jab left");
//     this.game.player.currentImage = this.game.player.images.player_punch;
//     this.game.player.frameX = 0;
//     this.game.player.maxFrame = 5;
//     this.game.player.width = 64;
//     this.game.player.height = 64;
//   }
//   handleInput() {
//     if (this.game.player.frameX >= 5) {
//       if (this.game.player.turnedLeft) {
//         this.game.player.setState(states.STANDING_LEFT, 1);
//       } else {
//         this.game.player.setState(states.STANDING_RIGHT, 1);
//       }
//       this.game.player.width = 48;
//       this.game.player.height = 48;
//     }
//   }
// }
// export class PunchRight extends State {
//   constructor(game) {
//     super("PUNCH_RIGHT", game);
//   }
//   enter() {
//     console.log("enter jab left");
//     this.game.player.currentImage = this.game.player.images.player_punch;
//     this.game.player.frameX = 0;
//     this.game.player.maxFrame = 5;
//     this.game.player.width = 64;
//     this.game.player.height = 64;
//   }
//   handleInput() {
//     if (this.game.player.frameX >= 5) {
//       if (this.game.player.turnedLeft) {
//         this.game.player.setState(states.STANDING_LEFT, 1);
//       } else {
//         this.game.player.setState(states.STANDING_RIGHT, 1);
//       }
//       this.game.player.width = 48;
//       this.game.player.height = 48;
//     }
//   }
// }
