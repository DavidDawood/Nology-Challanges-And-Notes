// what is async await
// how do we write it
// why is it good/what is it good for?

// Async await is JUST syntactic sugar
// you need to understand promises
// ES2017
// considered better practice than just promises

// ASYNC
// used at the start of a function definition

async function myFunction() {}
const myOtherFunction = async () => {};

// EVERY async function always returns a promise
async function TheAnswer() {
    return 42; // return value is turned into a promise that resolved to that value
}
const result = TheAnswer();
result.then((num) => console.log(num));
console.log(result);

const ohNo = async () => {
    throw new Error("Oops"); // thrown error turns into a promise that always rejects
};
ohNo()
    .then(() => console.log("hello"))
    .catch(() => console.log("Error!"));

// Async on its own its not very useful

// AWAIT
// we can ONLY use await, inside async functions
// await PAUSES the execution of our code
// until the promise we're waiting for is resolved

const slowAddition = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, 1500);
    });
};

async function printAnswer(a, b) {
    console.log(`waiting for the answer to ${a} + ${b}`);
    const answer = await slowAddition(a, b); // we stop and wait for the answer to resolve, returns a promise, await waits for a fufilled promise
    console.log("answer is", answer);
}

console.log("Starting...");
printAnswer(5, 3);
