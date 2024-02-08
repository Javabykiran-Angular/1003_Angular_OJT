export class Myclass{
   public id:number;
   private fname:string;
   protected lname:string;

    // constructor(){
    //     console.log("Const is called ");

    // }
    
     constructor(id:number,f:string,l:string){
        this.id=id;
        this.fname=f;
        this.lname=l;
    }


    display(){
        console.log(`
            ID          :: ${this.id}
            First Name  :: ${this.fname}
            Last name   :: ${this.lname}
        `)
    }

}

// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();

export function add(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;


