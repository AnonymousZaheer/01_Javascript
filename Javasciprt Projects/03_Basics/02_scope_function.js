//Type of Scope:
// 1. Global Scope
// 2. Block Scope

// Nested Scope.
one()
function one(){
    const username = "zaheer";
    function two()
    {
        const email = "abbasizaheer190@gmail.com";
        console.log(username);
    }
    // console.log(email);
    two()
}


// second way to build function.
const newfunc = function(num){
    return num+1;
}
console.log(newfunc(10));

// NOTE: Difference between these two function is that k hum 1st function ko uske scope se pehle call kr skte hain but 2ns function ko hum scope se pehle call nahi kr skte.
