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

async function makeSmallTalk(input) {
    try {
        console.log("hi there...");
        const name = await rememberName(input);
        console.log(name, "how are you?");

        const location = await rememberLocation(name);
        console.log("hows the weather at", location);
    } catch (e) {
        console.log(e.message);
    }
}

makeSmallTalk("Dalibor");
