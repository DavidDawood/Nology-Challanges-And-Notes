console.log(2 == "2"); // true, string is converted to number
console.log(2 === 2); // true, they are same referance aka primitives
console.log(2 === "2"); // false, one is a string data the other is a number
console.log("2" + 3 == 23); // true, 2 + 3 is a string, so the string value is equal to 23 number
console.log("2" + 3 === 5); // false, 2+3 is 23, 23 === 5 isnt the same amount
console.log(10 % 3); // 1 truthy, its a remainder of 1 , which is a positive
console.log(10 % 3 === 1); // true, remainder is 1, same referance
console.log((100 % 7) % 5); // true, comes up with 2 which is a truthy
console.log((100 % 7) % 5 !== 0); // false, value is 0, is saying is it not equal to 0 as a referance which is true
console.log((100 % 7) % 9 == 2); // false, 1 does not equal 2
console.log(!(10 % 2)); // false , 10 % 2 is a 0, but the ! turns it into a false
console.log(!!!!((10 % 7) % 3));
// true , whatever the value at the end is, if its a falsy it will invert to truthy with ! and vice versa, it was false, true, false, true, which was the answer from the !!!!

console.log(10 % 3 === -1 % 2); // false, 1 isnt the same as -1
console.log((892783 != "89278" + 3) == 0); // false, is a false, where a boolean of false isnt equal to 0, which is a number despite being a falsy
console.log(true && false); // false, unless both of them are true, it will result to the last false which is false
console.log(false || true); // true, since one of them is true, it will take the last known true, the last one
console.log(true || false); // true, will take the first true
console.log(true || false + true); // true again
console.log(true * false && false + true);
// 0 , its a falsy, but the thing doesnt make sense since it is using maths for true and falsem and since its an &&, both need to be true

console.log(10 && 123 && -1 && 3); // 3, makes no sense so it takes the last value that isnt a falsy
console.log(10 && 123 && 0 && 3); // 0, since 0 is a falsy, and its all &&, will take the last known falsy
console.log((10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1); //0, since 123 || 0 is 0, and 10 isnt 0, parsint is also 0, and thus is a 0
console.log(3 && "Calum" && ("" || 26)); // 0, 3 and calum is a 0, so falsy of 0
console.log(3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")));
// since they are all falsy, or 0, it is the last known 0, or falsy, which is cat dog, the "" + 1 is a string of 1, but since there is a &&, it is simply CatDog

// false == 0 will be true since falsy is 0
// flase === 0 will be false since boolean and number isnt the same
