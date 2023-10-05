
class BookService {
    constructor() {
        this.baseURI =  '/api'
    }

    async getBooks() {
        const URI = `${this.baseURI}/renderAllbooks`;
        const res = await fetch(URI);
        const books = await res.json();
        return books
    }

    
    async postBook(book) {
        const URI = `${this.baseURI}/createBook`;
        const res = await fetch(URI, {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
          body: JSON.stringify(book)
          
        })
        
        const data = await res.json();
        console.log(data)
       
    }

    async deleteBook(bookId) {
        const URI = `${this.baseURI}/cutBook/${bookId}`;
        const res = await fetch(URI, {
        
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(data);
    }
}

export default BookService;

