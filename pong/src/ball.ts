import { GAME_HEIGHT, GAME_WIDTH } from "./config";

export default class Ball{
    x:number = 50;
    y:number = 50;
    w:number = 4;
    h:number = 4;
    vx:number = 1;
    vy:number = 1;

    constructor() {
        
    }

    update(dt:number){
        this.x+=this.vx;
        this.y+=this.vy;
    }

    bouncePaddle(){
        this.vx*=-1;
    }

    bounceFloor(){
        this.vy*=-1;
    }

    getRectangle():Rectangle{
        return {x:this.x,y:this.y,w:this.w,h:this.h}
    }

    draw(context:CanvasRenderingContext2D){
        context.fillStyle = "#FFF";
        context.fillRect(this.x,this.y,this.w,this.h);
    }
}