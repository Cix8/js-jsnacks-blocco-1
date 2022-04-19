const firstInput = prompt("Scrivi qualcosa");
const secondInput = prompt("Scrivi qualcos'altro");

let firstPrint = firstInput;
let secondPrint = secondInput;

if (firstInput.length > secondInput.length) {
    firstPrint = secondInput;
    secondPrint = firstInput;
}

console.log(firstPrint);
console.log(secondPrint);