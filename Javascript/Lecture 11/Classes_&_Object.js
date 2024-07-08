// A javascript object is an entity having state and behavior(properties and method).
// JS Objects have a special property called prototype.
// We can set prototype using _ _proto_ _
// * If object & prototype have same method,object's method will be used.

// const student = {
//     fullName: "Deepak Singh",
//     marks: 87,
//     printMarks: function () {
//         console.log("marks = ", this.marks);
//     },
// };

const employee = {
    calcTax(){
        console.log("Tax Rate is 10%");
    },
    calcTax2 : function (){
        console.log("tax rate is 10%");
    }
};

const karanArjun1 = {
    salary: 25000,
    calcTax(){
        console.log("tax rate is 20%"); 
    }
};
// const karanArjun2 = {
//     salary: 25000,

// };
// const karanArjun3 = {
//     salary: 25000,

// };
// const karanArjun4 = {
//     salary: 25000,

// };

karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;




// Classes in JS
// Class is a program-code template for creating objects.
// Those objects will have some state(variables) & some behavior(functions) inside it.


// class MyClass{
//     constructor(){...}
//     myMethod(){...}

// }

// let myObj = new MyClass();

class ToyotaCar {
    constructor(brand,mileage){
        console.log("Creating new Object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // }
}


let fortuner = new ToyotaCar("fortuner",10);
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus",12);
console.log(lexus);
// fortuner.setBrand("lexus");


// Constructor() method is:
// 1. Automatically invoked by new
// 2. initializes object

// class MyClass{
//     constructor(){...}
//     myMethod(){...}
// }
