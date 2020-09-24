// function reqListener(){
//     console.log(this.responseText);
//     // when reponse comes back, this callback function is called
// }

// function submit() {
//     // 1. create new request object of class XMHHttpRequest
//     var req = new XMLHttpRequest();

//     //2a. Event listener. Do 2b, 3 instead
//     // req.addEventListener("load", reqListener)

//     //2b Open the URL
//     req.open("GET", "https://www.googleapis.com/books/v1/volumes?q=harry");

//     //3. On readyStateChange 
//     req.onreadystatechange = function () {
//         // when readyState = 4 (Request finished, response ready.) and status (request received)
//         if (this.readyState === 4 && this.status === 200) {
//             //get responseText of XMLhttpReqquest (returns server response as js string)
//             console.log(JSON.parse(this.responseText));
//         }
//     }
//     // send the request
//     req.send();
//     console.log("after");
// }

// // === FIND BEER ===

// // HOMEWORK - Organize code. Re-run. 
// // How can I show only 10? 
// // I don't know if i did the second one properly. 
// // Can't get link to work
// function findBeer() {
//     findBeerByCity();
//     findBeerByName();
// }

// function findBeerByCity() {

//     // 1. get city name from input
//     let city = document.querySelector("#city").value;

//     // 2. create a URL String
//     let url = "https://api.openbrewerydb.org/breweries?by_city=" + city;

//     // 3. create new XMLHttpRequest obj
//     let req = new XMLHttpRequest();
//     let nameCity = "";

//     // when website is loaded, on state change of request
//     req.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {

//             //converts string into an JS obect 
//             let breweries = JSON.parse(this.responseText);

//             //prints to console
//             console.log(breweries);

//             //itterate over objects, for each name. Print out 
//             breweries.forEach(brewerie => {
//                 nameCity += "<li>" + brewerie.name + "</li>" + brewerie.street + " " + '<a href="' + brewerie.website_url + '"></a>';
//             });

//             //put text into html
//             document.querySelector("#cityName ul").innerHTML = nameCity;
//         }
//     };

//     req.open("GET", url); // this listens to events

//     // sends request to server
//     req.send();
// }

// function findBeerByName() {
//     // 1. get city name from input
//     let name = document.querySelector("#name").value;

//     // 2. create a URL String
//     let url = "https://api.openbrewerydb.org/breweries?by_name=" + name;

//     // 3. create new XMLHttpRequest obj
//     let req = new XMLHttpRequest();
//     let nameBrewery = "";

//     // when website is loaded, on state change of request
//     req.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {

//             //converts string into an JS obect 
//             let breweries = JSON.parse(this.responseText);

//             //prints to console
//             console.log(breweries);

//             //itterate over objects, for each name. Print out 
//             breweries.forEach(brewerie => {
//                 nameBrewery += "<li>" + brewerie.name + "</li>";
//             });

//             //put text into html
//             document.querySelector("#brewName ul").innerHTML = nameBrewery;
//         }
//     };

//     req.open("GET", url); // this listens to events

//     // sends request to server
//     req.send();
// }

// SORT THE LIST

function findBeer2() {
    //1. get city name from input
    //2. create url
    //3. send a request

    let city = getCityName();
    let name = getName();
    let urlStr = createURL(city, name);
    // console.log(city);
    // console.log(urlStr);
    sendRequest(urlStr);

}

function getCityName() {
    let city = document.querySelector("#city").value;
    return city;
    // console.log(city);
}

function getName(){
    let name = document.querySelector("#name").value;
    return name;
}

function createURL(city, name) {
    return `https://api.openbrewerydb.org/breweries?by_city=${city}&by_name=${name}`;
    //TEMPLATING =  (putting a variable in a link)
}

function reqListener() {
    let list = JSON.parse(this.responseText);
    showResult(list);
}

function showResult(list) {
    let result = '';
    list.forEach((item) => {
        result += `<li><a href="${item.website_url}">${item.name}</a></li>`;
    });
    // console.log(result);
    document.getElementById('beers').innerHTML = result;
}

function sendRequest(urlStr) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    //USE this instead of addEventListener
    // req.onreadystatechange = function () {
    //             // when readyState = 4 (Request finished, response ready.) and status (request received)
    //             if (this.readyState === 4 && this.status === 200) {
    //                 //get responseText of XMLhttpReqquest (returns server response as js string)
    //                 JSON.parse(this.responseText);
    //             }

    oReq.open("GET", urlStr);
    oReq.send()
}