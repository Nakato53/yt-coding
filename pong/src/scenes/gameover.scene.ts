import IScene from "./scene";
import SCENESMANAGER from "./scenes.manager";

export default class GameoverScene implements IScene{

    countdown:number = 2999;

    update(dt: number): void {
     this.countdown -= dt;
     if(this.countdown<=0){
        SCENESMANAGER.popScene();
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