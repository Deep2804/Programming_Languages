// 1. ForEach loops in Arrays
// arr.forEach(callbackFunction)

// callbackFunction : Here, it is a function to execute for each element in the Array
// * A callback is a function passed as an argument to another function.

// arr.forEach((value) => {
//     console.log(value);
// })

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

// arr.forEach((val) =>{
//     console.log(val);
// });

// let arrays = ["pune", "delhi", "mumbai", "goa"];
// arrays.forEach((val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arrays);
// });


// 2. Map
//  Create a new array with the results of some operation. The value its callback
//  returns are used to form new array
//  arr.map(callBackFnx(value,index,array))
    // let newArr = arr.map((val) => {
    //     return val*2;
    // })

    // let nums = [1,2,3,4,5];

    // nums.map((val) =>{
    //     console.log(val);
    // })

    // let newArrays = nums.map((val) =>{
    //     return val**2;
    // })

    // console.log(newArrays);



// 3. Filter
// Create a new array of elements that give true for the condition/filter.
// E.g. all even numbers
//    let newArr = arr.filter((val) =>{
//     return val%2=== 0;
//    })

//    let arr = [1,2,3,4,5,6,7];

//    let evenArr = arr.filter((val) =>{
//     return val % 2 === 0;
//    })

//    console.log(evenArr);



// 4. Reduce 
//  Performs some operations & reduces the array to a single value.
// It returns that single value.

let arr = [5,2,1,3,4,6];

const output = arr.reduce((prev,curr) =>{
    return prev < curr ? prev : curr;
})

console.log(output);
