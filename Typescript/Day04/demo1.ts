// literal
var a:number | string;
a=2.5;
a='Sumit';
// a=true;

var str:string | null;

var num:50|boolean;
num=50;
num=true;

//Type Assertion 

// any/ Object/ Unknown
// It is used to tells to the compiler to convert a particular data type as per our requirement.
var c:any;

//1 Angle Bracket Syntax 
    // we used in Typescript

  var temp=(<string> c);  
//   temp.

//2 as syntax
    // u can use in ts file as well as html file
    
    var temp1=(c as string);
    // temp1.

 //Operators
// Airthamthic => +,-,*,/,%
// bitwise => &,|,^,~,>>,<<
// logical => &&,||,!
// Relational => <,>,<=,>=,!=,==(It checks only value of variable),===(Strongly equality it checks data as well as its data type  )
// Assignment => =,+=,-=,*=,/=,%=
// unary => post/pre inc/dec ++a,a--
// ternary => condition?expression1:expression2

// Control Statement/ Sequential statement
// if,if-else,switch,continue,nested if-else,break

var d=21;
// if(d<4){
//     console.log("Condition is true")
// }else{
//     console.log("Condition is false")
// }

var choice=21;
// switch(choice){
//     case 1:console.log("Ur in case 1");
//             break;
//     case 2:console.log("Ur in case 2");
//             break;
//     default : console.log("U r in Default Case...")
//             break;           

// }

// Loop Statement
// while,do-while,for,foreach
var count=5;

// while(count!=0){
//     console.log("Count is "+count);
//     count--;    
// }

// do{
//     console.log("Count is "+count);
//     count--; 
// }while(count!=0);

//for loop

// for(var i=0;i<4;i++){
//     console.log("Value of i is "+i);
// }
 
// console.log("Value of i  is After the Loop "+i)
// scope of var => It's scope is global

// let keywards 
// scope => within nearest block ({})

let b;

for(let i=0;i<4;i++){
    console.log("Value of i is "+i);
}
// console.log("Value of i  is After the Loop "+i);

// const => it works like ur final keyword 
// scope => Global as well as local scope 
const pi=3.14;




