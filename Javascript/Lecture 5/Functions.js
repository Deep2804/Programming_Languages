// Functions 
// Definition - Block of code that performs a specific task, can be invoked whenever needed

// Function Definition
// function functionName(){
//     // do some work'
// }

// function functionName(param1, param2...){
//     // do some work
// }

// // Function call
// functionName();

// 
// function myFunction(){
//     console.log("Welcome to Future Scopie");
//     console.log("We are learning JS");
// }


// myFunction();
// myFunction();

// function newFunction(msg){  
//     // parameter -> input
//    console.log(msg);
// }
// newFunction("I love JS");


// function calFunction(msg, n){  
//     // parameter -> input
//    console.log(msg*n);
// }
// calFunction("I love JS",100);


// Function to add two numbers
// function sum(a,b){
//     console.log(a+b);
// }

function sum(x,y){
   // local variables -> scope 
    s = x + y;
    return s;
}

let add = sum(2,3);
console.log(add);

// sum function
function sum(a,b){
    return a+b;
}

// multiplication function
function mul(a,b){
    return a*b;
}



// Arrow functions
// compact way of writing a function

// const functionName = (param1, param2...) =>{
//     // do some work
// }

// sum function
function sum(a,b){
    return a+b;
}

const arrowSum =(a,b) =>{
    console.log(a+b);
}

// Multiplication function
function mul(a,b){
    return a*b;
}

const arrowMul=(a,b) =>{
    console.log(a*b);
}

const printHello = () => {
    console.log("Hello");
}


