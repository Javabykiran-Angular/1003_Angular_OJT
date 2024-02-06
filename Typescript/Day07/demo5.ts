// Json Object => java script Object Notation
// It store data in key & value 

let jsonObj={
    id:9,
    "fname":'Sumit',
    lname:'Raokhande'
}

// 1 Using dot operator 
// 2 using Square operator


// 1 Using dot operator 

// console.log(`
//     Id             :: ${jsonObj.id}
//     First name     :: ${jsonObj.fname}
//     Last name      :: ${jsonObj.lname}
// `);

// 2 using Square operator

console.log(`
    Id             :: ${jsonObj['id']}
    First name     :: ${jsonObj["fname"]}
    Last name      :: ${jsonObj['lname']}
`);