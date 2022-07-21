const myfirstPromise = Promise.resolve("Hello World");
console.log(myfirstPromise);

// a rejected promise is an error
const myBrokenPromise = Promise.reject("Goodbye World");
console.log(myBrokenPromise);

console.log("code continues");

// what it resolves or rejects to as its parameters
const myRealPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("something went wrong"));
    }, 5000);
});

// to get access to the promises result, you can use .then on a promise, which will take in the parameter which is the value of the promises result, which will then be able to be used in a function
console.log(
    myRealPromise.catch((resolovedValue) => {
        console.log("im inside a catch block", resolovedValue);
    }),
);

// this is basically a try catch block
// NOTE: Catch block will also handle any errors that happen both in the promise and the then and the finally block, be sure to make the catch block at the end of the method chain
myRealPromise
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("do this anyways"));

console.log(
    myRealPromise.then(
        (resolovedValue) => {
            console.log("inside .then", resolovedValue);
        },
        (rejected) => console.log(rejected),
    ),
);
console.log("keep doing stuff while we wait");

// promises deal with error asyncronously
