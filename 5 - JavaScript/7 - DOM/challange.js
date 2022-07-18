let formSubmitted = false;
const checkIfAllowedInPub = (age, country, drunkeness) => {
    if (formSubmitted) return alert("You have already submitted");

    const bottleContainer = document.querySelector("img");
    const button = document.getElementById("btn");
    const textLine = document.getElementById("message");

    if (
        (age >= 21 && drunkeness <= 3) ||
        (age >= 18 && drunkeness <= 3 && country !== "USA")
    ) {
        bottleContainer.src = "./assets/green_beer.svg";
        button.classList.toggle("btn--success");
        textLine.classList.toggle("message--success");
        textLine.innerHTML = "Come in and enjoy";
    } else {
        bottleContainer.src = "./assets/red_beer.svg";
        button.classList.toggle("btn--failure");
        textLine.classList.toggle("message--failure");
        textLine.innerHTML = "you are not allowed in!";
    }
    formSubmitted = true;
};

const RecieveForm = (event) => {
    const form = document.getElementById("form");

    const age = document.getElementById("age");
    const country = document.getElementById("country");
    const drunkeness = document.getElementById("drunk");

    checkIfAllowedInPub(age.value, country.value, drunkeness.value);

    // have above get all the values of the form and then proceed to use it for the checks

    event.preventDefault();
    form.reset();
};

// If the person is allowed to enter the pub, the colour of the bottle and the button background should change to green.
// If the person is not allowed to enter the pub, the bottle and the button background should be red.
// The string returned by the function should be rendered under the button.
// Only one message should be rendered, if there is already a message on the page, it should be removed when the user clicks the button again and a new one should be displayed.

// BONUS: Familiarise yourself with the following docs: https://developer.mozilla.org/en-US/docs/Web/API/FormData and implement the challenge using FormData
