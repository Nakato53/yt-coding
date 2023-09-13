import Config from "./Config";

export default class Fruit{

    
    private flashTime = 1000000000;
    private flashElapsed = 0;
    private isVisisble = true;
    public x:number = 0;
    public y:number = 0;

    constructor(){
        this.reset();
    }

    reset(){
        this.x = Math.floor(Math.random() * Config.GAME_WIDTH)
        this.y = Math.floor(Math.random() * Config.GAME_HEIGHT)
        this.flashElapsed = 0;
        this.isVisisble = true;
    }

    update(deltaTime:number){
        this.flashElapsed+=deltaTime;
        if(this.flashElapsed>=this.flashTime){
            this.isVisisble = !this.isVisisble;
            this.flashElapsed -= this.flashElapsed;
        }
    }

    draw(ctx:CanvasRenderingContext2D){
        if(this.isVisisble){
            ctx.fillRect(this.x,this.y,1,1)
        }
    }
}