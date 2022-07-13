console.log(generateNumbers(20, 5));

function generateNumbers(amountToGenerate, MaxPoint) {
    let numberStack = "";
    let isUnique = true;
    do {
        let value = Math.floor(Math.random() * MaxPoint);

        if (numberStack.indexOf(value) != -1) {
            isUnique = false;
            numberStack += value;
        } else {
            numberStack += value;
        }
        amountToGenerate--;
    } while (amountToGenerate > 0 && isUnique);

    return numberStack;
}
