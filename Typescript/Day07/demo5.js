// Json Object => java script Object Notation
// It store data in key & value 
var jsonObj = {
    id: 9,
    "fname": 'Sumit',
    lname: 'Raokhande'
};
// 1 Using dot operator 
// 2 using Square operator
// 1 Using dot operator 
// console.log(`
//     Id             :: ${jsonObj.id}
//     First name     :: ${jsonObj.fname}
//     Last name      :: ${jsonObj.lname}
// `);
// 2 using Square operator
console.log("\n    Id             :: ".concat(jsonObj['id'], "\n    First name     :: ").concat(jsonObj["fname"], "\n    Last name      :: ").concat(jsonObj['lname'], "\n"));
