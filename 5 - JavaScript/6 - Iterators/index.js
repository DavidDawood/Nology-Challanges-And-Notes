// Iterators

// what are iterators
// why should prioritize using iterators over loops
// which iterator can we use?
// how to use iterators

// Array methods
// push, unshift, shift, pop, slice

// Iterator is an array method that will run through every item inside the array

const nums = [1, 2, 3, 4, 5];

// We want to increment the value of each number inside our original by one and return a new array with all these values inside

const incrementNum = [];
for (let i = 0; i < nums.length; i++) {
    incrementNum.push(nums[i] + 1);
}

console.log("Incrementing with a for loop: ", incrementNum);

// We want to get the value of each number inside our original squared and return a newa rray with all these values inside

const squaredNums = [];
for (let i = 0; i < nums.length; i++) {
    squaredNums.push(nums[i] ** 2);
}
console.log("Squared with a for loop: ", squaredNums);

// for every item inside an array, trigger a function for to that item
const myMap = (array, func) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const newValue = func(currentItem);
        newArray.push(newValue);
    }
    return newArray;
};

const increment = (n) => n + 1;
const squared = (n) => n ** 2;

// NOTE: Arrays already have a map function
console.log("Using my own Map implementation: ", myMap(nums, increment));
console.log("Using my own Map implementation: ", myMap(nums, squared));
console.log("Using library map():", nums.map(squared));
console.log(
    "Using library map():",
    nums.map((num) => num + 1), // num in this case is the indexer as it is in a custom function
);

//nums.map(element,index,array) => {};

// How do we check if atleast one value inside of an array passes a chertain test

const mySome = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const passedTest = func(currentItem);

        if (passedTest) return true;
    }
    return false;

    // return boolean
};

// some allows to have a checker that a function runs uses to return true
console.log(
    nums.some((n, index) => {
        console.log(index);
        return n % 3 === 0;
    }),
);

const students = ["Matias", "David", "Laila", "Connor", "Darcy"];

const doesOneStudentsNameStartsWithAnM = students.some((student) => {
    return student.charAt(0).toLowerCase() == "m";
});

console.log("name starts with an M", doesOneStudentsNameStartsWithAnM);

// for every()

const myEvery = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const passedTest = func(currentItem);

        if (!passedTest) return false;
    }
    return true;
};

// we want to check if all my students have a 6 letter name

const sixLetterName = students.every((student) => student.length === 6);
console.log("6 letter name", sixLetterName);

// reverse()
const reverseOrder = (toReverseArr) => {
    const newArr = [];
    for (let i = toReverseArr.length - 1; i >= 0; i--) {
        newArr.push(toReverseArr[i]);
    }
    return newArr;
};

// students.reverse() modifies the original while the reverse order one above doesnt
console.log(students.reverse());
console.log(students);

// reverse in place, mutating original array

const reverseWhile = (array) => {
    let head = 0;
    let tail = array.length - 1;

    while (head < tail) {
        const last = array[tail];
        array[tail--] = array[head];
        array[head++] = last;
    }

    return array;
};

console.log("re-reversing student list", students);
console.log("re-reversing student list", reverseWhile(students));
