// ****Loops****
// Definition- Loops are used to execute a piece of code again & again
// Types of Loops
//  1. For loop
//  2. while loop
//  3. Do while loop
//  4. for-of loop
//  5. for-in loop

//  console.log("Apna College");
//  console.log("Apna College");
//  console.log("Apna College");
//  console.log("Apna College");
//  console.log("Apna College");

//  1. For loop
// for(initialization, condition, increment/decrement){
//  statements; 
// }

// Print 1 to 5
// for(let count = 1; count <= 100000;count++){
//     console.log("Future Scopie");
// }
//  for(var i = 1; i <= 5; i++){
//     console.log("i =",i);
//  }
//  console.log(i);

// Calculate sum of 1 to 5
// let sum  = 0;
// let n = 100;
// for(let i=1;i<=100;i++){
//     sum = sum + i;   // sum = 0+1 =1+2 = 3+3 = 6+4 = 10+5 = 15
// }

// console.log("Sum =",sum);

// Infinite loop - loops that never end
// for(var i = 1; i >= 0; i++){
//     console.log("i =",i);
//  }
//  console.log(i);

// 2. While Loop
// while(condition){
// statements;
// }

// Print 1 to 5
//    let i = 1;
//    while(i<=5){
//      console.log("i =",i);
//     i++;
//  }


// 3. Do-While Loop
// do{
// statements;
// } while(condition);

// let i = 1;
// do {
//    console.log("i =",i); 
//    i++;
// } while(i<=2);

//  4. for-of loop - strings & array
// for(let val of strVar){
// statements;
// }

// let string = "Javascript";
// let size = 0;
// for(let val of string){  
//    // iterator-> character

//    console.log("val =",val);
//    size++;
// }
//   console.log("String Size =",size);


  //  5. for-in loop
let student = {
   name : "Deepak Singh",
   age : 22,
   cgpa : 10,
   isPass : true,
};

for(let key in student){
   console.log("key =",key," val =",student[key]);
}
