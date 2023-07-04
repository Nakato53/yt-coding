import { GAME_HEIGHT, GAME_SCALE, GAME_WIDTH } from './config';
import Game from './game';
import './style.css'

const FPS:number = 60;
const TIME_PER_FRAME:number = 1000/FPS;

const setupCanvas = ():HTMLCanvasElement => {
  const newCanvas:HTMLCanvasElement = document.createElement("canvas");
  document.body.appendChild(newCanvas);
  newCanvas.style.width = (GAME_WIDTH*GAME_SCALE)+'px';
  newCanvas.style.height = (GAME_HEIGHT*GAME_SCALE)+'px';
  newCanvas.style.border = "2px solid white";
  newCanvas.style.imageRendering = "pixelated";
  newCanvas.width = GAME_WIDTH;
  newCanvas.height = GAME_HEIGHT;
  return newCanvas;
}

const canvas = setupCanvas();
const context = canvas.getContext("2d") as CanvasRenderingContext2D;
const GAME = new Game();

document.onkeydown = (e:KeyboardEvent) => {
  if(e.key === 'w'||e.key === 's'||e.key === 'ArrowDown'||e.key === 'ArrowUp'||e.key === 'r'){
    GAME.keydown(e.key)
  }
}

document.onkeyup = (e:KeyboardEvent) => {
  if(e.key === 'w'||e.key === 's'||e.key === 'ArrowDown'||e.key === 'ArrowUp'||e.key === 'r'){
    GAME.keyup(e.key)
  }
}

let frame:number = 0;
let previousTime:number = 0;
const onEachFrame = (elapsedTime:number) => {
  const dt = elapsedTime-previousTime;
  previousTime = elapsedTime;
  requestAnimationFrame(onEachFrame);
  context.fillStyle = "#000";
  context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  GAME.update(dt);
  
  frame += dt;
  if(frame>TIME_PER_FRAME){
    GAME.draw(context);
    frame-=TIME_PER_FRAME;
  }
}


requestAnimationFrame(onEachFrame);

