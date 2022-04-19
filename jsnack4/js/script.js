const userNumber = prompt('Inserisci un numero di 4 cifre');
let somma = 0;

for (let i = 0; i < 4; i++) {
    const singleNumber = parseInt(userNumber.charAt(i));
    console.log(singleNumber);
    somma += singleNumber;
}

console.log('Il numero di 4 cifre inserito è:', userNumber,'La somma delle 4 cifre è uguale a:',somma);