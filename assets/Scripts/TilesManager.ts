import { _decorator, Component, Node, TiledUserNodeData, TiledMap, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TilesManager')
export class TilesManager extends Component {


    tiledMap: TiledMap = null;
    start() {
        this.tiledMap = this.getComponent(TiledMap);
        this.tiledMap.getLayers().forEach(layer => {
            console.log(layer.tiledTiles);
            console.log(layer);
        });

        // get objects
        const starting = this.tiledMap.getObjectGroup('objects').getObject('starting_point');
        const { x, y } = starting.offset;
        console.log(this.tiledMap.getLayer('terrain').getTiledTileAt(70, 400, true));


        this.tiledMap.getObjectGroups().forEach(group => {
            console.log(group.getObjects());
        });

        // console.log(this.tiledMap.getLayer('terrain'));


    }

    update(deltaTime: number) {
    }
}

