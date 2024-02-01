// Functions
// 1 functions without parameter & without Return Type
// 2 functions with parameter & without Return Type
// 3 functions without parameter & with Return Type
// 4 functions with parameter & with Return Type

// 1 functions without parameter & without Return Type

function add1(){
    console.log("U r in First Type Function");
}

// add1();

// 2 functions with parameter & without Return Type

function add2(a:number,b:number){
    console.log("Addition of "+(a+b));
}

// add2(10,20);

// 3 functions without parameter & with Return Type

function add3():number{
    return (8+8);
}

let res=add3();
// console.log("Result is "+res);

// 4 functions with parameter & with Return Type

function add4(a:number,b:number):number{
    return (a+b);
}

console.log(`
            Addition is :: ${add4(10,5)}
`)
