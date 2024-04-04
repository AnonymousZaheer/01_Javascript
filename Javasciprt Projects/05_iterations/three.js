// for of
//Example 1
const arr = [,1,2,3,4,5]
for (const item of arr) {
    // console.log(item);
}
// Example 2
let val = " zaheer ahmad"
for (const v of val) {
    // console.log(v);
}

//For of Loop on Map

// Map (There known by their unique values)
const maps = new Map();
maps.set('IN','India');
maps.set('PK','Pakistan');
maps.set('Fr','France');
maps.set('Afg','Afghaninstan');
// console.log(maps);
// console.log(maps.keys());
// console.log(maps.values());

const map1 = new Map();
map1.set('Name','Zaheer Ahmad Safer');
map1.set('University','Abasysn University');
map1.set('Company','BellMedEx');
for (const key of map1) {
    // console.log(key);
    // console.log(key[1]); 
}
// Accessing keys.
for (const [key] of map1) {
    // console.log(key); 
}

// Accessing object values from "for in"
const objNew = {
    name : "zaheer",
    university : "abasyn university",
    subjects : "48"
}
for (const key in objNew) {
    console.log(key, objNew[key]);
}
