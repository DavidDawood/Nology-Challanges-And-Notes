let parent1 = "blue";
let parent2 = "blue";

let brown = 0;
let blue = 0;
let green = 0;

// possible solution to solution, you can also simply add the strings of parent1+parent2 to make a switch string case
switch (true) {
    case parent1 == "brown" && parent2 == "brown":
        brown = 75;
        green = 18.75;
        blue = 6.25;
        break;

    case (parent1 == "brown" && parent2 == "green") ||
        (parent2 == "brown" && parent1 == "green"):
        brown = 50;
        green = 37.5;
        blue = 12.5;
        break;

    case (parent1 == "blue" && parent2 == "brown") ||
        (parent2 == "blue" && parent1 == "brown"):
        brown = 50;
        green = 0;
        blue = 50;
        break;

    case parent1 == "green" && parent2 == "green":
        brown = "<1";
        green = 75;
        blue = 25;
        break;

    case (parent1 == "green" && parent2 == "blue") ||
        (parent2 == "green" && parent1 == "blue"):
        brown = 0;
        green = 50;
        blue = 50;
        break;

    case parent1 == "blue" && parent2 == "blue":
        brown = 0;
        green = 1;
        blue = 99;
        break;

    default:
        console.log("Please put in a valid input");
        return;
}

console.log(
    `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is ${brown}%, blue eyes is ${blue}%. and green is ${green}%`,
);

// ternary opertors, a true or false thing, if it is a truthy or a falsy value, if truthy do first one, if not do else, return the truthy or falsy value or a boolean
let decision = true;
let result = decision ? 20 : 10;
console.log(result);
