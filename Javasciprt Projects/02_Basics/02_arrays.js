//Using concatinating arrays:
let arr1 = ['a','b','c','d','e','f'];
let arr2 = ['Ammar','Bilal','Careem','Daniyal','Etheraam','Faisal'];
let arr3 = ['America','Bangladesh','Canada','Denmark','England','Fineland'];
// Using Concatenation : (It only concatenate two arrays)
let concatenate = arr1.concat(arr2)
console.log(concatenate);
// Using Spread : (It combine two or more than two arrays)
const Spread = [...arr1, ...arr2, ...arr3]
console.log(Spread);

console.log();
// Using "FLAT" to convert multi dimentsional array into single array.
let arr4 = ['a','b',[1,3,4,5,['c','d','e'],6,7,8],'f','g'];
let com_mul_arr = arr4.flat(Infinity);
console.log(com_mul_arr);
console.log(arr4[2][4][2]);

console.log();

// Other Methods in Array:

let arr5 = "This is BellMedEx Pakistan";
// Checking either it is array.
let Is_Array = Array.isArray(arr5);
console.log(Is_Array);
// Converting in array.
let convert_In_Array = Array.from(arr5);
console.log(convert_In_Array);
// Putting variable in array.
const num1 = 100;
const num2 = 200;
const num3 = 300;
let arr6 = Array.of(num1,num2,num3);
let arr7 = [num1, num2, num3];
console.log(arr6);
console.log(arr7)
