// y cannot be changed since it is immutable, where as x can because l is mutable (can be changed)
console.log("===================");
let x = 5;
console.log(x);

const y = 10;
// y = 5;
console.log(y);
console.log("===================");
for (let z = 0; z < 10; z++) {
    console.log(z);
}
console.log("===================");
console.log(typeof 5);
console.log(typeof "abcdefg");
console.log(typeof true);
console.log("===================");

// reserved keywords
// undefined;
// null;
// NaN;

// you can run this via the terminal by writing 'node [file name]'

let a = 1;
let b = 2;
console.log(a === b); // strict equality
console.log(a == b); // equality
console.log(a >= b); // greater than equal too

let outcome = a >= b;
console.log(typeof outcome);

let modulo = 10 % 2;

console.log("===================");

// true and false can be other values, like truthie and falsie, it can be 0, infinity etc
