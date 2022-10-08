import {
  _decorator,
  Component,
  Node,
  Prefab,
  instantiate,
  View,
  math,
  tween,
  Vec3,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("DroidsManager")
export class DroidsManager extends Component {
  @property({ type: Prefab }) droidPrefab: Prefab = null;

  @property droids = 3;

  minY = 300;
  maxY = View.instance.getVisibleSize().y;
  minX = 0;
  maxX = View.instance.getVisibleSize().x;

  start() {
    for (let i = 0; i < this.droids; i++) {
      const randomX = math.randomRange(this.minX, this.maxX);
      const randomY = math.randomRange(this.minY, this.maxY);
      const droid = instantiate(this.droidPrefab);
      droid.setParent(this.node);
      droid.setWorldPosition(randomX, randomY, 0);
    }
  }

}
