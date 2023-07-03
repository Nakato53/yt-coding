import IScene from "./scene";

class ScenesManager {
    
    scenes:Array<IScene>;

    constructor() {
        this.scenes = [];
    }

    empty(){
        this.scenes = []
    }

    addScene(scene:IScene){
        this.scenes.push(scene);
    }

    popScene(){
        this.scenes.pop();
    }

    update(dt:number){
        //update only last one
        this.scenes[this.scenes.length-1].update(dt);
    }

    draw(context:CanvasRenderingContext2D){
        // draw all from beginning
        for (let index = 0; index < this.scenes.length; index++) {
            this.scenes[index].draw(context);
        }
    }

}


const SCENESMANAGER = new ScenesManager();

export default SCENESMANAGER;