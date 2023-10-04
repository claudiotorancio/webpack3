


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
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(book),
        });
        const data = await res.json();
        console.log(data)
    }


    async deleteBook(bookId) {
        const URI = `${this.baseURI}/deleteBook/${bookId}`;
        const res = await fetch(URI, {
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

