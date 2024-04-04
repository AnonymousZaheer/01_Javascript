// To declare object there are two ways.

// 1. Object Litereals (Non Singleton object)
const jsUser = {
    Name : "Zaheer",
    University : "Abasyn University",
    Subject : "Software Engineering",
    Location : "Peshawar",
    Email : "abbasizaheer190@gmail.com",
    Company :"BellMedEx",
    Working_Days: ["Monday", "Tuesday", "Wednesday","Thursday","Friday"]
}
console.log(jsUser);
//First way to access object element.
// console.log(jsUser.Name);
// console.log(jsUser.Email);
// console.log(jsUser.Company);
// console.log(jsUser.Working_Days);

//Second way to access object element.
// console.log(jsUser["Name"]);

//Changing element values.
// jsUser.Name = "Safeer";
// console.log(jsUser.Name);

//Freezing value of object.
// console.log(Object.freeze(jsUser));
// jsUser.Name="Akbar";
// console.log(jsUser.Name);

//Adding function.
jsUser.greeting = function() {
    let greet = "Hello Js User";
    let name = `Respected Sir ${jsUser.Name}. Actually our company ${jsUser.Company} has finalized our working days that are : ${jsUser.Working_Days}.`
    return greet, name;
}
// console.log(jsUser.greeting());



// 2. Constructor (Non Singleton Object)
let object2 = new Object();