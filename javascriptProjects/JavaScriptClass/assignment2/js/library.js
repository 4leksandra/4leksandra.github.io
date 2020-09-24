// constructor for library

// 3.1 to 3.6 === Library Class === 
// VERIFY LOGIC. 
function Library(books) {
    this.books = books;
    this.printTitles = () => {
        this.books.forEach(book => {
            console.log(book.title);
        })
    }
    this.printAuthors = () => {
        this.books.forEach(book => {
            //if there is 1 or more authors, continue. 
            // if(book.authors !== undefined)
            //checking anything falsy
            if (book.authors) {
                //Print each author on one line.
                //join array on new line
                console.log(book.authors.join("\n"));
            }
        })
    }
    this.findShortest = () => {
        let title = "title";
        let pages = "pageCount";

        //if first book, it is the shortest. Get the number of pages for comparisons. 
        let currentShortest = this.books[0][title];
        let currentShortestPages = this.books[0][pages];


        // itterate over all the books. 
        this.books.forEach(book => {

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
    this.findGoodBooks = () => {

        let result = [];
        let key = "averageRating";
        let title = "title";

        // push the title of the books where rating >= 3
        this.books.forEach(book => {
            if (book[key] >= 3) {
                let currentBook = book[title];
                result.push(currentBook);
            }
        })
        
        return result;
    }
    this.findAuthors = () => {

        let result = {};

        let title = "title";
        let authors = "authors";

        /* {
          "Females and Harry Potter" : ["Ruthann Mayes-Elma"],
          "Harry Potter and International Relations":  ["Daniel H. Nexon", "Iver B. Neumann"],
        }*/

        this.books.forEach(book => {
            let property = book[title];
            let value = book[authors];
            result[property] = value;

        })
        

        return JSON.stringify(result);
    };
}