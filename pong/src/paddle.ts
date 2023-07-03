import { GAME_HEIGHT } from "./config";

export default class Paddle{
    x:number = 0;
    y:number = 0;

    w:number = 10;
    h:number = 30;

    vy:number = 0;

    update(dt:number){
        this.y+=this.vy;
        if(this.y <= 0) this.y = 0;
        if(this.y+this.h >= GAME_HEIGHT) this.y = GAME_HEIGHT-this.h;
    }

    getRectangle():Rectangle{
        return {x:this.x,y:this.y,w:this.w,h:this.h}
    }

    move(y:number){
        this.vy = y;
    }

    draw(context:CanvasRenderingContext2D){
        context.fillStyle = "#FFF";
        context.fillRect(this.x,this.y,this.w,this.h);
    }
}