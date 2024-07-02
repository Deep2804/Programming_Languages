// Question 1: For a given array with marks of student -> [85,97,44,37,76,60]
// Find the average marks of entire class.

let marks = [85,97,44,37,76,60];
let total = 0;
for(let idx = 0;idx<marks.length;idx++){
    total = total + marks[idx];
    console.log(total);
}

average = total / marks.length;
console.log("the average of",marks,"is",average);


// Question 2 : For a given array with prices of 5 items -> [250,645,300,900,50]
// All item have an offer of 10% OFF on them. change the array to store the final 
// price after applying offer.

let price = [250,645,300,900,50];

let i = 0;
for(let val of price){
    console.log(`Value of index ${i} = ${val} `);
    let offer = val/10;
    price[i] = price[i] - offer;
    console.log(`value after offer ${price[i]}`);
    i++;
}

for(let i = 0; i<price.length;i++){
    let offer = price[i]/10;
    price[i] -= offer;
    console.log(`value after offer ${price[i]}`);
}


// Question 3: Create an array to store companies -> "Bloomberg", "Microsoft",
// "Uber","Google","IBM","Netflix"
// a. Remove the first company from array list
// b. Remove Uber & add Ola on it place 
// c. Add amazon at the end

let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

company.splice(0,1);
console.log(company);

company.splice(2,1,"Ola");
console.log(company);

company.splice(5,0,"Amazon");
console.log(company);