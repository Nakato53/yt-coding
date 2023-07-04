import Ball from "../ball";
import { GAME_HEIGHT, GAME_WIDTH } from "../config";
import { input1, input2 } from "../input";
import Paddle from "../paddle";
import GameoverScene from "./gameover.scene";
import Scene from "./scene";
import SCENESMANAGER from "./scenes.manager";

export default class PlayScene implements Scene{
    joueur1:Paddle = new Paddle();
    joueur2:Paddle = new Paddle();
    balle:Ball = new Ball();
        
    constructor(){
        this.joueur1.x = 10;
        this.joueur1.y = GAME_HEIGHT/2-15;

        this.joueur2.x = GAME_WIDTH - 20;
        this.joueur2.y = GAME_HEIGHT/2-15;

    }

    update(dt:number):void{
        
        this.joueur1.update(dt); 
        this.joueur2.update(dt); 
        this.balle.update(dt);

        this.handleInput();
        
        // check paddle collision
        if(
            this.checkPaddleCollision(this.joueur1.getRectangle(),this.balle.getRectangle()) || 
            this.checkPaddleCollision(this.joueur2.getRectangle(),this.balle.getRectangle())
        ){
            this.balle.bouncePaddle();
            this.balle.update(dt);
        }

        // check top/bottom collision
        if(
            this.balle.y+this.balle.h >= GAME_HEIGHT ||
            this.balle.y <= 0
        ){
            this.balle.bounceFloor();
            this.balle.update(dt);
        }

        // check side collision
        if(
            this.balle.x+this.balle.w >= GAME_WIDTH ||
            this.balle.x <= 0
        ){
            SCENESMANAGER.addScene(new GameoverScene());
            //game over
        }
    }

    handleInput(){
        if(input1.up)
            this.joueur1.move(-1);        
        else if(input1.down)
            this.joueur1.move(1);
        else if(!input1.up && !input1.down)
            this.joueur1.move(0);

        if(input2.up)
            this.joueur2.move(-1);
        else if(input2.down)
            this.joueur2.move(1);
        else if(!input2.up && !input2.down)
            this.joueur2.move(0);

    }

    checkPaddleCollision(rect1:Rectangle,rect2:Rectangle):boolean{
        if(rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y){
            return true;
        }
        return false;
    }

    draw(context:CanvasRenderingContext2D):void{
        this.joueur1.draw(context);
        this.joueur2.draw(context);
        this.balle.draw(context);
    }

}