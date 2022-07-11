// idiomatic, means expressive code, expressive means that you can do more for less, so like python, its very expressive as a single line of code can do something another language can do in 30 lines of code

// rest, spread operators
const arr = [1, 2, 3, 4];
// get first item in array
arr[0];
arr.at(0);

// allows you to allocate variables for in the array
const [first, second, ...rest] = arr;

console.log(first);
console.log(second);
console.log(rest);

const hobbies = ["lego", "guitar", "programming"];
const [firstHobby, ...restOfHobbies] = hobbies;

console.log(firstHobby);
console.log(restOfHobbies);

// get all of the hobbies inside of rest of hobbies, and have it all dumped into swapped, thus moving all stuff after the first, and re-assigning back to itself
const swapped = [...restOfHobbies, firstHobby];
console.log(swapped);

// get the rest of it, and get the reverse, once its reversed, the [last] is the first selected thing
const [last] = [...hobbies].reverse();
console.log(last);
