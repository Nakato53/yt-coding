import Config from "./Config";
import { SnakeDirection } from "./Snake";

export default class Dot {
    private size:number = 1;
    public x:number;
    public y:number;
    public lastX:number;
    public lastY:number;
    private speed:number = 1;
    
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
        this.lastX = x;
        this.lastY = y;
    }

    moveToPosition(x:number,y:number){
        this.lastX=this.x;
        this.lastY=this.y;
        this.x=x;
        this.y=y;

        if(this.x<0)this.x=Config.GAME_WIDTH-1;
        if(this.x>Config.GAME_WIDTH-1)this.x=0;
        if(this.y<0)this.y=Config.GAME_HEIGHT-1;
        if(this.y>Config.GAME_HEIGHT-1)this.y=0;
    }

    moveToDirection(direction:SnakeDirection){
        switch (direction) {
            case SnakeDirection.left:
                this.moveToPosition(this.x-this.speed,this.y);
                break;
        
            case SnakeDirection.right:
                this.moveToPosition(this.x+this.speed,this.y);
                break;

            case SnakeDirection.up:
                this.moveToPosition(this.x,this.y-this.speed);
                break;

            case SnakeDirection.down:
                this.moveToPosition(this.x,this.y+this.speed);
                break;

            default:
                break;
        }
    }

   
    public draw(ctx:CanvasRenderingContext2D) {
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
}