// control flow
// true / false

let x = 1;
let y = 2;
let z = 3;

if (y !== 0 && x !== 0) {
    console.log(x / y);
} else {
    console.log("cannot compute 0");
}

console.log(y + z);

// we dont want to ever divide by 0

let currentAge = 15;
const ageRequirement = 18;
if (currentAge >= ageRequirement) {
    console.log("allowed into the party");
} else {
    console.log("not allowed into the party");
}
