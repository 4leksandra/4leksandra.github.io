// === LIBRARY CLASS CONSTRUCTOR === 

function Library(books) {
    this.books = books;
    this.libraryToHTML = () => {
        let result = "";
        this.books.forEach(book => {
            result += book.bookToHTML();
        })
        document.querySelector("#books").innerHTML = result;

    }
    this.sortAlphabetically = () => {
        let booksSorted = this.books.sort(function (a, b) {
            let atitle = a.title.toUpperCase();
            let btitle = b.title.toUpperCase();
            // if a is lower in the alphabet than b, put to the bottom - RETURN -1
            // else if a is higher than b, put to top - RETURN 1
            // else same - RETURN 0
            return (atitle < btitle) ? -1 : (atitle > btitle) ? 1 : 0
        })
        return booksSorted;

    }

    this.sortByPrice = () => {
        let booksSorted = this.books.sort(function (a, b) {

            // if both prices are undefined they are the same - RETURN 0
            if (a.price === "" && b.price === "") {
                return 0;
            }
            // if a price is undefined but b isn't, a is lower - RETURN -1
            if (a.price === "" && b.price != "") {
                return 1;
            }
            // if b price is undefined but a isn't, a is higher - RETURN 1
            if (b.price === "") {
                return -1;
            }

            return a.price - b.price;
        });
        return booksSorted;
    }
}