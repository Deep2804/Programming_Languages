// Arrays - Collections of item --linear

// Array - mutable
// Strings - immutable

// Basic Method
let marks_Student1 = 86;
let marks_Student2 = 76;
let marks_Student3 = 66;
let marks_Student4 = 56;
let marks_Student5 = 46;

// using Object
let student = {
    marks1 : 86,
    marks2 : 75,
    marks3 : 91,
    marks4 : 55,
    marks5 : 63,
}

// Array method
let marks1 = [91,86,79,54,36];
console.log(marks1);
console.log(marks1.length);

// let heroes = ["ironman","thor","hulk","spiderman","batman"];
// console.log(heroes);


// array indices
// arr[0], arr[1], arr[2] ...,

// Looping in Arrays - print all element in array
// Loops - iterable(strings,objects,arrays)
let heros = ["ironman","thor","hulk","spiderman","batman"];

// For loop - length
for(let ind = 0;ind<heros.length;ind++){
    console.log(heros[ind]);
}

//for of loop
for(let hero of heros){
    console.log(hero);
}


let cities = ["Delhi","Noida","Gurgaon","mumbai","kolkata"];
for(let city of cities){
    console.log(city.toUpperCase());
}


// Array Methods
// 1. Push(): add to end
// 2. Pop(): delete from end & return
// 3. toString(): converts array to string
// 4. Concat(): joins multiple arrays & returns result
// 5. unshift(): add to start
// 6. shift(): delete from start & return
// 7. Slice(): returns a piece of array(does not change original array)
//    slice(startidx,endidx);
// 8. splice(): change original array(add,remove,replace)
//    splice(startidx, delCount, newEl1...)


// 1. Push - original array can be changed and updated
let foodItems = ["chips","colddrink","burger","momos","chowmein"];
console.log(foodItems);
foodItems.push("kurkure","biscuits","Namkeen");
console.log(foodItems);

// // 2. Pop - delete  from original array

let deletedItem = foodItems.pop();

console.log(foodItems);
console.log("Deleted Item",deletedItem);

// 3. toString - 

let foodItem = ["chips","colddrink","burger","momos","chowmein"];

console.log(foodItems);
console.log(foodItems.toString());

let marks = [97,64,83,67,35];
console.log(marks);
console.log(marks.toString());


// 4. concat
let marvelHeroes1 = ["thor","spiderman","ironman"]
let dcHeroes = ["superman","batman"];
let indianHeroes = ["krish","shaktiman"];

let heroes= marvelHeroes1.concat(dcHeroes,indianHeroes);

console.log(heroes);


// 5. unshift()

marvelHeroes.unshift("antman");
console.log(marvelHeroes);


// 6. shift()

let deleteHeroes = marvelHeroes.shift();
console.log(deleteHeroes);

// 7. Slice()
let marvelHeroes = ["thor","spiderman","ironman","antman","Dr. strange"];

console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));
console.log(marvelHeroes.slice(1));
console.log(marvelHeroes.slice());

// Splice()
let num = [1,2,3,4,5,6,7];
console.log(num);

num.splice(2,2,101,102);
console.log(num);

// add element
num.splice(4,0,150);
console.log(num);

// delete element
num.splice(6,2);
console.log(num);

// replace element
num.splice(2,1,10);
console.log(num);

