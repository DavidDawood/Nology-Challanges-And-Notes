// what are promises?
// what is asyncronous programming?
// what is blocking vs non blocking code
// why do we need promises?
// what is an API - but that might come later

// some code that blocks the main thread.
function wait(ms) {
    let start = Date.now();
    let now = start;

    while (now - start < ms) {
        now = Date.now();
    }
}
// console.log("Start my program");
// wait(3000);
// console.log("Continue doing stuff");

// document.getElementById("myButton").addEventListener("click", () => {
//     wait(2000);
//     alert("you clicked on the button");
// });

// we can defer tasks for later
console.log("Start my program");
// run a function after 3 seconds but dont block code
setTimeout(sayHello, 3000);
console.log("Keep running my program");

function sayHello() {
    console.log("Hello World");
}

// any sort of time out or waiting will always be last, even if its delayed by 0 seconds, anything after without wait will come first

// one of the ways to handle async processes is with promises
// a promise is an abstraction
// it is also like the english word

// a promise has 3 possible states
// pending
// rejected
// fufilled or resoloved
// A promises state is immutable
