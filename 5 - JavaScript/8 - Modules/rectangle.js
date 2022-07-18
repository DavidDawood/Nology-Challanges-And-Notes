const rectangleArea = (x, y) => {
    return parseFloat(x * y).toFixed(2);
};
export const rectanglePerimeter = (x, y) => {
    return parseFloat(2 * x + 2 * y).toFixed(2);
};

// every file is going to have only one default, aka what is the one function you will be exporting, only export one function

// not neccessary but just in case maybe you have 10 other functions
// but only need to use one
export default rectangleArea;
