// Question 1: Get user to input a number using prompt("Enter a number:").
// Check if the number is a multiple of 5 or not.

//  let num = prompt("Enter a number:");
 
//  if(num % 5 === 0){
//     console.log(num, "is a multiple of 5");
//  }
//  else {
//     console.log(num, "is not a multiple of 5");
//  }

// Question 2: write a code which can give grades to students according to their score:
//  90-100 , A
//  70-89,  B
//  60-69 , C
//  50-59, D
//  0-49, F
//
let score = 72;

if(score >= 90 && score <=100){
    grade = "A";
}
else if(score >= 70 && score <=89){
    grade = "B";
}
else if(score >= 60 && score <=69){
    grade = "C";
}
else if(score >= 50 && score <=59){
    grade = "D";
}
else {
    grade = "F";
}

console.log("According to your score,your grade is: ",grade);