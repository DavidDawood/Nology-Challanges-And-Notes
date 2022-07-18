const circleArea = (r) => {
    return parseFloat(r * Math.PI).toFixed(2);
};
export const circlePermimeter = (r) => {
    return parseFloat(2 * Math.PI * r).toFixed(2);
};

export default circleArea;
