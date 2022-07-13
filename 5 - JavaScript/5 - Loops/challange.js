console.log(loop(15));
console.log(withoutLoop(15));

function loop(x) {
    let result = 0;
    for (let index = 1; index <= x; index++) {
        result += index;
    }
    return result;
}

function withoutLoop(x) {
    return (x * (x + 1)) / 2;
}
