export default class Game {
    private lastFrameTimeMs: number;
    private deltaTime: number;
    private fps: number;
    private frameRequestID: number;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
  
    constructor(width:number,height:number,scale:number=1,fps:number=60) {
      this.lastFrameTimeMs = 0;
      this.deltaTime = 0;
      this.fps = fps;
      this.frameRequestID = 0;
  
      // Créer un élément canvas et obtenir son contexte 2D
      this.canvas = document.createElement('canvas');
      document.body.appendChild(this.canvas);
      this.canvas.width = width;
      this.canvas.height = height;
      this.canvas.style.width = (width*scale)+"px";
      this.canvas.style.height = (height*scale)+"px";
      this.canvas.style.imageRendering = 'pixelated';

      this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  
      // Appeler la méthode gameLoop pour commencer la boucle de jeu
      this.gameLoop();
    }
  
    private gameLoop = (timestamp: number = 0) => {
      // Calculer le temps écoulé depuis la dernière frame en millisecondes
      if (!this.lastFrameTimeMs) this.lastFrameTimeMs = timestamp;
      this.deltaTime += timestamp - this.lastFrameTimeMs;
      this.lastFrameTimeMs = timestamp;
  
      // Limiter la boucle de jeu à 60 FPS
      while (this.deltaTime >= 1000 / this.fps) {
        this.update(this.deltaTime);
        this.deltaTime -= 1000 / this.fps;
      }
  
      // Appeler la fonction de rendu
      this.preDraw();
  
      // Appeler récursivement gameLoop pour la prochaine frame
      this.frameRequestID = requestAnimationFrame(this.gameLoop);
    };
  
    public update(_deltaTime:number) {
      // Mettre à jour la logique du jeu ici
    }
  
    private preDraw(){
      // Effacer le canvas à chaque frame
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw(this.ctx);
    }

    public draw(_ctx:CanvasRenderingContext2D) {
   }
  
    public stop() {
      // Arrêter la boucle de jeu
      cancelAnimationFrame(this.frameRequestID);
    }
  }