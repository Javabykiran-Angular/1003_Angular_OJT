// Shallow Copy & Deep Copy 

let a=10;
let b=a;

// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);

b=30;
// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);

let arr:number[]=[10,20,30];
let arr1=arr;

// console.log(`
//         arr :: ${arr}
//         arr1 :: ${arr1}
// `);

// arr1[1]=500;

// console.log(`
// --------------------
//         arr :: ${arr}
//         arr1 :: ${arr1}
// `);

let [...arr2]=arr;

console.log(`
        arr :: ${arr}
        arr2 :: ${arr2}
`);

arr2[1]=600;
console.log(`
        arr :: ${arr}
        arr2 :: ${arr2}
`);