"use strict"
// This JS file is for the logic and should be added after the book.js in the index.html

// === PRINT TITLES FUNCTION === 

function printTitles() {

    // FOR LOOP
    // for every element in array (book), print the title. 
    // for (let i = 0; i < books.length; i++) {
    //     console.log(books[i].volumeInfo.title);
    // }

    // FOR EACH LOOP
    books.forEach(book => {
        console.log(book.volumeInfo.title);
    })

}
printTitles();

// === PRINT AUTHORS FUNCTION === 

function printAuthors() {

    // FOR LOOP
    // for (let i = 0; i < books.length; i++) {
    //     console.log(books[i][key][subkey]);
    // }

    // FOR EACH LOOP
    books.forEach(book => {

        //if there is 1 or more authors, continue. 
        // if(book.volumeInfo.authors !== undefined)
        //checking anything falsy
        if (book.volumeInfo.authors) {
            //Print each author on one line
            console.log(book.volumeInfo.authors.join("\n"));
        }
    })

}
printAuthors();

// === FIND SHORTEST FUNCTION === 

function findShortest() {

    let firstKey = "volumeInfo";
    let title = "title";
    let pages = "pageCount";

    //if first book, it is the shortest. Get the number of pages for comparisons. 
    let currentShortest = book[0][firstKey][title];
    let currentShortestPages = book[0][firstKey][pages];


    // itterate over all the books. 
    books.forEach(book => {

        //if the compared book has less pages than the current shortest, set that book the the new current shortest
        if (book[firstKey][pages] < currentShortestPages) {
            currentShortestPages = book[firstKey][pages];
            currentShortest = books[firstKey][title];
        } else {
            currentShortest = currentShortest;
            currentShortestPages = currentShortestPages;
        }


    });

    return currentShortest + " with " + currentShortestPages + " pages";
}

console.log("Current Shortest book is: " + findShortest());

// === ABOVE THREE FUNCTION === 

function aboveThree() {

    let result = [];
    let firstKey = "volumeInfo";
    let key = "averageRating";
    let title = "title";

    // push the title of the books where rating >= 3
    books.forEach(book =>{
        if (book[firstKey][key] > 3) {
            let currentBook = books[firstKey][title];
            // console.log(currentBook);
            result.push(currentBook);
        }
    })
    // for (let i = 0; i < books.length; i++) {
    //     if (books[i][firstKey][key] > 3) {
    //         let currentBook = books[i][firstKey][title];
    //         // console.log(currentBook);
    //         result.push(currentBook);
    //     }
    // }
    return result;
}

console.log("here are the books with above 3 rating:" + aboveThree());

// === FIND AUTHORS FUNCTION === 

function findAuthors() {
    let result = {};

    let firstKey = "volumeInfo";
    let title = "title";
    let authors = "authors";

    /* {
      "Females and Harry Potter" : ["Ruthann Mayes-Elma"],
      "Harry Potter and International Relations":  ["Daniel H. Nexon", "Iver B. Neumann"],
    }*/

    for (let i = 0; i < books.length; i++) {
        let property = books[i][firstKey][title];
        let value = books[i][firstKey][authors];
        result[property] = value;
    }

    // books.forEach(element => {
    //     let property = books[element][firstKey][title];
    //     let value = books[element][firstKey][authors];
    //    result[property] = value;
    // });


    return result;
}

console.log("findAuthors: " + JSON.stringify(findAuthors()));
// HOW TO SHOW LIKE A REAL OBJECT?