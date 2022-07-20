// why would we want to iterate through an object?
// how can we iterate through an object?

const car = {
    brand: "Hyundai",
    model: "i30",
    release: 2018,
    isManual: false,
    color: "White",
    wheels: 4,
};

// how can we ge all the keys of an object?
// Object.key()

console.log(Object.keys(car));

console.log(car);
console.log(Object.keys(car).length);
console.log(Object.values(car));

// each element of the array will be an array of [key , value] pair
console.log("Returns an array of arrays", Object.entries(car));
console.log(Object.entries(car)[0]);
console.log(Object.entries(car)[0][0]);

// encrypting dictionary
const secretCode = {
    a: "f%)_#",
    b: "#$p$$",
    c: "@o$$@",
};
// we have enlish to code object
// we want an object that does code to english

// reverse keys and values
const reversedCode = Object.entries(secretCode).reduce((acc, [key, value]) => {
    // 0th - acc => {}
    // 1st - acc => ['a','f%)_#'] - acc => {'f%)_#': 'a'}
    // 2nd - acc => ['b','#$p$$'] - acc => {'f%)_#': 'a', 'b','#$p$$'}

    // object[key] = value
    // im not modifying an array but rather im making a new one, and im reversing the key and values to make a new key with the value

    acc[value] = key;
    return acc;
}, {});
console.log(reversedCode);
// how would we get a reversed dictionary of our secret code
