// complex data - arrays of objects
// what are arrays of objects?

const coaches = [
    {
        id: 1,
        firstName: "Martyna",
        lastName: "Krol",
        age: 19,
        title: "Junior Coach",
    },
    {
        id: 2,
        firstName: "Sandra",
        lastName: "Myrdra",
        age: 23,
        title: "Junior Coach",
    },
    {
        id: 3,
        firstName: "Calum",
        lastName: "Hill",
        age: 24,
        title: "Senior Coach",
    },
];
console.log(coaches[1]);

// why do we use arrays of objects?
// when we want to group/list a set of entities together

// how can we access data inside of arrays of Objects

console.log(
    "only Senior Coaches: ",
    coaches.filter((coach) => coach.title.includes("Senior")),
);

console.log(
    "Coaches younger than 24: ",
    coaches.filter((coach) => coach.age < 24),
);

// how can we look for a specific key inside an object>
console.log(
    "Find by id: ",
    coaches.find((coach) => coach.id == 2),
); // returns Sandra object

console.log(
    "Find by id: ",
    coaches.find((coach) => coach.id == 500),
); // returns undefined

// we want a function that lets us search for a coach by id: if the id exists we want to return that coach; if the id doesnt exist we want to throw an error

const findCoach = (id, array) => {
    const coach = array.find((coach) => coach.id == id);
    if (!coach) {
        throw new Error(`Coach with an id of ${id} does not exist`);
    }
    return coach;
};

console.log(
    "Full Names: ",
    coaches
        .map((coach) => {
            return `${coach.firstName} ${coach.lastName} is ${coach.age} years old`;
        })
        .join(" || "),
);

console.log("Find Coach Function: ", findCoach(100, coaches));

// how can we map through an array of objects?
// we want to get an array with each of the coach's full name (as a string)
// ["Martyna Krol", "Sandra Mydra", "Calum Hill"]
