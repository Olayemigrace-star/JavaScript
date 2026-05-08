const prompt = require("prompt-sync")();
let id = Number(prompt("What is your Id: "))
let isAvailable = false
let count = Number(prompt("What is the amount of books: "))
let name = String(prompt("What is the name of books: "))
let author = String(prompt("What is the author of the book: "))



let userInput = {
id,
isAvailable: isAvailable == true,
count,
name,
author,
}

console.log(userInput)
