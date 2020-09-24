function Book(title, description, thumbnail, authors, price, formattedPrice) {
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.authors = authors;
    this.searchTitleForPhrase = () => {
        let boldTitle = str.replace(phrase, '<b>' + phrase + '</b>');
        document.querySelector().innerHTML = boldTitle.value;
    }
    this.bookToHTML = () => {

        if (this.thumbnail != "") {
            result = `<div><img src="${this.thumbnail}">
        <aside><h3>${this.title}</h3><h4 id="authors">${this.authors}</h4><p id="price">${this.formattedPrice}</p><p id="description">${this.description}</aside></div>`;
        } else {
            result = `<div><aside><h3>${this.title}</h3><h4 id="authors">${this.authors}</h4></aside></div>`;
        }
        return result;

    }
    this.price = price;
    this.formattedPrice = formattedPrice;

}