


class BookService {
    constructor() {
        this.baseURI =  '/api'
    }

    async getBooks() {
        const URI = `${this.baseURI}/renderAllBooks`;
        const res = await fetch(URI);
        console.log(res)
        const books = await res.json();
        return books
    }
    async postBook(book) {
        const URI = `${this.baseURI}/createBook`;
        const res = await fetch(URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data)
    }
    async deleteBook(bookId) {
        const URI = `${this.baseURI}/deleteBook`;

        const res = await fetch(`${URI}/${bookId}`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(data);
    }
}

export default BookService;

