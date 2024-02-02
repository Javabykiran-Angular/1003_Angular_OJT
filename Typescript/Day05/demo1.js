//Anonymous Functions
// function does not have any name 
// that function execute there itself 
var temp1 = function () {
    console.log("u r in First Type of Function...");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(10, 20);
// console.log("Result :: "+res);
// fat arrow function/Arrow function
// It is advanced version of anonymous function
var temp3 = function () {
    console.log("u r in 1st type Fat arrow functions");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp4(40,5))
// optional parameter Functions
function add1(a, b) {
    console.log("value of a is " + (a)); // 10
    console.log("value of b is " + (b)); // undefined
    console.log("value of a+b is " + (a + b)); // NAN
}
// add1(10);
// add1(10,50);
function add2(a, b) {
    console.log("value of a is " + (a)); // 10
    console.log("value of b is " + (b)); // undefined
    console.log("value of a+b is " + (a + b)); // NAN
}
// add2(80);
//Default parameter function
function add3(a, b) {
    if (b === void 0) { b = 20; }
    console.log("value of a is " + (a)); // 10
    console.log("value of b is " + (b)); // undefined
    console.log("value of a+b is " + (a + b)); // NAN
}
// add3(70)
add3(70, 30);
