// Attributes
// getAttribute(attr) // to get the attribute value
// setAttribute(attr,value) //to set the attribute value th

// Style
// node.style

// let para = document.querySelector("p");
// //getAttribute
// console.log(para.getAttribute("class"));

// //setAttribute
// console.log(para.setAttribute("class","welcome"));

// let div =document.querySelector("div");

// div.style.backgroundColor = "purple";
// div.style.backgroundColor = "purple";
// // div.style.visibility = "hidden";

// div.style.fontSize ="26px";

// div.innerText = "Hello!";


// DOM Manipulation
//Insert Elements
//   let el = document.createElement("div");
  
//   Node.append(el) // adds at the end of the nodes(inside)
//   Node.prepend(el) // adds at the start of the nodes(inside)
//   Node.before(el) // adds before the nodes(outside)
//   Node.after(el) // adds after the nodes(outside)

//   // Delete elements
//     Node.remove(el) // removes the node

let newBtn = document.createElement("button");
newBtn.innerText = "Submit";
console.log(newBtn);

let div = document.querySelector("div");

//   Node.append(el)
// div.prepend(newBtn);

//   Node.prepend(el)
// div.append(newBtn);

//   Node.before(el)
// div.before(newBtn);

//   Node.after(el)
//    div.after(newBtn);

let p = document.querySelector("p");
p.after(newBtn);  


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am New!</i>";

document.querySelector("body").prepend(newHeading)

let para = document.querySelector("p");
para.remove();


newHeading.remove();


// Homework
// 1. appendChild
// 2. removeChild


