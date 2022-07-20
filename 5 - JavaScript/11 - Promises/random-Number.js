const waitForRandomNumber = (min, max) => {
    return new Promise((resolve, reject) => {
        document.querySelector("h3").innerHTML = "Loading...";
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * max + min);
            if (randomNumber < max / 1.1) {
                resolve(randomNumber);
            } else {
                reject(randomNumber);
            }
        }, 500);
    });
};

// function that updates the DOM
document.getElementById("myButton").addEventListener("click", () => {
    const myPromise = waitForRandomNumber(0, 100);
    myPromise
        .then((value) => updateHeading(value))
        .catch((value) => {
            updateHeading(value);
            alert(`Congratuations you got a high number! ${value}`);
        })
        .finally(() => {
            document.querySelector("h3").innerHTML = "";
        });
});

const updateHeading = (number) => {
    document.querySelector("h2").innerHTML = number;
};
