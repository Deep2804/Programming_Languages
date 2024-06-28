// Operators
// used to perform some operation on data


// Arithmetic Operator
// let a = 5;
// let b = 2;
// // let  c = a+b;
// console.log("a = ",a ,"& b = ", b);
// // Addition
// console.log("a + b = ", a + b);
// // Subtraction
// console.log("a - b = ", a - b);
// // Multiplication
// console.log("a * b = ", a * b);
// // Division
// console.log("a / b = ", a / b);
// // Modulus
// console.log("a % b = ", a % b);
// // Exponentiation
// console.log("a ** b = ", a ** b);

// Unary Operator
// 1. Increment
// 2. Decrement

// let a = 5;
// let b = 2;
// // 1. Increment
// console.log("a = ",a ,"& b = ", b);
// a = a+1;

// // Post Increment
// console.log("a++ = ", a++);

// // Pre Increment
// console.log("++a = ", ++a);


// // 2. Decrement
// a = a-1;

// // Post Decrement
// console.log("a-- = ", a--);

// // Pre Decrement
// console.log("--a = ", --a);

// Assignment Operator - =, +=, -=, *=, %=, **=
// let a = 5;
// let b = 2;

// a += 4;
// console.log("a = ", a); //9

// a -= 4;
// console.log("a = ", a); //5

// a *= 4;
// console.log("a = ", a); //20

// a /= 4;
// console.log("a = ", a); //5

// a %= 4;
// console.log("a = ", a); //1

// a **= 4;
// console.log("a = ", a); //1



// Comparison Operator
// 1. Equal to - ==
// 2. Equal to & type  - ===
// 3. Not Equal to -!=
// 4. Not equal to & type - !==
// 5. greater than - >
// 6. greater than equal to - >=
// 7. less than - <
// 8. less than equal to - <=


// let a = 5;
// let b = 2;

// // 1. Equal to - ==
// console.log("a==b", a==b);

// // 2. Equal to & type  - ===
// console.log("a===b", a===b);

// // 3. Not Equal to -!=
// console.log("a!=b", a!=b);

// // 4. Not equal to & type - !==
// console.log("a!==b", a!==b);

// // 5. greater than - >
// console.log("a > b", a > b);

// // 6. greater than equal to - >=
// console.log("a >= b", a >= b);

// // 7. less than - <
// console.log("a < b", a < b);

// // 8. less than equal to - <=
// console.log("a <= b", a <= b);

// Logical Operator
// 1. Logical AND &&
// 2. Logical OR ||
// 3. Logical NOT !

// 1. Logical AND &&
// cond1 || cond 2 || result
//   T        T        T
//   T        F        F
//   F        T        F
//   F        F        F
// let a = 6;
// let b = 3;

// let cond1 = a > b; //
// let cond2 = a === 6; //
// console.log("cond1 && cond2 = ", cond1 && cond2);
// console.log("cond1 && cond2 = ", a > b && a === 6);


// 2. Logical OR &&
// cond1 || cond 2 || result
//   T        T        T
//   T        F        T
//   F        T        T
//   F        F        F

// let a = 5;
// let b = 3;

// let cond1 = a > b; //
// let cond2 = a === 6; //
// console.log("cond1 && cond2 = ", cond1 || cond2);
// console.log("cond1 && cond2 = ", a > b || a === b);


// 3. Logical NOT !
 // T != F
//  F != T
let a = 5;
let b = 3;

console.log("!(a > b) = ", !(a>b));
