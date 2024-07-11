// fetch API
// The fetch API provides an interface for fetching(sending/receiving) resources.
// It uses Request and Response objects.
// The fetch() method is used to fetch a resource(data).

// let promise = fetch(url,[options])

// API- application Programming interface

const URL =  "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const bnt = document.querySelector("#btn");



// const getFacts = async () => {
//     console.log("getting data.....");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText = data[2].text;
// };

function getFacts() {
    fetch(URL).then((response) =>{
        return response.json();
    }).then ((data) =>{
        console.log(data);
        factPara.innerText = data[2].text;
    })
}


bnt.addEventListener("click", getFacts);


// Understanding Terms
// AJAX is Asynchronous JS & XML
// JSON is Javascript Object Notation
// json() method: returns a second promise that resolves with the result of parsing the response body text
// as JSON.(Input is JSON, Output is JS Object)


// Requests & Response
// HTTP Verbs
// Response Status Code
// * HTTP response headers also contain details about the responses,such as content type,HTTP status code etc.
