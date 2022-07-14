const scores = [20, 40, 50, 60];

const total = (array) => {
    // accumulator is the result of the previous callback operation
    // if a inital value is not made aka the accumulator, then it will default to the first value

    const total = array.reduce((acc, current) => {
        // we want to add each number to the accumator
        return (acc += current);
    }, 0); // the 0 is what value the accumulator starts at
    return total;
};
console.log(total(scores));
