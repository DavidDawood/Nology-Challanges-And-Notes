// how do we handle errors
// try catch blocks deal with error syncronously aka doing it in one line
try {
    // block of code that might throw an error
} catch (error) {
    // catch the error that is thrown
    // what to do with the error
} finally {
    // block of code that will run, regardless of error or not
}

function greet(name) {
    if (typeof name != "string") throw new Error("name must be a string");
    return `${name}`;
}

try {
    const greeting = greet("David");
    console.log(greeting);
} catch (e) {
    console.log("Caught error:", e.message);
} finally {
    console.log("We'll do this always!");
}
try {
    const greeting = greet(56);
    console.log(greeting);
} catch (e) {
    console.log("Caught error:", e.message);
} finally {
    console.log("We'll do this always!");
}
