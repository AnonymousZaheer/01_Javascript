let dateTime = new Date();
console.log("It give date without month and year : ",dateTime.getDate());   
console.log("It tells about day without month and year : ",dateTime.getDay()); 
console.log("It only tell the current year : ",dateTime.getFullYear()); 
console.log("Current Hour : ",dateTime.getHours()); 
console.log("Tell about : DAY, MONTH, DATE, YEAR, TIME : ",dateTime.toString());
console.log("Format of date is: Y : M : D : Time : ",dateTime.toISOString());
console.log("Format of date is: Y : M : D : Time : ",dateTime.toJSON());
console.log("Format of date is: Y : M : D : ",dateTime.toLocaleDateString());
console.log("Format Of date is : D : M : DATE : YEAR : ", dateTime.toDateString());

// Specifing formate of Date:
let RaufDateOfBirth1 = new Date(1991, 9, 18, 17); //Specified according to the array of date.
console.log("Rauf BellMedEx was born on : ",RaufDateOfBirth1.toDateString());
let RaufDateOfBirth2 = new Date("1991-09-18"); //Specified according to the array develop by my own.
console.log("Rauf Date Of Birth Seconds : ", RaufDateOfBirth2.getTime()/1000);

// TimeStamp
let myTimeStamp = Date.now()