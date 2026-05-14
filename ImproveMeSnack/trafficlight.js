const prompt = require("prompt-sync")();

let color = prompt("Enter colour: ");

switch(color.toUpperCase()){

    case "RED":
        console.log("STOP");
        break;
        
    case "YELLOW":
        console.log("GET READY");
        break;

    case "GREEN":
        console.log("GO");
        break;
        
    default:
        console.log("Invalid");        
}
