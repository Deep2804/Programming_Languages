//  Question 1: create a function using the function keyword that takes a String as an 
//  argument & return the number of vowels in the string.
function countVowels(str){
    //  "Future Scopie" , count = 6
    let count = 0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
            count++; 
        }
    }
    console.log(count);
}

// Question 2: Create an arrow function to perform the same task.

const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
            count++; 
        }
    }
    console.log(count);
}


// Question 3: For a given array of numbers, print the square of each value using the 
// forEach loop.


let nums = [61,23,39,47,53];

nums.forEach((nums) =>{
    console.log(nums*nums);
})


let calcSquare = (nums) =>{
    console.log(nums*nums);
};

nums.forEach(calcSquare);


// Question 4: We are given array of marks of students. Filter out of the marks
// of students that scored 90+.

let marks = [97,64,34,56,45];

let topperArr = marks.filter((val)=> {
    return val>90;
})

console.log(topperArr);


// Question 5: Take a number n as an input from user. Create an array of numbers
// from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate products of all numbers in the array.
//
let n = prompt("Enter a number");

let arr = [];

for(let i=1;i<=n;i++){
    arr[i-1] = i; 
}

console.log(arr);

let sum = arr.reduce((res, curr) =>{
    return res + curr;
})

console.log(sum);

let mul = arr.reduce((res, curr) =>{
    return res * curr;
})

console.log(mul);