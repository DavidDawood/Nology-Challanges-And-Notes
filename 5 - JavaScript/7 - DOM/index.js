// what is the DOM?
// DOM stands for document object model, a tree-link representation of the HTML file
// when we load the HTML file to the browser, it creates the DOM so we can interact with the HTML through JavaScript

// How do we access the DOM?

// selecting element by ID
const taskInput = document.getElementById("taskInput");
console.log(taskInput);

const containers = document.getElementsByClassName("container");
console.log(containers);

// selecting elements by tag name
const divs = document.getElementsByTagName("div");
console.log(divs);

// selecting elements by query selector, aka how they are referred in css
// query selector only selects the first while queryall selects all
const firstContainer = document.querySelector(".container");
console.log(firstContainer);

const allContainers = document.querySelectorAll(".container");
console.log(allContainers);
// querySelector is arrayed into a node list while the elements are placed in a HTML array
// more information:
// https://www.w3schools.com/js/js_htmldom_nodelist.asp

const heading = document.querySelector("h2");
// you can also stack multiple classes, exactly how it is in css
const test = document.querySelectorAll(".container, .button");
console.log(test);

const test2 = document.querySelectorAll("div > p");
console.log(test2);

// manipulating the DOM
const styleBtn = document.getElementById("styleButton");
console.log(styleBtn);

// HTML collection - array-like object
const body = document.getElementsByClassName("body");
console.log(body);
console.log(body[0]);
// selects all classes that body has inside of it
console.log(body[0].classList);
console.log(allContainers[0].classList);

const body2 = document.querySelector("body");
console.log(body2.classList);

const buttons = document.getElementsByClassName("button");
const containers2 = document.querySelectorAll(".container");

// waits to listen for an event from that button, click is the type of the event
styleBtn.addEventListener("click", () => {
    body2.classList.toggle("body--nightMode");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("button--nightMode");
    }

    containers2.forEach((x) => {
        x.classList.toggle("container--nightMode");
    });

    const paras = document.getElementsByClassName("task");
    for (let index = 0; index < paras.length; index++) {
        const element = paras[index];

        element.classList.toggle("task--nightMode");
    }
    // i have to use the for loop because technically, elements by class names are objects, not arrays, and such stuff like foreach and map etc dont exist for it
});

const addButton = document.getElementById("addButton");
console.log(addButton);

addButton.addEventListener("click", () => {
    const inputValue = document.getElementById("taskInput");
    let nothingPara = document.getElementById("nothingPara");
    console.log(inputValue.value);
    console.log(nothingPara);

    if (inputValue.value === "") {
        return alert("Enter a task first!");
    }

    const parentDiv = document.querySelector("#tasks");

    appendTextElement("p", inputValue.value, parentDiv);
    inputValue.value = "";

    if (nothingPara) {
        parentDiv.removeChild(nothingPara);
    }
});

const appendTextElement = (elementType, textString, parentElement) => {
    const element = document.createElement(elementType);
    const text = document.createTextNode(textString);

    element.classList.add("task");
    element.appendChild(text);

    parentElement.appendChild(element);
};
