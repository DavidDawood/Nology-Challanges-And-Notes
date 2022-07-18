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
