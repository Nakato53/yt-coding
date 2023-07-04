import { input1, input2 } from "./input";
import GameoverScene from "./scenes/gameover.scene";
import PlayScene from "./scenes/play.scene";
import SCENESMANAGER from "./scenes/scenes.manager";
import StartScene from "./scenes/start.scene";

export default class Game{
    
    constructor(){
        SCENESMANAGER.addScene(new PlayScene());
        SCENESMANAGER.addScene(new StartScene());
    }

    update(dt:number):void{
        SCENESMANAGER.update(dt);
    }
    
    keydown(key:string){
        switch (key) {
            case 'w':
                input1.up = true;
                break;
            case 's':
                input1.down = true;
                break;
            case 'r':
                input1.restart = true;
                break;
        
            case 'ArrowUp':
                input2.up = true;
                break;
            case 'ArrowDown':
                input2.down = true;
                break;
            case ' ':
                input2.restart = true;
                break;
            default:
                break;
        }
    }

    keyup(key:string){
        switch (key) {
            case 'w':
                input1.up = false;
                break;
            case 's':
                input1.down = false;
                break;
            case 'r':
                input1.restart = false;
                break;
        
            case 'ArrowUp':
                input2.up = false;
                break;
            case 'ArrowDown':
                input2.down = false;
                break;
            case ' ':
                input2.restart = false;
                break;
            default:
                break;
        }
    }

    draw(context:CanvasRenderingContext2D){
        SCENESMANAGER.draw(context);
    }


}