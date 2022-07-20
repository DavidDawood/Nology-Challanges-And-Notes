const arrOne = ["a,c,b,d,1,4,2"];
const value2 = "ab4123aasbasddf1f23";

const filterNumbers = (arr) => {
    return arr.map((x) => x.replace(/[^a-zA-Z]/gm, ""));
};
const delayedFilter = (array, callback, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(array)) {
                resolve(callback(array));
            } else {
                reject(new Error("not an array!"));
            }
        }, timeout);
    });
};

const promise2 = delayedFilter(arrOne, filterNumbers, 2000);
promise2
    .then((value) => console.log(value))
    .catch((error) => console.log("something went wrong: ", error.message));

const promise = delayedFilter(value2, filterNumbers, 500);
promise
    .then((value) => console.log(value))
    .catch((error) => console.log("something went wrong: ", error.message));

//Create a function called delayedFilter(array, callback, timeout) returns a promise Promise<array>
//array: List to be filtered
//callback: function to filter with
// timeout: the delay time, should default to 2.5 seconds
// Call this function twice with different arrays, callbacks and timeouts
// After each promise resolves print the list to the console
// BONUS: throw an error if the callback is not a function
