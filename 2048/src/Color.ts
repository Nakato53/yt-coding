const BoardColor = '#B4A897';

type CellColor = {
    key:number;
    color:string;
}

const CellColors:Array<CellColor> = [
    {key:0,color:'#C7BAAE'},
    {key:2,color:'#ECE1D7'},
    {key:4,color:'#E6D9C2'},
    {key:8,color:'#F2B178'},
    {key:16,color:'#F59562'},
    {key:32,color:'#F67C5E'},
    {key:64,color:'#F65E3C'},
    {key:128,color:'#EED072'},
    {key:256,color:'#EECD63'},
    {key:512,color:'#ECC84F'},
    {key:1024,color:'#EDCF6B'},
    {key:2018,color:'#EECD5F'},
];

export {CellColors,BoardColor}
