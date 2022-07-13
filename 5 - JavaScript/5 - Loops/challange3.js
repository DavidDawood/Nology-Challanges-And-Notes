console.log(capitalEven("abcd"));
function capitalEven(letters) {
    let returnString = "";

    for (let x = 0; x < letters.length; x++) {
        if (x % 2 != 0) {
            returnString += letters.charAt(x).toUpperCase();
        } else {
            returnString += letters.charAt(x);
        }
    }
    return returnString;
}
