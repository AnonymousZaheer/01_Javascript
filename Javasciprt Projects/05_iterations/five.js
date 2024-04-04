const myNums = [1,2,3,4,5];
const myTotal = myNums.reduce(function (accumulator,currentvalue) {
    console.log(`accumulator : ${accumulator} and current value : ${currentvalue}`);
    return accumulator + currentvalue
}, 0)
console.log(myTotal);