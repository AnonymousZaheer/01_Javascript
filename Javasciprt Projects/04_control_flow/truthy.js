// let username = "zaheer ahmad safeer";
// if (username){
//     console.log("Got user email.");
// }
// else{
//     console.log("Dont have user email")
// }

// falsy values
// false, 0, -0, null, undefined, NAN, ""

// truthy value
// "0", 'false', " ", [], {}, function(){}

//Nullish Coalescing Operator (??) (Note : this operator is new and specially designed to remove error when data is coming from database.)
val1 = 5 ?? 10;
val2 = null ?? undefined;
val3 = null ?? 40 ?? undefined;

// console.log(val1);
// console.log(val2);
// console.log(val3);

// Terniary Operator  -------------- >>> (condition) ? true : false   <<< ----------------------
const students = 60;
students >= 85 ? console.log("Going to trip") : console.log("Not going to trip");



