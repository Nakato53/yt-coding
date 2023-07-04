import { GAME_HEIGHT, GAME_WIDTH } from "./config";

export default class Ball{
    x:number = GAME_WIDTH/2;
    y:number = GAME_HEIGHT/2;
    w:number = 4;
    h:number = 4;
    vx:number = Math.random() * 2 -1;
    vy:number = Math.random() * 2 -1;

    constructor() {
        
    }

    update(dt:number){
        this.x+=this.vx;
        this.y+=this.vy;
    }

    bouncePaddle(){
        this.vx*=-1;

        this.vx+= this.vx > 0 ? 0.1 : -0.1;
        this.vy+= this.vy > 0 ? 0.1 : -0.1;
    }

    bounceFloor(){
        this.vy*=-1;
        this.vx+= this.vx > 0 ? 0.1 : -0.1;
        this.vy+= this.vy > 0 ? 0.1 : -0.1;
    }

    getRectangle():Rectangle{
        return {x:this.x,y:this.y,w:this.w,h:this.h}
    }

    draw(context:CanvasRenderingContext2D){
        context.fillStyle = "#FFF";
        context.fillRect(this.x,this.y,this.w,this.h);
    }
}