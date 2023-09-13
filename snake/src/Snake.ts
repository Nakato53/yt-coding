import Dot from "./Dot";
import Fruit from "./Fruit";

export enum SnakeDirection {
    up,
    down,
    left,
    right
}

export default class Snake{
    private dots:Array<Dot> = [];
    public direction:SnakeDirection = SnakeDirection.right;

    private moveTime = 200;
    private moveElapsed = 0;

    public dead:boolean = false;

    constructor(){
        this.reset();
    }

    reset(){
        this.dots = []
        this.moveTime = 200;
        this.moveElapsed = 0;
        this.dots.push(new Dot(5,5));
        this.dots.push(new Dot(5,5));
        this.direction = SnakeDirection.right;
        this.dead = false;
    }

    update(deltaTime:number){
        this.moveElapsed+=deltaTime;
        if(this.moveElapsed>=this.moveTime){
            this.move();
            this.moveElapsed -= this.moveTime;
        }
    }

    canEat(fruit:Fruit){
        if(this.dots[0].x == fruit.x && this.dots[0].y == fruit.y){
            fruit.reset();
            this.dots.push(new Dot(fruit.x,fruit.y));
            if(this.dots.length % 2 == 0 && this.moveTime>100){
                this.moveTime -= 10;
                
            }
        }
    }

    length():number{
        return this.dots.length;
    }

    move(){
        this.dots[0].moveToDirection(this.direction);
        if(this.dots.length > 1){
            for (let index = 1; index < this.dots.length; index++) {
                this.dots[index].moveToPosition(this.dots[index-1].lastX,this.dots[index-1].lastY);        
            }
        }
        this.checkCollision();
    }

    checkCollision(){
        for (let index = 1; index < this.dots.length; index++) {
            
            if( this.dots[0].x == this.dots[index].x && this.dots[0].y == this.dots[index].y){
               console.log(this.dots);

                this.dead = true;
            }
        }
    }

    draw(ctx:CanvasRenderingContext2D){
        for (let index = 0; index < this.dots.length; index++) {
            this.dots[index].draw(ctx);       
        }
    }
}