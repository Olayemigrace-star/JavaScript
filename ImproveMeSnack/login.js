const prompt = require("prompt-sync")();

let username = prompt("Enter your Username: ")
let password = Number(prompt("Enter your password: "))


function details(username, password){

if((username.toLowerCase() == "semicolon") && password == 231){
    return "Login Successful!!";
    }
else{
    return "Invalid Login";
    }
    
}


console.log(details(username, password))
