// for(initilzier; checkloop; end of loop function)
// for(let i = 0; i < 10; i++)
// {

// }

// you can also go i-- instead, the i-- will put the increment after its been called while if you do --i then it will be done before its called

let items = ["teddy", "book", "can"];
for (item of items) {
    console.log(item);
}

for (let index = 0; index < 10; index++) {
    if (index == 1) continue;

    if (index == 5) break;
    console.log(index);
}
// break allows for early release of a loop

// basically do something before checking, rather than checking then doing in a normal while loop
let connection = 2;
do {
    // will do this before looping in the while statement

    connection--;
    console.log("one");
    // keep looping through while true
} while (connection >= 0);
