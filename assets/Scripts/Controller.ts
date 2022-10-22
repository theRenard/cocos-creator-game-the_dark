import {
  _decorator,
  Component,
  Vec3,
  input,
  Input,
  EventKeyboard,
  KeyCode,
  Animation,
  RigidBody2D,
  Vec2,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Controller")
export class Controller extends Component {
  @property walkSpeed = 100;

  @property runSpeed = 150;

  position: Vec3 = new Vec3(0, 0, 0);
  xAmmount: number = 0;
  yAmmount: number = 0;

  speed: number = 5;

  animation: Animation;

  rigidBody: RigidBody2D

  onLoad() {
    // PhysicsSystem2D.instance.debugDrawFlags =
    //   EPhysics2DDrawFlags.Aabb |
    //   EPhysics2DDrawFlags.Pair |
    //   EPhysics2DDrawFlags.CenterOfMass |
    //   EPhysics2DDrawFlags.Joint |
    //   EPhysics2DDrawFlags.Shape;

    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    const sprite = this.node.getChildByName("Sprite");
    this.animation = sprite.getComponent(Animation);
    this.rigidBody = this.node.getComponent(RigidBody2D);
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_LEFT:
        this.xAmmount = -this.walkSpeed;
        this.animation.play("run");
        this.node.scale = new Vec3(-1, 1, 1);
        break;
      case KeyCode.ARROW_RIGHT:
        this.xAmmount = this.walkSpeed;
        this.animation.play("run");
        this.node.scale = new Vec3(1, 1, 1);
        break;
      case KeyCode.KEY_A:
        this.xAmmount = -this.runSpeed;
        this.animation.play("run");
        this.node.scale = new Vec3(-1, 1, 1);
        break;
      case KeyCode.KEY_D:
        this.xAmmount = this.runSpeed;
        this.animation.play("run");
        this.node.scale = new Vec3(1, 1, 1);
        break;
      case KeyCode.ARROW_UP:
        // this.yAmmount = 10;
        this.rigidBody.applyForceToCenter(new Vec2(0, 1000), false);
        break;
      case KeyCode.ARROW_DOWN:
        // this.yAmmount = -1;
        break;
    }
  }

  onKeyUp(event: EventKeyboard) {
    this.xAmmount = 0;
    this.yAmmount = 0;
    this.animation.play("idle");
  }
  update(deltaTime: number) {
    // this.node.translate(
    //   new Vec3(
    //     this.xAmmount * deltaTime * this.speed,
    //     this.yAmmount * deltaTime * this.speed,
    //     0
    //   )
    // );
    // set velocity
    this.rigidBody.linearVelocity = new Vec2(
      this.xAmmount,
      this.yAmmount
    );
  }
}
