// Conditional Statement - to implement some condition on code
// 1. if statement
// 2. if-else statement
// 3. else-if statement

//1. If statement
// let age = 15;
// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }

// console.log(color);



// if(age >= 18){
//     console.log("You can Vote");
// }

// if(age < 18){
//     console.log("You cannot Vote");
// }

// 2. if-else statement

// let age = 25;

// if(age >= 18){
//     console.log("You can Vote");
// }
// else {
//     console.log("You cannot Vote");
// }

// Odd or Even

// let num = 10;
// if(num%2 === 0){
//     console.log(num, "is Even Number");
// }
// else{
//     console.log(num, "is Odd Number");
// }


// 3. else-if statement

let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}
else if(mode === "light"){
    color = "white";
}
else if(mode === "blue"){
    color = "blue";
}
else if(mode === "pink"){
    color = "pink";
}
else {
    color = "yellow";
}

console.log(color);

if(mode === "dark") console.log(mode);
