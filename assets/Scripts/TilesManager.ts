import { _decorator, Component, Node, Prefab, TiledMap, instantiate, RigidBody2D, Collider2D, PolygonCollider2D, v2, ERigidBody2DType } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TilesManager')
export class TilesManager extends Component {

    tiledMap: TiledMap = null;

    @property({ type: Prefab }) electricitySparkPrefab: Prefab = null;

    start() {
        this.tiledMap = this.getComponent(TiledMap);
        // this.tiledMap.getLayers().forEach(layer => {
        //     console.log(layer.tiledTiles);
        //     console.log(layer);
        // });

        // // get objects
        // const starting = this.tiledMap.getObjectGroup('objects').getObject('starting_point');
        // const { x, y } = starting.offset;
        // console.log(this.tiledMap.getLayer('terrain').getTiledTileAt(70, 400, true));


        const lvlObjects = this.tiledMap.getObjectGroup('objects').getObjects();

        const colliders = lvlObjects.filter(obj => {
            const { text } = obj;
            return text === 'collider';
        });

        const sparks = lvlObjects.filter(obj => {
            const { text } = obj;
            return text === 'spark';
        });

        // add rigidbody to colliders
        colliders.forEach(collider => {
            const { width, height, offset, x, y } = collider;
            const { parent } = this.node;
            const node = new Node();
            node.parent = parent;
            node.setWorldPosition(0, 0, 0);
            // const rigidbody = node.addComponent(RigidBody2D);
            // rigidbody.type = ERigidBody2DType.Static;
            // const collider2D = node.addComponent(PolygonCollider2D);
            // collider2D.points = [v2(x, y), v2(x + width, y), v2(x + width, y - height), v2(x, y - height)];
            // collider2D.apply();
        });

        sparks.forEach(spark => {
            const { x, y } = spark;
            const node = instantiate(this.electricitySparkPrefab);
            node.parent = this.node;
            console.log(spark);
            node.setWorldPosition(x, y, 0);
        });

    }

    update(deltaTime: number) {
    }
}

