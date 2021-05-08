// https://jsonplaceholder.typicode.com/

// const request = new XMLHttpRequest();

// request.open("GET", "https://jsonplaceholder.typicode.com/albums", true);

// request.send();

// request.onreadystatechange = function(){
//     if(this.readyState === 4){
//         let data = JSON.parse(this.responseText);

//         console.log(data);
//     }
// }

function ourOwnFetch(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send();
        request.onreadystatechange = function(){
            if(this.readyState === 4){
                resolve(this.responseText);
            }
        }
    });
}

// ourOwnFetch('https://jsonplaceholder.typicode.com/albums').then(result => console.log(result));

// async function run(){
//     let result = await ourOwnFetch('https://jsonplaceholder.typicode.com/albums');
//     console.log(result);
// }

// run();

// function call stack => event queue with C++ .... javascript C++ handshake?
// so javascript has a specific api that it hooks into to communicate with C++?  So when you fetch, the javascript fetch api first puts together an XHR OBJ req, hands off the request to C++ through some special JS/C++ api in your browser,
// your browser / C++ executes the actual http request/response cycle, and then javascript updates the XHR data object back into your local memory with the data provided by C++?

// JS compiler reads the file =>
// if special async triggering function, place onto C++ queue
// JS event loop
// callback on JS function stack

let place = "Seattle,Washington";
let apiid = "9361bd03ec7175e9eea92fdf7a717518";

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiid}`)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.main.temp);
//         let kelvin = data.main.temp;
//         let degC = Math.floor(kelvin - 273.15);
//         console.log(degC);
//         //F = C * 1.8 + 32;
//         let degF = Math.floor(degC * 1.8 + 32);
//         console.log("Degrees - F:", degF)
//     })