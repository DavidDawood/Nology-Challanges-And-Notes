// pyramid of doom
// we end up here with some kind of coputation that depends on the result of another one
// some kind of async process, that we do with the result from another one
// the only place we can access the value is inside a .then

const rememberName = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input);
        }, 2000);
    });
};
const rememberLocation = (name) => {
    const locations = {
        connor: "Norwood",
        matias: "Waterloo",
        dalibor: "Marden",
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (locations[name]) {
                resolve(locations[name]);
            } else {
                reject(new Error("Oops, where do you live again?"));
            }
        }, 2000);
    });
};

rememberName("connor")
    .then((name) => {
        console.log("hey", name + " how are you?");
        rememberLocation(name).then((location) =>
            console.log("hows the weather in " + location),
        );
    })
    .catch((error) => console.log(error.message)); // this catch will catch the name but not the location

rememberName("connsor")
    .then((name) => {
        console.log("hey", name + " how are you?");
        return name;
    })
    .then((name) => rememberLocation(name)) // trigger upon name finishing, since it returns, you get the result of the previous then
    .then((location) => console.log("hows the weather in", location)) // after remember location is fufilled, then console.log this
    .catch((error) => console.log(error.message)); // this catch will catch all errors, either in name or remember location
