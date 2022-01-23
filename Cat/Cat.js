/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cat-a", "./Cat/costumes/cat-a.svg", { x: 48, y: 50 }),
      new Costume("cat-b", "./Cat/costumes/cat-b.svg", { x: 46, y: 53 })
    ];

    this.sounds = [new Sound("Meow", "./Cat/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      this.y = -108;
      if (this.mouse.down) {
        while (!!this.mouse.down) {
          yield;
        }
        this.direction = this.radToScratch(
          Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
        );
        if (this.mouse.x > -223 && this.mouse.x < -120) {
          yield* this.glide(1, -196, -108);
        }
        if (this.mouse.x > -120 && this.mouse.x < 63) {
          yield* this.glide(1, -10, -108);
        }
        if (this.mouse.x > 63 && this.mouse.x < 228) {
          yield* this.glide(1, 162, -108);
        }
      }
      yield;
    }
  }
}
