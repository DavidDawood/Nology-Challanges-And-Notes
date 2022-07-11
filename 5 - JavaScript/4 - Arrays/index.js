let x = 1;
let y = "text";
let myArray = [1, "2"]; // values
let myArray2 = new Array(); // another way but its not that great

let myArrayArray = [
    [1, 2],
    [2, 3, 1],
]; // nested array

//how to access?
//console.log(myArray[0]);

let a = myArray.indexOf("2"); // will return 1
console.log(a);

// will add to the array at the end
myArray.push(1, 2, 3, 4, 5, 6, 7, "i am a value", "to remove");

// will remove the last index in the array
myArray.pop();

// for (i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// returns a false because 5 is a number but this is a string, but if its not a string it will return true
console.log(myArray.includes("5"));

// create two seperate arrays from an array
// push the value to the end of the first array

const myFirstArray = myArray.slice(0, 3);
const mySecondArray = myArray.slice(4, 8);

// joins two arrays together
myArray = myFirstArray.concat(mySecondArray);

console.log(myArray);
