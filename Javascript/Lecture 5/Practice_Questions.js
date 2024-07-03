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
