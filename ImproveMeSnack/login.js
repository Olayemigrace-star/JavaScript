const prompt = require("prompt-sync")();

let username = prompt("Enter your Username: ")
let password = Number(prompt("Enter your password: "))

function details(username, password){
if(username == "semicolon" && password =="231"){
console.log("Login Successful!!")
}
else{
console.log("Invalid Login")
}
}

details(username, password);
