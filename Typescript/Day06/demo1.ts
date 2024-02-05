// let a:number[]=[10,20,30,40,50];

// a.forEach((myvalue,i,arr)=>{
//     console.log(myvalue+" Index "+i+" arr is "+arr);
// });

// Rest parameter Function

function display(...item:number[]){
    console.log(item)

}

// display(10,50,78,90);


// push & pop Method
// u can add data dynamically into the array 
// LIFO Principal => Last in First out 

// let a:number[]=[];

// a.push(40);
// console.log(a);
// a.push(45,85,63);
// console.log(a);
//  let res= a.pop();

//  console.log(a);
//  console.log("Poped value is "+res);

// Splice
// let a:number[]=[10,30,45,78];
// console.log(a);

// a.splice(2,0,50);
// console.log(a);
// a.splice(1,0,90,99,41);
// console.log(a);

// a.splice(1,1);
// console.log(a);

// a.splice(1,2);
// console.log(a);

// a.splice(1,1,100);
// console.log(a);

// a.splice(1,1,200,900);
// console.log(a);

//slice
// if u want copy a section of data then u go for slice method 

let course:string[]=["Core java",'Html,CSS,Mysql, JS','Advanced Java','Angular','AWS','Docker','Jenling','Jetty'];

let temp=course.slice(1,6);
// console.log(`
//     Original Array  
//             ${course}
    
//             Copied Array 
//             ${temp}
// `);

let temp2= course.slice(2);
// console.log(`
//     Original Array  
//             ${course}
    
//             Copied Array 
//             ${temp2}
// `);


// Map Method
// Element by element operation to be performed 
// It works on Array 

let a:number[]=[2,3,4,5,6];

let temp3= a.map((value)=>{
    return (value*value);
});
console.log(a);
console.log(temp3);





