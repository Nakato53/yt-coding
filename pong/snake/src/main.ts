import Color from './Color';
import Config from './Config';
import Fruit from './Fruit';
import Game from './Game';
import Snake, { SnakeDirection } from './Snake';
import './style.css'
const game = new Game(Config.GAME_WIDTH,Config.GAME_HEIGHT,12,60);

const scoreSpan = document.getElementById("score") as HTMLSpanElement;
const snake = new Snake();
const fruit = new Fruit();

const handleKeyPress = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowUp':
      snake.direction = SnakeDirection.up;
      break;
    case 'ArrowDown':
    snake.direction = SnakeDirection.down;
      break;
    case 'ArrowLeft':
    snake.direction = SnakeDirection.left;
      break;
    case 'ArrowRight':
    snake.direction = SnakeDirection.right;
      break;
    case ' ':
      snake.reset();
      fruit.reset();
      break;
    default:
      break;
  }
};

window.addEventListener('keydown', handleKeyPress);

game.update = (deltaTime:number) => {
  if(!snake.dead){
    snake.update(deltaTime);
    snake.canEat(fruit);
    fruit.update(deltaTime);
    scoreSpan.innerHTML = ""+(snake.length() - 2);
  }else{

  }
}

game.draw = (ctx) => {
  ctx.fillStyle = Color.dark;
  if(!snake.dead){
    snake.draw(ctx);
    fruit.draw(ctx);
  }else{
    ctx.fillStyle = Color.dark;
    ctx.fillRect(0,0,Config.GAME_WIDTH,Config.GAME_HEIGHT);

    // GAME OVER
    ctx.font = "6px Minecraft";
    // @ts-ignore
    ctx.letterSpacing = "1px";
    ctx.fillStyle = Color.light;
    ctx.fillText("GAME",0,5);
    ctx.fillText("OVER",0,12);
  }
}