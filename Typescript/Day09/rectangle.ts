import {Shape} from './shape';

export class Rectangle extends Shape
{
    length:number;
    breath:number;
    area:number;

    constructor(l:number,b:number){
        super();
        this.length=l;
        this.breath=b;
        this.area=0;
    }

    override myArea(): void {
        this.area=this.length*this.breath;

    }

    display(){
        console.log(`
            ---------- Rectangle Area----------
            Length      :: ${this.length}
            Breath      :: ${this.breath}
            Area        :: ${this.area}
        `)
    }

}