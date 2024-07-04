// console.log("Hello!");

// Window Object
// The window object represents an open window in a browser. It is browser's object
// (not Javascript's) & is automatically created by browser.

// It is global object with lots of properties & methods.

 // DOM - Document Object Model
 // when a web page is loaded, the browser creates a Document Object Model(DOM) of the page.
 
 // console.log- print
 // console.dir - document -> property methods

//  console.dir(document.head);
//  console.dir(document.body);

//  console.log(document.body);

//  document.body.style.background = "green";

//  document.body.childNodes[2].innerText = "abcd";


// DOM Manipulation
// 1.Selecting with id
// document.getElementById("myId");

// // Selecting with class
// 2.document.getElementsByClassName("myClass");

// // Selecting by tag name
// 3. document.getElementsByTagName("p");

// Query Selector
// document.querySelector("myclass/myid/tag")
//returns first element

// document.querySelectorAll("myId/myClass/tag")
// returns a nodelist

// 1.Selecting with id
let button = document.getElementById("myId");
console.dir(myId);

// 2. Selecting with class
let myClass = document.getElementsByClassName("myClass");
console.dir(myClass);
console.log(myClass);

// 3. Selecting by tag name
// let firElements = document.querySelector(".myClass");
// console.dir(firElements);

// let allElements = document.querySelectorAll(".myClass");
// console.dir(allElements);


// Properties
// 1. tagName: returns tag for element nodes
// 2. innerText: returns the text content of the element and all its children
// 3. innerHTML: returns the plaintext  or HTML contents in the element
// 4. textContent: returns textual content even for hidden elements

// 1. tagName:
let firElements = document.querySelector(".myClass");
console.dir(firElements);

// 2. innerText:
