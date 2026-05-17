function numberChecker(numbers){

if (numbers < 0){
    return "You Entered a negative number";
   }
if (numbers == 0){
    return "You Entered Zero";
   }
if (numbers > 0){
    return "You Entered a Positive Number";
   }

}

console.log(numberChecker(-10));
console.log(numberChecker(0));
console.log(numberChecker(10));

