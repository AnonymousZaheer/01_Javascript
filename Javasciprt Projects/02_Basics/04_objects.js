// 2. Constructor (Non Singleton Object)
const tinderUser = new Object();
tinderUser.name = "Zawar"
tinderUser.Subject = "Software Engineering"
tinderUser.University = "Abasyn University"
// console.log(tinderUser);

//Nesting Objects:
const regularUser = {
    email : {
        gmail : "zaheerahmadsafeer@gmail.com",
        hotmail : "zaheerahmadsafeer@hotmail.com",
        yahoo : "zaheerahmadsafeer@yahoo.com"
    },
    name : {
        half_name : "zaheer ahmad",
        full_name : "zaheer ahmad safeer"
    },
    phone_number : {
        telenor : "0312-55552212",
        ufone : "0333-2222222",
        zong : "0345-6978456"
    }
}
// console.log(regularUser.email.yahoo);

//combine objects:
//1st Method
let obj1 = {1:"a", 2:"b", 3:"c", 4:"d"}
let obj2 = {5:"e", 6:"f", 7:"g", 8:"h"}

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

//2nd Method
let obj3 = {...obj1,...obj2};

console.log(obj3);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty("2"));



