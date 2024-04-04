// Accessing context through "this"
let obj = {
    name : "zaheer",
    email : "abbasizaheer190@gmail.com",
    website : function(){
        console.log(`${this.name} wellcome to our website`);
        
    }
}
// obj.website();

// Arrow Function
let chai = () => {
    let username = "zaheer ahmad safeer";
    console.log(username);
}
chai();

let chai2 = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
}
console.log(chai2(5,5));

// Implicit Arrow Function

let chai3 = (num4, num5) => (num4+num5)
console.log(chai3(5,8));