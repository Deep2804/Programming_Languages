// Question 1: Print all even number between 1 to 100

let count = 0;
for(let i=1;i<=100;i++){
    if(i % 2 == 0){
        console.log("num =",i);
        count++;
    }
    
}
console.log("count =",count);


// Question 2: Create a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user enters correct value. 

let gameNum = 25;
let userNum = prompt("Guess the game number:");

while(userNum != gameNum){   //game number
    userNum = prompt("You entered wrong number, Guess again:");
}  

console.log("Congratulations, you have guessed the correct number");
