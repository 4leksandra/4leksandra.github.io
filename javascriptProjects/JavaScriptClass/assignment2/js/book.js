// constructor for book

"use strict"
// This JS file is for the logic and should be added after the book.js in the index.html

// 1.1 to 1.6 === CONSTRUCTOR FOR BOOK with properties === 
// 2.1 to 2.3 === Adding methods to book class ===

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

