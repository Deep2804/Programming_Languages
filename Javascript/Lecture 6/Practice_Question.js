// Question 1: Create an H2 heading element with text-"Hello JavaScript". Append
// "from Future Scopie students" to this text using JS. 

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
 
h2.innerText = h2.innerText + " from Future Scopie channel";



// Question 2: Create 3 divs with common class name-"box". Access them & add some 
// unique property of them. 

let divs = document.querySelectorAll(".box");


let idx = 1;
for(let div of divs){
    div.innerText=`New Unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "New Unique 1";
// divs[1].innerText = "New Unique 2";
// divs[2].innerText = "New Unique 3";