// impor defaults like this, the brackets and comma is for other functions which can be used but are not the default, remember to include extensions
import rectangleArea, { rectanglePerimeter } from "./rectangle.js";
import circleArea, { circlePermimeter } from "./circle.js";
import { createElementWithText } from "./dom-utils.js"; // no default

// import <default> , {...<exports>} from "file.js";

const rectangleForm = document.getElementById("rectangleForm");
const circleForm = document.getElementById("circleForm");

rectangleForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    const parent = document.getElementById("rectangleOutput");
    createElementWithText("p", `Area is: ${rectangleArea(x, y)}`, parent);
    createElementWithText(
        "p",
        `Perimeter is: ${rectanglePerimeter(x, y)}`,
        parent,
    );
});

circleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const r = document.getElementById("radius").value;

    const parent = document.getElementById("circleOutput");
    createElementWithText("p", `Area is: ${circleArea(r)}`, parent);
    createElementWithText("p", `Radius is: ${circlePermimeter(r)}`, parent);
});
