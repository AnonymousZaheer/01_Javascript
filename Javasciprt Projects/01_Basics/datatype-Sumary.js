//Primitive (They are call by value)

// 7 types: String, Numbher, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

// Reference Type (Non Primitive)

// Array, Objects, Functions
 
const heros = ["Zaheer", "Saad", "Hamza"];
let myObj = {
    name : "zaheer",
    age : "23",
}
console.log(myObj.age);
const myFunction = function(){
    console.log("Hello World");
}



// Memory Allocator

// Two types of Memory 1) Stack (Primitive) (From here we got the copy of the memory)  2) Heap (Non-primitive) (From here we got the reference of that memory)

// Stack Example:
let name = "zaheer";
console.log(name);
let fullName = name;
console.log(fullName);
fullName = "Zaheer Ahmad Safeer"
console.log(fullName);

//Heap Example:
let userOne = {
    Name : "zaheer ahmad safeer",
    Email : "abbasizaheer190@gmail.com",
}
console.log(userOne.Email);
let userTwo = userOne;
userTwo.Email = "zaheerahmadsafeer1@gmail.com";
console.log(userOne.Email);
console.log(userTwo.Email);