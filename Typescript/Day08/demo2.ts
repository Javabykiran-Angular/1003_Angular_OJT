class Myclass{
    id:number;
    fname:string;
    lname:string;

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

let obj=new Myclass(9,'Sumit','Raokhande');
obj.display();

