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
    // let phrase = $("#phrase").val();
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
    let listOfBooks = JSON.parse(this.responseText);
    showResult(listOfBooks);
}
//-------------------------------------------------

showResult = (listOfBooks) => {
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

        //3. If phrase user entered is not null,
        // For each aside, get its text,
        // split into an array of words
        // itterate over the array, if array element equals to (not case sensitive) Phrase, wrap in tag.
        // else if, array has the phrase inside, find the phrase, replace the phrase with phrase that is wrapped in tag.
        // join the array with space and save into variable
        // put that variable into html. 

        // If phrase user entered is not null
        if (phrase != "") {
            // for each aside inside html
            textAll.forEach(aside => {

                    // get text of aside
                    asideText = aside.innerHTML;

                    // save phrase in case insensitive Reg Exp
                    phraseRegEx = new RegExp(phrase, "i");

                    let phraseIndex = "";
                    let phraseInSearch = "";
                    let asideBoldText = "";
                    

                    // if phrase is one word
                    if (phrase.split() > 1) {
                        // split aside into array of words
                        asideArr = asideText.split(" ");

                        // itterate over array of words
                        for (let i = 0; i < asideArr.length; i++) {

                            // save current word in uppercase for comparison
                            let arrElementUpper = asideArr[i].toUpperCase();

                            // save phrase in uppercase for comparison
                            let phraseUpper = phrase.toUpperCase();

                            // compare current word and phrase. 
                            //If they are the same save array element wraped in span tag.
                            if (arrElementUpper === phraseUpper) {
                                asideArr[i] = '<span class="highlight">' + asideArr[i] + '</span>';
                            }
                            //if arrElementUpper contains searched phrase
                            else if (arrElementUpper.includes(phraseUpper)) {

                                // find index where phrase is in
                                 phraseIndex = asideArr[i].search(phraseRegEx);
                                 phraseInSearch = "";

                                // Find character after the phrase in the word 
                                let charAfterPhrase = asideArr[i].slice(phraseIndex + phrase.length, phraseIndex + phrase.length + 1);

                                // If char after phrase is an s
                                if (charAfterPhrase === "s") {
                                    // phraseInSearch = Aside array element sliced at index of phrase, to the end, + the s.
                                    phraseInSearch = asideArr[i].slice(phraseIndex, phraseIndex + phrase.length + 1);
                                } else {
                                    // phraseInSearch = Aside array element sliced at index of phrase, to the end
                                    phraseInSearch = asideArr[i].slice(phraseIndex, phraseIndex + phrase.length);
                                }
                                // replace the phrase in search with phrase wrapped with tag
                                asideArr[i] = asideArr[i].replace(phraseInSearch, '<span class="highlight">' + phraseInSearch + '</span>');
                            }

                            asideBoldText = asideArr.join(" ");
                            aside.innerHTML = asideBoldText;

                        }}
                        else { // If phrase is more than 1 word
                            // current text is aside text sliced at begining to where the first instance of phrase is
                            let currentText = asideText.slice(0, asideText.search(phraseRegEx) + phrase.length);

                            console.log("currentText before do:", currentText);

                            // saving asideLastIndex to save when you have itterated through the entire asideText
                            let asideLastIndex = currentText.search(phraseRegEx) + phrase.length;
                            let currentTextLength = 0;
                            console.log("asideLastIndex before do:", asideLastIndex);
                            // do this while current text has phrase inside and current text isn't smaller than phrase
                            do {
                                // if currentText contains phrase and currentText is bigger or equal to phrase.length
                                if(currentText.search(phraseRegEx)!= -1 && currentText.length >= phrase.length){
                                // find index of phrase 
                                phraseIndex = currentText.search(phraseRegEx);
                                console.log("phraseIndex inside do:", phraseIndex);
                                // save phraseInSearch
                                phraseInSearch = currentText.slice(phraseIndex, phraseIndex + phrase.length);
                                console.log("phraseInSearch inside do:", phraseInSearch);
                                // save currentText length that adds to each other
                                currentTextLength = currentTextLength + currentText.length;
                                console.log("currentTextLength:", currentTextLength);
                                // save the end of phrase inside of aside to asideLastIndex 
                                asideLastIndex = currentTextLength;
                                console.log("asideLastIndex inside do:", asideLastIndex);
                                //save wrapped phrase
                                let wrappedPhrase = '<span class="highlight">' + phraseInSearch + '</span>';
                                console.log("wrappedPhrase inside do:", wrappedPhrase);

                                // replace phrase in current text with wrapped phrase
                                currentText = currentText.replace(phraseInSearch, wrappedPhrase);
                                console.log("currentText after wrapping inside do:", currentText);
                                
                                // save current text to asideBoldText
                                asideBoldText += currentText;
                                console.log("asideBoldText inside do:", asideBoldText);
                                currentText = asideText.slice(asideLastIndex);
                                console.log("currentText after slicing from wrapped phrase:", currentText);
                                currentText = currentText.slice(0, currentText.search(phraseRegEx) + phrase.length);
                                console.log("currentText after slicing to phrase:", currentText);
                                
                                }

                                // if current text doesn't contain phrase, just save to asideBoldText
                                else{
                                    asideBoldText += currentText;
                                    currentTextLength = currentTextLength + currentText.length;
                                    // save the end of phrase inside of aside to asideLastIndex 
                                    asideLastIndex = currentTextLength;

                                    currentText = asideText.slice(asideLastIndex);
                                }
                                // while you haven't reached the end of asideText
                            } while (asideText.length != asideLastIndex);

                            asideBoldText += currentText;
                            aside.innerHTML = asideBoldText;
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
