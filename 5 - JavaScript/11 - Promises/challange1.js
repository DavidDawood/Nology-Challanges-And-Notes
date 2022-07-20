// create a function called delayedIncDec(n,mode,timeout) which returns a promise : Promise<number>

// n - a number
// mode - a string. "inc" or "dec" and this will changethe functionality
// inc will cause the function to incremenet the number by 1
// dec will cause the function to decremenet the number by 1
// timeout - will delay the time in milliseconds (how long until the promise resolves)
// timeout should have a default value of 2.5 seconds if not provided

// call this function three times with different numbers, modes and timeouts
// after each promise resolves print the resolve number to the console

delayedIncDec(15, "inc", 2000).then((value) => console.log(value));
delayedIncDec(15, "dec", 2000).then((value) => console.log(value));
delayedIncDec(15, "asd", 2000).then((value) => console.log(value));

function delayedIncDec(n, mode, timeout) {
    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
            try {
                if (mode == "inc") {
                    resolve(++n);
                } else if (mode == "dec") {
                    resolve(--n);
                } else {
                    throw new Error("use correct mode!");
                }
            } catch (error) {
                console.log(error);
            }
        }, timeout);
    });
    return myPromise;
}
