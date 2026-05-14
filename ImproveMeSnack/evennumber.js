const prompt = require("prompt-sync")();

let number = Number(prompt("Enter your preferred number: "))
if (number % 2 == 0){

console.log("You entered an Even number")
}
else {
console.log("You Entered an Odd number")
}
