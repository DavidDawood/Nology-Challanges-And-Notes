let student1 = "Samuel";
let student2 = "Sophie";
let student3 = "David";

console.log(introduction(student3));
console.log(ternary(3));

function introduction(name) {
    return `Hi, my name is ${name}`;
}

function ternary(number) {
    // is a truthy so it returns the number, not the text
    return number > 0 ? "is a positive" : "is a negative";
}
