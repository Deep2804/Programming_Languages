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

// const employee = {
//     calcTax(){
//         console.log("Tax Rate is 10%");
//     },
//     calcTax2 : function (){
//         console.log("tax rate is 10%");
//     }
// };

// const karanArjun1 = {
//     salary: 25000,
//     calcTax(){
//         console.log("tax rate is 20%"); 
//     }
// };
// const karanArjun2 = {
//     salary: 25000,

// };
// const karanArjun3 = {
//     salary: 25000,

// };
// const karanArjun4 = {
//     salary: 25000,

// };

// karanArjun1.__proto__ = employee;
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

// class ToyotaCar {
//     constructor(brand,mileage){
//         console.log("Creating new Object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
//     // setBrand(brand){
//     //     this.brandName = brand;
//     // }
// }


// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner);
// // fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar("lexus",12);
// console.log(lexus);
// fortuner.setBrand("lexus");


// Constructor() method is:
// 1. Automatically invoked by new
// 2. initializes object

// class MyClass{
//     constructor(){...}
//     myMethod(){...}
// }



// Inheritence in JS
// Inheritence is passing down properties & methods from parent class to child class.
// 
// class Parent{

// }

// class child extends Parents {

// }


// * If child and parent have same method, child method should be used.[Method Overriding]

// class Parent{
//     hello(){
//         console.log("Hello");
//     }

// }

// class child extends Parent{

// }

// let obj = new child();

// class Person{

//     constructor(){
//         this.species = "Homo Sapiens";
//     }

//     eat(){
//         console.log("Eating");
//     }
//     sleep(){
//         console.log("Sleeping");
//     }
//     work(){
//         console.log("Working");
//     }


// }



// class Engineer extends Person{
//     work(){
//         console.log("Do coding");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("Treat Patient");
//     }
// }

// let deepak = new Engineer();


// ***----Siper Keyword---***
// The super keyword is used to call the constructor of its parent class to accept the parent's
// properties and methods

// super(args)  // calls Parent constructor
// super.parentMethod(args)

class Person{

    constructor(name){
       // console.log("Enter Parent Constructor");
        this.species = "Homo Sapiens";
        this.name = name;
    }

    eat(){
        console.log("Eating");
    }
}

class Engineer extends Person{
    constructor(name){
       // console.log("Enter Child Constructor");
        super(name);
      //  this.branch = branch;
       // console.log("Exit Child Constructor");
    }

     work(){
        super.eat();
     console.log("Do coding");
    }
}

let deepak = new Engineer("Deepak");



// ***--- Error Handling ---***
// try-catch
// try{
// ...normal code
// } catch(err){ // err is error object
// ...handling error
// }


let a = 5;
let b = 10;
console.log("a =",a);
console.log("b =",b);
console.log("a+b =",a+b);
try{
    console.log("a+b =",a+c); // Error
} catch(err){
    console.log(err);
}
 
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);

