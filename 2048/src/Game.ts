import { CellColors } from "./Color";
import Config from "./Config";
import Gameloop from "./Gameloop";

export default class Game
{
    private gameloop:Gameloop;
    private board:Array<Array<{value:number,merged:boolean}>>;
    private canPlay:boolean = true;

    constructor(){


        window.addEventListener('keydown', (event: KeyboardEvent) => { switch (event.key) {
            case 'ArrowUp':
              this.moveDirection(0,-1);
              break;
            case 'ArrowDown':
                this.moveDirection(0,1);
              break;
            case 'ArrowLeft':
                this.moveDirection(-1,0);
              break;
            case 'ArrowRight':
                this.moveDirection(1,0);
              break;
            
            default:
              break;
          }
        });
        
  


        this.gameloop = new Gameloop(Config.CELL_BY_ROW*Config.CELL_SIZE+Config.CELL_BY_ROW*Config.CELL_SPACING,Config.CELL_BY_ROW*Config.CELL_SIZE+Config.CELL_BY_ROW*Config.CELL_SPACING);
        this.gameloop.draw = this.draw.bind(this);
        this.gameloop.update = this.update.bind(this);
        this.board = [];
        this.reset();
    }

    moveDirection(x:number,y:number){
        if(!this.canPlay)
            return;


        const previousBoard = JSON.stringify(this.board);

        for (let y = 0; y < Config.CELL_BY_ROW; y++) {
            for (let x = Config.CELL_BY_ROW-1; x >= 0; x--) {
                this.board[y][x].merged = false
            }
        }
        if(x==-1){
            for (let y = 0; y < Config.CELL_BY_ROW; y++) {
               for (let x = Config.CELL_BY_ROW-1; x >= 1; x--) {
                    const value = this.board[y][x].value;
                    if(value!=0 && value == this.board[y][x-1].value && !this.board[y][x-1].merged && !this.board[y][x].merged){
                        this.board[y][x-1].value = this.board[y][x-1].value*2;
                        this.board[y][x-1].merged = true;
                        this.board[y][x].value = 0;
                        this.board[y][x].merged = false;
                        if(this.board[y][x+1] && this.board[y][x+1].value != 0){
                            x+=2;
                        }
                    }else if(value != 0 && this.board[y][x-1].value == 0){
                        this.board[y][x-1].value = value;
                        this.board[y][x].value = 0;
                        this.board[y][x-1].merged = this.board[y][x].merged ? true:false;
                        this.board[y][x].merged = false;
                        if(this.board[y][x+1] && this.board[y][x+1].value != 0){
                            x+=2;
                        }
                    }
               } 
            }
        }
        if(x==1){
            
            for (let y = 0; y < Config.CELL_BY_ROW; y++) {
               for (let x = 0; x < Config.CELL_BY_ROW-1; x++) {
                    const value = this.board[y][x].value;
                    if(value != 0 && value == this.board[y][x+1].value && !this.board[y][x+1].merged && !this.board[y][x].merged ){
                        this.board[y][x+1].value = this.board[y][x+1].value*2;
                        this.board[y][x+1].merged = true;
                        this.board[y][x].value = 0;
                        this.board[y][x].merged = false;
                        if(this.board[y][x-1] && this.board[y][x-1].value != 0){
                            x-=2;
                        }
                    }else if(value != 0 && this.board[y][x+1].value == 0){
                        this.board[y][x+1].value = value;
                        this.board[y][x].value = 0;
                        this.board[y][x+1].merged = this.board[y][x].merged ? true:false;
                        this.board[y][x].merged = false;
                        if(this.board[y][x-1] && this.board[y][x-1].value != 0){
                            x-=2;
                        }
                    }
               } 
            }
        }
        if(y==-1){
            for (let x = 0; x < Config.CELL_BY_ROW; x++) {
               for (let y = Config.CELL_BY_ROW-1; y >= 1; y--) {
                    const value = this.board[y][x].value;
                    if(value!=0 && value == this.board[y-1][x].value && !this.board[y-1][x].merged && !this.board[y][x].merged){
                        this.board[y-1][x].value = this.board[y-1][x].value*2;
                        this.board[y-1][x].merged = true;
                        this.board[y][x].value = 0;
                        this.board[y][x].merged = false;
                        if(this.board[y+1] && this.board[y+1][x].value != 0){
                            y+=2;
                        }
                    }else if(value != 0 && this.board[y-1][x].value == 0){
                        this.board[y-1][x].value = value;
                        this.board[y][x].value = 0;
                        this.board[y-1][x].merged = this.board[y][x].merged ? true:false;
                        this.board[y][x].merged = false;
                        if(this.board[y+1] && this.board[y+1][x].value != 0){
                            y+=2;
                        }
                    }
               } 
            }
        }
        if(y==1){
            
            for (let x = 0; x < Config.CELL_BY_ROW; x++) {
               for (let y = 0; y < Config.CELL_BY_ROW-1; y++) {
                    const value = this.board[y][x].value;
                    if(value != 0 && value == this.board[y+1][x].value && !this.board[y+1][x].merged && !this.board[y][x].merged ){
                        this.board[y+1][x].value = this.board[y+1][x].value*2;
                        this.board[y+1][x].merged = true;
                        this.board[y][x].value = 0;
                        this.board[y][x].merged = false;
                        if(this.board[y-1] && this.board[y-1][x].value != 0){
                            y-=2;
                        }
                    }else if(value != 0 && this.board[y+1][x].value == 0){
                        this.board[y+1][x].value = value;
                        this.board[y][x].value = 0;
                        this.board[y+1][x].merged = this.board[y][x].merged ? true:false;
                        this.board[y][x].merged = false;  
                        if(this.board[y-1] &&  this.board[y-1][x].value != 0){
                            y-=2;
                        }
                       
                    }
               } 
            }
        }

        const currentBoard = JSON.stringify(this.board);

        console.log(currentBoard,previousBoard);
        if(currentBoard!=previousBoard){
            this.canPlay = false;
            this.addNumber();
        }
    }

    reset(){
        this.board = [];
        for (let y = 0; y < Config.CELL_BY_ROW; y++) {
            const line:Array<{value:number,merged:boolean}> = [];
            for (let x = 0; x < Config.CELL_BY_ROW; x++) {
                line.push({value:0,merged:false});
            }   
            this.board.push(line);
        }
        this.addNumber(2);
    }

    update(dt:number){

    }

    getColorByNumber(number:number):string{
        const color =  CellColors.find(o => o.key === number)?.color;
        return color === undefined ? CellColors[0].color : color;
    }

    addNumber(howMany:number = 1){
        setTimeout(() => {

            for (let index = 0; index < howMany; index++) {
                let availableSlots:Array<{x:number,y:number}> = [];
                for (let y = 0; y < Config.CELL_BY_ROW; y++) {
                    for (let x = 0; x < Config.CELL_BY_ROW; x++) {
                        if( this.board[y][x].value == 0 ){
                            availableSlots.push({x,y});
                        }
                    }
                }
                let randomSlot = availableSlots[Math.floor(Math.random()*availableSlots.length)];
                this.board[randomSlot.y][randomSlot.x].value = Math.floor(Math.random()*2)+1 == 2 ? 2 : 4; 
            }
            this.canPlay = true;
        },500);
    }





    draw(ctx:CanvasRenderingContext2D){
        for (let y = 0; y < Config.CELL_BY_ROW; y++) {
            for (let x = 0; x < Config.CELL_BY_ROW; x++) {
                let cellValue = this.board[y][x].value;
                ctx.fillStyle = this.getColorByNumber(cellValue);
                ctx.fillRect(x*Config.CELL_SIZE+Config.CELL_SPACING*x,y*Config.CELL_SIZE+Config.CELL_SPACING*y,Config.CELL_SIZE,Config.CELL_SIZE);
                ctx.fillStyle = "black";

                if(cellValue< 10){
                    ctx.font = Math.floor(Config.CELL_SIZE/1.5)+'px Minecraft';
                    ctx.fillText(
                        cellValue+"",
                        x*Config.CELL_SIZE+Config.CELL_SPACING*x+ Math.floor(Config.CELL_SIZE/3),
                        y*Config.CELL_SIZE+Config.CELL_SPACING*y + Math.floor(Config.CELL_SIZE/1.3)
                    );
                }

                if(cellValue>= 10 && cellValue<100){
                    ctx.font = Math.floor(Config.CELL_SIZE/1.5)+'px Minecraft';
                    ctx.fillText(
                        cellValue+"",
                        x*Config.CELL_SIZE+Config.CELL_SPACING*x+ Math.floor(Config.CELL_SIZE/4),
                        y*Config.CELL_SIZE+Config.CELL_SPACING*y + Math.floor(Config.CELL_SIZE/1.3)
                    );
                }
               
                if(cellValue>= 100 && cellValue<1000){
                    ctx.font = Math.floor(Config.CELL_SIZE/1.7)+'px Minecraft';
                    ctx.fillText(
                        cellValue+"",
                        x*Config.CELL_SIZE+Config.CELL_SPACING*x+ Math.floor(Config.CELL_SIZE/20),
                        y*Config.CELL_SIZE+Config.CELL_SPACING*y + Math.floor(Config.CELL_SIZE/1.5)
                    );
                }

                
                if(cellValue>= 1000){
                    ctx.font = Math.floor(Config.CELL_SIZE/2.2)+'px Minecraft';
                    ctx.fillText(
                        cellValue+"",
                        x*Config.CELL_SIZE+Config.CELL_SPACING*x+ Math.floor(Config.CELL_SIZE/20),
                        y*Config.CELL_SIZE+Config.CELL_SPACING*y + Math.floor(Config.CELL_SIZE/1.5)
                    );
                }
            }      
        }
    }
}