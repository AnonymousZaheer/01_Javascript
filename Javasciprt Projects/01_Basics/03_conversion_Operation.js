let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Here it is telling me the data type of assigned variable.
console.log(valueInNumber); //Here it is telling me the value that it has been assign to this variable.

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("Checking the datatype of value: ",typeof booleanIsLoggedIn); // Checking the datatype of value.
console.log("Checking the value: ",booleanIsLoggedIn) //Checking the value

// 1 => True, 0 => False.
// "" => false, "asdfa" => True.

let someNumber = 33;
let someString = String(someNumber);

console.log(typeof someString);
console.log(someString);
console.log(25 + someString);

let num1 = 2;
let str1 = String(num1);
let sum = num1 + str1;
let convert = Number(sum);
console.log(3+convert);