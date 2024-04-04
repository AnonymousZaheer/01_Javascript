// //Array

// //First way of declaring Array:
// const arr1 = [0,1,2,3,4,5,6,7,8,9];
// console.log(arr1[2]);
// console.log(arr1);

// // Second way of declaring Array:
// const arr2 = new Array(5,8,9,"Wahab","Akbar", true);
// console.log(arr2[5]);
// console.log(arr2);

// // Mutli item array
// const multiarr = [54,12,35,68,85,"Ahmad", "Saad", "Ilyas", "Zawar", true];
// console.log(multiarr);

//----------------------------Array Methods---------------------------------

//Push Method:

const arr3 = [];
//Push Method (Put Data one by one in list)
arr3.push('a'); 
arr3.push('b'); 
arr3.push('c'); 
arr3.push('d'); 
arr3.push('e');
//Pop Method (Del last item of list)
arr3.pop();
console.log(arr3);
console.log();

const arr4 = [];
//unshift Mehtod (it add data from first index of array)
arr4.unshift('a');
arr4.unshift('b');
arr4.unshift('c');
arr4.unshift('d');
//Shift Method (it del data from first index)
arr4.shift()
console.log(arr4);

// Other Methods
console.log("Value is present in the array : ",arr4.includes(9));
console.log("Value is present on which index : ",arr4.indexOf(9));
console.log("Value is present on which index : ",arr4.indexOf('a'));

//Using join
console.log();
let arr5 = ['z','a','h','e','e','r'];
let new_arr5 = arr5.join();
console.log("As Join Convert the array into String : ",new_arr5);
console.log(typeof new_arr5);
console.log(arr5);

//Using Slice and Splice
console.log();
let arr6 = [0,1,2,3,4,5,6,7,8,9];
console.log("Displaying Array : ", arr6);
console.log("Slice make a copy of section of array : ", arr5.slice(1,4));
console.log("Splice take out a section of array from array : ",arr6.splice(1,4));
console.log("Displaying array after using splice function : ",arr6);
