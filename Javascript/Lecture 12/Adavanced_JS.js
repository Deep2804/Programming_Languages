// ---Async await, Promise chain, callback hell---
// Async await
// **Synchronous**
// Synchronus means the code run in a particular sequence of instructions given in the
// program. Each instructions wait for the previous instruction to complete its execution.

// **Asynchronous**
// Due to synchronous programming, sometimes imp instructions get blocked due to its some
// previous instructions, which causes a delay in UI. 
// Asynchronous code execution allows to execute next instructions immediately and
// doesnot block the flow.

//
//
// function hello(){
//     console.log("Hello");
// }

// setTimeout(hello,2000);

// console.log("One");
// console.log("Two");


// setTimeout(() => {
//     console.log("Hello");
// },4000);

// console.log("Three");
// console.log("Four");



// **Callback- A callback is a function passed as a argument to another function.**

// function sum(a,b){
//     console.log(a+b);
// }


// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }

// calculator(1,2,(a,b) => {
//     console.log(a+b);
// });

// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello,3000);

// ***Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of DOOM)
// This styles of programming becomes difficult to understand & manage.***

// ***nesting***

// let age = 19;
// if(age >= 18){
//     if(age >= 60){
//         console.log("senior");
//     } else{
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }

// for(i =0;i<5;i++){
//     let str = "";
//     for(j=0;j<5;j++){
//         str = str + j;
//     }
//     console.log(i,str);
// }


function getData(dataId, getNextData){

    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
        
    },3000);
    
}


// // callback hell
getData(1,() =>{
    console.log("Getting Data2");
    getData(2,() =>{
        console.log("Getting Data3");
        getData(3);
    });
});


// ***Promises***
// Promise is for "eventual" completion of task.It is an object in JS.
// It is a solution to callback hell.

// let promise = new Promise((resolve,reject) => {...})

// * resolve & reject are callbacks provided by JS.

// ***Promises State***
// 1. pending: the result is undefined
// 2. Fullfilled: the result is a value(fulfilled)     resolve(result)
// 3. Rejected: the result is an error object          reject(error) 

let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    // resolve(123);
    reject("some error");
});

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success");
            },3000);   
    })
}



    //  ***Promises functions***       
    // 1 .then()        
    // 2 .catch() 

     // promise.then((res) => {...})
    //  promise.catch((err) => {...})

const getPromise = () =>{
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        // resolve(123);
        reject("Network error");
        });
};

// let promise = getPromise();
// promise.then((res) =>{
//     console.log("Promise Fullfilled",res);
// });

// promise.catch((err) =>{
//     console.log("Rejected",err);
// })

// function asyncFunc1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("Data1");
//             resolve("Success");
//         },4000);
//     });
// };

// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("Data2");
//             resolve("Success");
//         },4000);
//     });
// };


console.log("Fetching Data1...");
    asyncFunc1().then((res)=>{
    //console.log(res);
    console.log("Fetching Data2...");
    asyncFunc2().then((res)=>{
    //console.log(res);
});
});


// ***Promise chaining***
getData(1)
    .then((res) => {
   // console.log(res);
    return getData(2);
})
.then((res) => {
    return getData(3);
})
.then((res) =>{
    console.log(res);
});


// ***Async Await***
// async function always return a promise.
// async function myFunc(){...}
// await pauses the execution of its surrounding async function until the promise is settled.




function api(){
    return new Promise((resolve,reject) => {
        
        setTimeout(() => {
            console.log("Weather Report");
            resolve(200);
        },2000);
        
    });
}

async function getWeatherReport(){
    await api();
    await api();
}



function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success");
            },2000);   
    });
}

// async-await
async function getData(){
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
    console.log("Getting Data4...");
    await getData(4);
}


// ***IIFE: Immediately Invoked Function Expression***
// IIFE is a function that is called immediately as soon as it is defined.

// (function (){
//     // ...
// })();

// (() => {
//  //..
// })();

// (async ()=>{
//     //..
// })();

(async function (){
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
    console.log("Getting Data4...");
    await getData(4);
})();