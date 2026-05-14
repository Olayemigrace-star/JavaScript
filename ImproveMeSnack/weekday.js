const prompt = require("prompt-sync")();

let day = prompt("Enter the Day of the week: ")

switch (day.toLowerCase()){

case "monday":
case "tuesday":
case "wednesday":
case "thursday":
case "friday":
console.log("Its a weekday");
break;
case "saturday":
case "sunday":
console.log("Its weekend");
break;
default:
console.log("Invalid Day entered")


}

