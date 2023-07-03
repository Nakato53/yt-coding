export default interface IScene{
    update(dt:number):void;
    draw(context:CanvasRenderingContext2D):void;
}