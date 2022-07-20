const firstcoach = {
    firstname: "Remi",
    lastName: "Hoeppe",
    age: 18,
    isFrench: true,

    DisplayName() {
        return `My name is ${this.firstname} ${this.lastName}`;
    },

    AddAge(age) {
        this.age += age;
    },
};

console.log(firstcoach.DisplayName());
console.log(firstcoach.age);
firstcoach.AddAge(5);
console.log(firstcoach.age);

// creating an object with function, aka a constructor, not related to the top one
function Coach(
    firstName = "no first name",
    surname = "no last name",
    city = "homeless",
    age = 0,
) {
    this.firstName = firstName;
    this.lastName = surname;
    this.city = city;
    this.age = age;
}
// the prototype allows for classes to have methods, unlike the coach object above, if it is dynamic you have to do it this way
Coach.prototype.getFullName = function () {
    return `My name is ${this.firstname} ${this.lastName}`;
};

// you can set defaults like above, but you cant skip it aka have overrides
const coach2 = new Coach("David", "Dawood", "Gold Coast", 21);
console.log(coach2);

const coach3 = new Coach("Callum", "Shores");
console.log(coach3);

// can pass undefined to use default
const coach4 = new Coach("Callum", undefined, undefined, undefined);
console.log(coach4);

console.log(coach2.getFullName());

// more from protype can be used, but in this case its just a bool check
console.log(
    `Coach object has property of name: ${coach2.hasOwnProperty("name")}`,
);
console.log(
    `Coach object has property of firstName: ${coach2.hasOwnProperty(
        "firstName",
    )}`,
);

// can check if true or false simply by checking if its undefined or falsy
console.log(
    coach2["lName"]
        ? "i can check this way and is true"
        : "i can check this way and is false",
);
console.log(
    coach2["lastName"]
        ? "i can check this way and is true"
        : "i can check this way and is false",
);

// a value needs to be added or else the key wont be made
coach2.newKey;
console.log(coach2["newKey"]);

coach2.newKey = "i exist";
console.log(coach2["newKey"]);

const city = {
    name: "Sydney",
    state: "NSW",
    population: 5.4,
    peoplePerSqKm: 442,
    weather: "floods",
};

console.log(city);

// we want to change the name of the peoplePerSqKm to density, so grab the key of one property, then the rest then make that equal
const { peoplePerSqKm, ...otherProperties } = city;
console.log(peoplePerSqKm);
console.log(otherProperties);

const Sydney = {
    ...otherProperties,
    density: peoplePerSqKm,
};
console.log(Sydney);

// how to delete keys on an object?
const { weather, ...other } = Sydney;
console.log(other);

// or you can do it this way, but is unsafe

delete Sydney.weather;
console.log(Sydney);
