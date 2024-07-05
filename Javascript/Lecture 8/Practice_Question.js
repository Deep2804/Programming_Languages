// Question 1: Create a toggle button that changes the screen to dark-mode when clicked
// & light-mode when cliked again.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode ="dark";
        body.classList.add("dark");
        body.classList.remove("white");
    } else {
        currMode = "light";
        body.classList.add("white");
        body.classList.add("white");
        body.classList.remove("dark");
    }
    console.log(currMode);
});