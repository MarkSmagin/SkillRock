const bookList = [{
    title: 'Метро 2033',
    author: 'Дмитрий Глуховский',
    isbn: 9785171144258,
    availability: true
},
{
    title: 'Dragon Age: Украденный трон',
    author: 'Дэвид Гейдер',
    isbn: 9785389155374,
    availability: false
},
{
    title: 'Гордость и предубеждение',
    author: 'Джейн Остен',
    isbn: 9785170393091,
    availability: true
},
{
    title: 'Хороших девочек не убивают',
    author: 'Холли Джексон',
    isbn: 9785171326043,
    availability: true
}];

class Book {
    title;
    author;
    isbn;
    availability = true;
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Library {
    constructor(bookList) {
        this.bookList = bookList;
    }
    addBook(book) {
        this.bookList.push(book);
        return this.bookList;

    }
    borrowBook(isbn) {
        const book = (this.bookList).find((book) => book.isbn === isbn);
        book.availability = false;
    }
    returnBook(isbn) {
        const book = (this.bookList).find((book) => book.isbn === isbn);
        book.availability = true;
    }
    listAvailableBooks() {
        const availableBooks = [];
        for (let i = 0; i < (this.bookList).length; i++){
            if (this.bookList[i].availability == true){
                availableBooks.push(this.bookList[i]);
            }
        }
        return availableBooks;
    }
}

let newBook = new Book('Отель', 'Артур Хейли', 9785171211837);
let newList = new Library(bookList);
newList.addBook(newBook);
newList.borrowBook(9785170393091);
newList.returnBook(9785389155374);
console.log(newList.listAvailableBooks());