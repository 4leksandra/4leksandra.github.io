// all logic

// Books is defined in bookData.js. 
// Book constructor is in book.js

// 1.0 STEP 1:

// 1.1 Create a constructor function (aka class) for Book.
// 1.2 Your class should have the following properties:
// 1.3 authors: an array of string
// 1.4 title: string
// 1.5 pageCount: number
// 1.6 averageRating: number
// 1.7 Create 10 instances of the class using the data provided in here: https://github.com/afshing/CEWP-339/blob/master/w5/js/book-filtered.js
// 1.8 You need to loop over the books object and create an instance of Book for each one


// 2.0 STEP 2:


// Add the following methods to the book class
// 2.1 isPopular: returns true, if the average rating is above 3
// 2.2 numberOfAuthors: returns the number of authors
// 2.3 getShortTitle: returns the abbreviation of the title words. For example, it returns “HPAIR” for “Harry Potter and International Relations”

// 3.0 STEP 3:

// 3.1 Create a class called Library, where it has only one property called “books” which is an array of Books
//  Define the following methods for this class. Use “this.books” to refer to the books.

// 3.2 1) Create a method called printTitles that iterates over the items in this object and print the “title” of the books
// 3.3 2) Create a method printAuthors that iterates over the items in this object and print the “authors” of the books.
// 3.4 3) Create a method findShortest, that return the title of the book with the minimum number of “pageCount”
// 3.5 4) Create a method findGoodBooks, where it returns an array consisting the title of the books with averageRating >= 3
// 3.6 5) Create a method findAuthors, where it returns an object, where the keys are the name of the books and the values are an array consisting the authors of that book




// 1.7 & 1.8  === CREATING 10 INSTANCES OF CLASS BOOB ===
// Itterating over google books and saving to an array prototyped by Book class
let firstKey = "volumeInfo";

let myBooks = [];

books.forEach(book =>{
    myBooks.push(new Book(book[firstKey].authors,
                          book[firstKey].title, 
                          book[firstKey].pageCount, 
                          book[firstKey].averageRating));
})

// Creating new Library and testing all properties and methods.

// Creating new Library with myBooks as parameter
let concordiaLibrary = new Library(myBooks);

// Book class properties
console.log("=== BOOK CLASS PROPERTIES: ===" + "\n");
console.log("Books[0] authors: " + concordiaLibrary.books[0].authors);
console.log("Books[0] title: " + concordiaLibrary.books[0].title);
console.log("Books[0] pageCount: "+ concordiaLibrary.books[0].pageCount);
console.log("Books[0] averageRating: " + concordiaLibrary.books[0].averageRating);

// Book class methods
console.log("=== BOOK CLASS METHODS: ===" + "\n");
console.log("Books[0] is popular? " + concordiaLibrary.books[0].isPopular());
console.log("Books[0] numberOfAuthors: " + concordiaLibrary.books[0].numberOfAuthors());
console.log("Books[0] getShortTitle: " + concordiaLibrary.books[0].getShortTitle());

// Library class properties & methods
console.log("=== LIBRARY CLASS PROPERTIES & METHODS: ===" + "\n");
console.log("--- printTitles: ---");
concordiaLibrary.printTitles();
console.log("--- printAuthors: ---");
concordiaLibrary.printAuthors();
console.log("--- findShortest: ---" + "\n" + concordiaLibrary.findShortest());
console.log("--- findGoodBooks: ---" + "\n" + concordiaLibrary.findGoodBooks());
console.log("--- findAuthors: ---" + "\n" + concordiaLibrary.findAuthors());
