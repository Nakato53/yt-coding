import IScene from "./scene";
import SCENESMANAGER from "./scenes.manager";

export default class StartScene implements IScene{

    countdown:number = 2999;

    update(dt: number): void {
     this.countdown -= dt;
     if(this.countdown<=0){
        SCENESMANAGER.popScene();
     }
    }
    
    draw(context: CanvasRenderingContext2D): void {
        let valeur = Math.floor(this.countdown / 1000) + 1;
        context.fillStyle = "#FFF";
        context.font = "48px georgia";
        context.fillText(valeur.toString(),150,130);
    }

}