//Anonymous Functions
// function does not have any name 
// that function execute there itself 

let temp1= function (){
    console.log("u r in First Type of Function...")
}

// temp1();

let temp2= function (a:number,b:number):number{
    return (a+b);
}

let res=temp2(10,20);
// console.log("Result :: "+res);

// fat arrow function/Arrow function
// It is advanced version of anonymous function

  let temp3=  ()=>{
        console.log("u r in 1st type Fat arrow functions")
    }

    // temp3();

   let temp4=(a:number,b:number):number=>{
        return (a+b);
    }

    // console.log("Addition is "+temp4(40,5))

// optional parameter Functions

function add1(a:number,b?:number){
    console.log("value of a is "+(a)) // 10
    console.log("value of b is "+(b)) // undefined
    console.log("value of a+b is "+(a+b!)) // NAN
}

// add1(10);
// add1(10,50);

function add2(a?:number,b?:number){
    console.log("value of a is "+(a)) // 10
    console.log("value of b is "+(b)) // undefined
    console.log("value of a+b is "+(a!+b!)) // NAN
}

// add2(80);


//Default parameter function

function add3(a:number,b:number=20){
    console.log("value of a is "+(a)) // 10
    console.log("value of b is "+(b)) // undefined
    console.log("value of a+b is "+(a+b)) // NAN
}

// add3(70)
// add3(70,30)

// add3()

function add4(a:number=70,b:number){
    console.log("value of a is "+(a)) // 10
    console.log("value of b is "+(b)) // undefined
    console.log("value of a+b is "+(a+b)) // NAN
}