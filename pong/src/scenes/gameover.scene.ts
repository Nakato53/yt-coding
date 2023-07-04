import { input1, input2 } from "../input";
import IScene from "./scene";
import SCENESMANAGER from "./scenes.manager";

export default class GameoverScene implements IScene{

    countdown:number = 2999;

    update(dt: number): void {
     this.countdown -= dt;
     if(input1.restart || input2.restart){
        location.reload();
     }
    }
    
    draw(context: CanvasRenderingContext2D): void {
        let valeur = Math.floor(this.countdown / 1000) + 1;
        context.fillStyle = "red";
        context.font = "48px georgia";
        context.fillText("GAME OVER !",17,137);

        context.font = "48px georgia";
        context.fillText("GAME OVER !",20,140);

        context.fillStyle = "white";
        context.font = "48px georgia";
        context.fillText("GAME OVER !",18,138);
    }

}