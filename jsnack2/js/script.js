const numberList = [];

for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);
    if (userNumber % 2 == 1) {
        numberList.push(userNumber)
    }
}

console.log(numberList);