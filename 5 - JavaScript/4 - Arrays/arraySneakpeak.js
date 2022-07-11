// loops are for executing multiple lines of code
// can be used to loop and count each time you go through a loop

// without loops

console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log("==============================");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("==============================");
let x = 0;
while (x <= 10) {
    console.log(x);
    x++;
}

console.log("==============================");

let arr = ["start", 4, 1, 10, 6, "hello", 4, 3, 2];
for (let z = 0; z < arr.length; z++) {
    console.log(arr[z]);
}

const [start, ...rest] = arr;
console.log(rest);
