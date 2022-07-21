async function GetDadJoke() {
    // the headers is apart of the fetch-mdn page, and the accept application json thing is asked for in the website
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
    });
    const result = await response.json();
}
const GetPromiseDadJoke = async (amountOfJokes) => {
    const promiseArr = [];

    for (let i = 0; i < amountOfJokes; i++) {
        promiseArr.push(
            fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" },
            }),
        );
    }
    const jokes = await Promise.all(promiseArr);
    jokes.forEach(async (x) => {
        const { joke } = await x.json();
        console.log(joke);
    });
};
GetPromiseDadJoke(50);
