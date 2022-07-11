let hobbies = ["programming", "games", "art"];
console.log(hobbies[0]);

let firstHobby = hobbies[0];
hobbies = hobbies.splice(1, hobbies.length - 1); // includes in what range, anything else out of this range is pushed out, thats what splice returns, what was removed

// will remove the first index of an array
// hobbies.shift();

let length = hobbies.length;

hobbies.push("eating food");
console.log(hobbies);

// will insert it at index 2, remove 0, and then insert firstHobby
hobbies.splice(2, 0, firstHobby);
// hobbies.slice is different, splice lets you remove stuff from an index and insert while slice is completely splitting an array

// join turns all arrays into a string with a comma and a space in between each index
let list = `my hobbies are: ${hobbies.join(", ")}`;
console.log(list);
