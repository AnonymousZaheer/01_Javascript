// For Each Fuction
let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(function (item) {
//     console.log(item);
// });
arr.forEach(function (item,index,arr) {
    // console.log(item,index,arr);
});

//Accessing array object from for each loop. For each doesnt return any value.
let arr2 = [
    {
        name:'Zaheer',
        university:'Abasyn'
    },
    {
        name:'Wahab',
        university:'Wali Khan'
    }
]
arr2.forEach((item) => {
    console.log(item.name);
});