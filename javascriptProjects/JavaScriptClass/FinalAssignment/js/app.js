// NATIVE JAVASCRIPT 

// On click, call appropriate function 
document.querySelector("button#search").addEventListener("click", findBooks, false);
document.querySelector("button#sortAlpha").addEventListener("click", sortAlphabetically, false);
document.querySelector("button#sortByPrice").addEventListener("click", sortByPrice, false);

// Global variables
let url = "";
let phrase = "";
let myLibrary = {};

// === FIND BOOKS === 
// This is the function that is called when user presses the search button.

function findBooks() {
    // 1. Get input from user
    phrase = getPhrase();
    // 2. Create Url
    url = createURL(phrase);
    // 3. Send request with displayed objects
    sendRequest(url, phrase);

    //display Sort buttons
    document.querySelector("button#sortAlpha").style.display = "inline";
    document.querySelector("button#sortByPrice").style.display = "inline";
}
//-----------------------------------------------
// --- GET PHRASE ---  called inside findBooks().
// This function gets input from user

getPhrase = () => {
    let phrase = document.querySelector("#phrase").value;
    return phrase;
}

// --- CREATE URL --- called inside findBooks().
// This function returns the url with the query string that the user searched. 
// This url should return the correct JSON objects 

createURL = (phrase) => {
    return `https://www.googleapis.com/books/v1/volumes?q={${phrase}}`;
}
// --- SEND REQUEST ---  called inside findBooks().
// This function sends request to server and displays the Results in HTML

sendRequest = (url, phrase) => {
    // 1. Create new XMLHttpRequest object
    let req = new XMLHttpRequest();
    // 2. Action that you will do once you open url 
    let listOfBooks = "";
    req.addEventListener("load", reqlistener);

    // 3. Open url
    req.open("GET", url);
    // 4. Send url
    req.send();

}

//-----------------------------------------------

// --- REQ LISTENER --- used as a callback function inside addEventListener inside sendRequest(). 
// This function represents what happens after server resp
// This function parses response from server to a JS object and transformed it into a Library, then displays the result in browser - parses it into a JS object and saves to variable. Then 

function reqlistener() {
    listOfBooks = JSON.parse(this.responseText);
    myLibrary = transform(listOfBooks);
    displayResult(myLibrary);
}
//-------------------------------------------------

// --- TRANSFORM ---  called inside reqListener().
// This function transformes the parsed JSON response into a Library with an array of Books.
transform = (listOfBooks) => {

    let myBooks = [];
    listOfBooks.items.forEach(book => {

        if (book.saleInfo.saleability === "FOR_SALE" || book.imageLinks != undefined) {
            let price = book.saleInfo.listPrice.amount;
            let formattedPrice = "$" + price.toFixed(2);
            myBooks.push(new Book(book.volumeInfo.title, book.volumeInfo.description, book.volumeInfo.imageLinks.smallThumbnail, book.volumeInfo.authors, book.saleInfo.listPrice.amount, formattedPrice));
        } else {
            if (book.volumeInfo.imageLinks === undefined) {
                myBooks.push(new Book(book.volumeInfo.title, book.volumeInfo.description, "", book.volumeInfo.authors));
            } else {
                myBooks.push(new Book(book.volumeInfo.title, book.volumeInfo.description, book.volumeInfo.imageLinks.smallThumbnail, book.volumeInfo.authors));
            }
        }
    })
    cleanOutArray(myBooks);
    displayAuthorsProperly(myBooks);
    let myLibrary = new Library(myBooks);
    return myLibrary;
}

// --- CLEAN OUT ARRAY --- called inside transform().
// This function replaces undefined with an empty string 

cleanOutArray = (array) => {
    // 1. Iterate over the elements in the array.
    // 2. If it is equal to undefined, make it equal to an empty string.

    array.forEach(book => {
        for (let property in book) {
            if (book[property] == undefined) {
                book[property] = "";
            }
        }

    })

    return array;
}

// --- Display Authors properly --- called inside transform().
// This function puts a space after the comma between the authors

displayAuthorsProperly = (array) => {
    array.forEach(book => {
        if (book.authors.length > 1) {
            book.authors = book.authors.join("," + " ");
        }
    })
    return array;
}

//-------------------------------------------------

// --- DISPLAY RESULT ---  called inside reqListener().
// This function displays some characteristics of the searched book objects in the browser.
// Also displays user's entered phrase in BOLD.
displayResult = (library) => {
    library.libraryToHTML();
    highlightText();
}

//-------------------------------------------------

// --- HIGHLIGHT TEXT --- 
// This function highlights the user's search word inside the title, description and authors.

highlightText = () => {

    //1. Get all aside text elements 
    let textAll = document.querySelectorAll("aside");
    //2. Get phrase
    let phrase = getPhrase();
    //3. Save phrase in lowercase for comparison
    let phraseLowerCase = getPhrase().toLowerCase();

    //4. For each aside text element, convert to lowercase, see if it includes the phrase, replace phrase with bold phrase. 
    if (phrase != "") {
        textAll.forEach(aside => {
            asideText = aside.innerHTML;
            asideLowerCase = asideText.toLowerCase();

            if (asideLowerCase.includes(phraseLowerCase)) {
                boldText = aside.innerHTML.replace(new RegExp(phrase, "gi"), "<b>" + phrase + "</b>");
                aside.innerHTML = boldText;
            }

        });
    }
}

// === SORT ALPHABETICALLY ===
// This function sorts books alphabetically

function sortAlphabetically() {
    // 1. Get list of Books & sort, save the sorted books array inside the library.
    myLibrary.books = myLibrary.sortAlphabetically();
    // 2. Display the result on the page.  
    displayResult(myLibrary);
}

// === SORT BY PRICE ===
// This function sorts books by price

function sortByPrice() {
    // 1. Get list of Books & sort, save the sorted books array inside the library.
    myLibrary.books = myLibrary.sortByPrice();
    // 2. Display the result on the page.  
    displayResult(myLibrary);
}