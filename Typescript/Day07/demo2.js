// Shallow Copy & Deep Copy 
var a = 10;
var b = a;
// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);
b = 30;
// console.log(`
//     a :: ${a}
//     b :: ${b}
// `);
var arr = [10, 20, 30];
var arr1 = arr;
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
var arr2 = arr.slice(0);
console.log("\n        arr :: ".concat(arr, "\n        arr2 :: ").concat(arr2, "\n"));
arr2[1] = 600;
console.log("\n        arr :: ".concat(arr, "\n        arr2 :: ").concat(arr2, "\n"));
