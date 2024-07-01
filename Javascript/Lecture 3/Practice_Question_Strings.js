// Question 1: Prompt the user to enter their full name. generate a username for them 
// based on the input. Start username with @, followed by their full name and ending with
// the full length.
// e.g. username = "deepaksingh" , username should be "@deepksingh28" 

let fullName = prompt("Enter Full Name here:");
let username = "@" + fullName + fullName.length;
console.log(username);