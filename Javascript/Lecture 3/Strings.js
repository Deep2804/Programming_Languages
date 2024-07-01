// Strings is a sequence of characters used to represent text

// Create String
// let str = 'Future Scopie';

// String length
// str.length

// Strings indices
// str[0], str[1], str[2]

// let str1 = "FutureScopie";
// let str2 = 'Deepak Singh';

// console.log(str1[7]); 


// Template Literal - A way to have embedded expressions in strings
// `this is a template literal`
// let obj = {
//     item: 'pen',
//     price : 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of" , obj.item, "is", obj.price , "rupees"); 

// let specialString = `This is a template literal`;
// console.log(typeof specialString);


// String Interpolation - to create strings by doing substitution of placeholders

// `string text ${expression} string text`

// Escape character - \n new line
// \t - tab space-- it takes single space in memory

// let str = "Future\tScopie"; //14
// console.log(str.length);


// String Methods  - They are built-in functions to manipulate the string 
// 1. str.toUpperCase()
// 2. str.toLowerCase()
// 3. str.trim()   // remove white spaces
// 4. str.slice(start,end?)  //returns part of string
// 5. str1.concat(str2) //joins str2 with str1
// 6. str.replace(searchVal, newVal)
// 7. str.charAt(idx)

// 1. str.toUpperCase()
let str = "Future Scopie";
//Uppercase
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);

// 2. str.toLowerCase()
let lowerStr = str.toLowerCase();
console.log(lowerStr);

// 3. str.trim() 
let trimStr = "   Future Scopie   2024    ";
console.log(trimStr.trim());

// 4. str.slice(start,end?)
let sliceStr = "Future Scopie";
console.log(sliceStr.slice(0,4));
console.log(sliceStr.slice(4));

// 5. str1.concat(str2)

let strConcat1 = "Future";
let strConcat2 = "Scopie";

console.log(strConcat1.concat(strConcat2));
console.log(strConcat1 + strConcat2);


// 6. str.replace(searchVal, newVal)
let searchStr = "Future Scopie";
console.log(str.replace("F","T"));


// 7. str.charAt(idx)
let charStr = "Future Scopie";
console.log(str.charAt(5));