// Functions
// function first() {
//     console.log("Hello");    
// }
// first()

//Function without return
function  second(num1 , num2) {
    const num3 = num1 + num2; 
    console.log(num3);
}
// second(3,4);

//Function with return
function  third(num1 , num2) {
    const num3 = num1 + num2;
    return num3 
}
// console.log(third(3,4));

//Example in Fuction
function four(username = "sam") {
    if (!username){
        console.log("Please Enter User Name.")
    }
    else{
        console.log(`${username} you logged In`)
    }
}
// four();
// four("Zaheer");

///Rest Operator
function five(...num1){
    return num1;
}
// console.log(five(200, 400, 600));


// Object and Functions
let obj1 = {
    name : "zaheer ahmad safeer",
    email : "abbasizaheer190@gmail.com"
}
function call_obj(user){
    return `Hello ${user.name}. I have send some documents on your email ${user.email}`;
}
console.log(call_obj(obj1));

// array and functions
let arr1 = ['zaheer','nowshera', '+9234856789', 'BellMedEx'];
function function_arr (call_arr) {
    let firstvar = call_arr[0];
    let secondvar = call_arr[1];
    let thirdvar = call_arr[2];
    let fourvar = call_arr[3];
    console.log(firstvar,secondvar,thirdvar,fourvar);
}
function_arr(arr1);