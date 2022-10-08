import { _decorator, Component, Node, tween, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Droid")
export class Droid extends Component {
  start() {
    this.move();
  }

  move() {
    const randomX = Math.random() * 1000;
    const randomY = Math.random() * 1000;
    const xPosition = this.node.getWorldPosition().x;

    if (randomX > xPosition) {
      this.flipRight();
    } else {
      this.flipLeft();
    }

    tween(this.node)
      .to(10, { worldPosition: new Vec3(randomX, randomY, 0) })
      .call(() => {
        this.move();
        console.log("This is a callback");
      })
      // .by(
      //   10,
      //   { position: new Vec3(-5, -5, -5) },
      //   { easing: "sineOutIn" }
      // )
      .start();
  }

  flipLeft() {
    this.node.scale = new Vec3(-1, 1, 1);
  }

  flipRight() {
    this.node.scale = new Vec3(1, 1, 1);
  }

  update(deltaTime: number) {}
}
