// Data types are of two types
// 1. Primitive Data Types
// 2. Non-primitive Data Types

// In Primitive Data Types there are of 7 types:-
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol


// 1. Number
let age = 24;

let price = 100.25;

// 2. String

let fullName = "Deepak Singh";

// 3. Boolean

let isFollow = false;

// 4. Undefined

let x;

// 5. Null

let y = null;

// 6. BigInt

let z = BigInt(123456);

// 7. Symbol

let a = Symbol('Deep');


// Non-Primitive datatype
// Objects - collections of values
// key : value

const Student = {
    fullName : "Deepak Singh",
    age : 22,
    cgpa : 8.2,
    isPassed: true,

};

Student["fullName"]= "Rahul Sharma";
Student["age"]= Student["age"] + 1;


console.log(Student["age"]);
console.log(Student.age);
console.log(Student.fullName);