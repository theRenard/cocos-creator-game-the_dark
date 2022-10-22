import { _decorator, Component, Node, TiledLayer, TiledTile, PolygonCollider2D, Vec2, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    start() {
        const tiledLayer = this.node.getComponent(TiledLayer);
        const collider = this.node.getComponent(PolygonCollider2D);
        const points: Vec2[] = [];
        tiledLayer.texGrids.forEach((texGrid, i) => {
                const { x, y, width, height } = texGrid;
            points.push(new Vec2(x, y));
        });
        // collider.points = points;
        collider.points.push(...[new Vec2(0, 0), new Vec2(0, 100), new Vec2(100, 100), new Vec2(100, 0)]);
        collider.apply();
        // console.log(collider);
    }

    update(deltaTime: number) {

    }
}

