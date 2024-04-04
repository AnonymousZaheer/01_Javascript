// //Modernway of using String.
// let course = "Software Engineering";
// let university = "Abasyn University";

// let value = `I have done ${course.toUpperCase} from ${university}`;
// console.log(value);

const value1 = new String('BellMedEx-Pakistan');
// console.log(value1.indexOf('e'));
// console.log(value1.charAt(5));
// console.log(value1.replace('k','b'));
// console.log(value1.toUpperCase());

// const newString = value1.substring(0,4);
// console.log(newString);

const newstring1 = "     zaheer      ";
console.log(newstring1);
console.log(newstring1.trim());

const value3 = new String("Best Medical Billing");
console.log(value3);
console.log(value3.valueOf());

let word = "The fastest animal on earth is Cheetah";
let word_change = word.includes('fastest');
if (word_change == true) {
    console.log(word.replace('fastest', ('fastest'.toUpperCase())));
}

let word2 = "The fastest animal on earth is cheetah";
console.log(word2.split(' '));



