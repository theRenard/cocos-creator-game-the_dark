import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    onLoad() {
        PhysicsSystem2D.instance.debugDrawFlags =
          EPhysics2DDrawFlags.Aabb |
          EPhysics2DDrawFlags.Pair |
          EPhysics2DDrawFlags.CenterOfMass |
          EPhysics2DDrawFlags.Joint |
          EPhysics2DDrawFlags.Shape;

      }

    start() {
    }

    update(deltaTime: number) {

    }
}

