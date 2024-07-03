// ForEach loops in Arrays
// arr.forEach(callbackFunction)

// callbackFunction : Here, it is a function to execute for each element in the Array
// * A callback is a function passed as an argument to another function.

// arr.forEach((value) => {
//     console.log(value);
// })

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val) =>{
    console.log(val);
});

let arrays = ["pune", "delhi", "mumbai", "goa"];
arrays.forEach((val,idx,arr) =>{
    console.log(val.toUpperCase(),idx,arrays);
});