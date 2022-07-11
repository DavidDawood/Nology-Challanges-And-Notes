let x = 5;
let y = 4;

if (x > y) {
    console.log("x is greater than y");
} else if (x < y) {
    console.log("x is less than y");
} else if (x == y) {
    console.log("x is equal to y");
} else {
    console.log("please input a valid number");
}

// no breaks inside of a switch statement will continue throug the other switches
let errorCode = 1;
switch (errorCode) {
    case 5 > 0: // this didnt trigger so some functionalities for java script isnt available, like this, use an if statement
        console.log(`I am a big problem: ${errorCode}`);
        break;
    case 2:
        console.log(`I am a medium problem: ${errorCode}`);
        break;
    case 3:
        console.log(`I am a small problem: ${errorCode}`);
        break;
    default:
        console.log("all is well");
        break;
}
