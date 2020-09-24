"use strict"
// This JS file is for the logic and should be added after the book.js in the index.html

//=== CONSTRUCTOR FOR BOOK === 

function Book(authors, title, pageCount, averageRating){
    this.authors = authors;
    this.title = title;
    this.pageCount = pageCount;
    this.averageRating = averageRating;
    this.isPopular = () => {
        return this.averageRating >= 3
    }
    this.numberOfAuthors = () => {

        return this.authors ? this.authors.length : 0;

        // if (this.authors == undefined){
        //     return 0;
        // }
        // else{
        // return this.authors.length;
        // }
    }
    this.getShortTitle = () => {
        let shortArr = [];
        let splitArr =  this.title.split(" ");
        splitArr.forEach(word => {
            shortArr.push(word.charAt(0));
        })
        return shortArr.join("").toUpperCase();
    }
            
}

// ===  CONVERT GOOGLE ARRAY OF BOOKS TO AN ARRAY OF OBJECTS PROTOTYPED BY BOOK CONSTRUCTOR === 

let firstKey = "volumeInfo";

let myBooks = [];

books.forEach(book =>{
    myBooks.push(new Book(book[firstKey].authors,
                          book[firstKey].title, 
                          book[firstKey].pageCount, 
                          book[firstKey].averageRating));
})

console.log(myBooks);

myBooks.forEach(function(book){
    console.log(book.title + " is popular? " + book.isPopular());
})

myBooks.forEach(function(book){
    console.log(book.title + " has " + book.numberOfAuthors() + " author(s)");
})

myBooks.forEach(book => {
    console.log(book.getShortTitle());
})

// === PRINT TITLES FUNCTION === 

function printTitles() {

    // FOR LOOP
    // for every element in array (book), print the title. 
    // for (let i = 0; i < books.length; i++) {
    //     console.log(books[i].volumeInfo.title);
    // }

    // FOR EACH LOOP
    myBooks.forEach(book => {
        console.log(book.title);
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
    myBooks.forEach(book => {

        //if there is 1 or more authors, continue. 
        // if(book.volumeInfo.authors !== undefined)
        //checking anything falsy
        if (book.authors) {
            //Print each author on one line
            console.log(book.authors.join("\n"));
        }
    })

}
printAuthors();

// === FIND SHORTEST FUNCTION === 

function findShortest() {

    let title = "title";
    let pages = "pageCount";

    //if first book, it is the shortest. Get the number of pages for comparisons. 
    let currentShortest = myBooks[0][title];
    let currentShortestPages = myBooks[0][pages];


    // itterate over all the books. 
    myBooks.forEach(book => {

        //if the compared book has less pages than the current shortest, set that book the the new current shortest
        if (book[pages] < currentShortestPages) {
            currentShortestPages = book[pages];
            currentShortest = book[title];
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
    myBooks.forEach(book => {
        if (book[key] >= 3) {
            let currentBook = book[title];
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

console.log(aboveThree());

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

    myBooks.forEach( book => {
        let property = book[title];
        let value = book[authors];
        result[property] = value;

    })
    // for (let i = 0; i < books.length; i++) {
    //     let property = books[i][firstKey][title];
    //     let value = books[i][firstKey][authors];
    //     result[property] = value;
    // }

    return result;
}
console.log(findAuthors());
console.log("findAuthors: " + JSON.stringify(findAuthors()));


// === Library Class === 

function Library(books){
    this.books = books;
    this.printTitles = printTitles();
    this.printAuthors = printAuthors();
    this.findShortest = findShortest();
    this.findGoodBooks = aboveThree();
    this.findAuthors = findAuthors();
}
let library1 = new Library(myBooks);
