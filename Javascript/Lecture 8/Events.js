// Events in JS
// The change in the state of an object is known as an Event.
// Events are fired to notify code of "interesting changes" that may affect code execution.

// Mouse Events(click,double click etc.)
// Keyboard events(keypress,keyup,keydown)
// Form Events(submit etc.)
// Print event & many more

// Node.event =() => {
//     //handle here
// }

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("HANDLER 1");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// btn1.onclick = () => {
//     console.log("HANDLER 2");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("Inside div element");
// }

// Priority - JS handle > inline handle
// inline handle  // JS Handle

// Event Object
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.

// Node.event = (e) => {
//     //handle here

// }

// e.target, e.type, e.clientX, e.clientY


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log("you are inside div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };


// Events Listener

// node.addEventListener(event,callback)

// node.removeEventListener(event,callback)

// **Note: the callback reference should be same to remove

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",() =>{
    console.log("Button 1 was clicked - handler 1");
    
});

btn1.addEventListener("click",() =>{
    console.log("Button 2 was clicked - handler 2");
});

const handler3 = () =>{
    console.log("Button 3 was clicked - handler 3");
};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click",() =>{
    console.log("Button 4 was clicked - handler 4");
});


btn1.removeEventListener("click", handler3);









