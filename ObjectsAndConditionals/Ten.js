const prompt = require("prompt-sync")();

let integer = Number(prompt("Enter an integer: "))

if (integer > 0){
    console.log("Positive")
    }
else if (integer === 0){
    console.log("Zero")
    }
else if (integer < 0){
    console.log("Negative")
    }
