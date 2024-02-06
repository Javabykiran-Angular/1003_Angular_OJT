// Array Destructor
let a:number[]=[10,20,30]

let [t1,t2,t3]=a;

// console.log(`
//         t1 :: ${t1}
//         t2 :: ${t2}
//         t3 :: ${t3}
// `);

let [s1,...arr]=a;
console.log(`
    s1 :: ${s1}
    arr:: ${arr}
`)