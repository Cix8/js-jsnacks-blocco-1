const userNumber = prompt('Inserisci un numero di 4 cifre');
let somma = 0;

for (let i = 0; i < userNumber.length; i++) {
    const singleNumber = parseInt(userNumber.charAt(i));
    console.log(singleNumber);
    somma += singleNumber;
}
if (userNumber.length === 4) {
    console.log('Il numero inserito è:', userNumber,'La somma delle singole cifre è uguale a:',somma);
} else {
    console.log('Ti avevo chiesto di scegliere un numero di 4 cifre ma ti mostro comunque il risultato, il numero inserito è:', userNumber, 'La somma delle singole cifre è:', somma);
}