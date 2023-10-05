
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
        try {
          const URI = `${this.baseURI}/cutBook/${bookId}`;
          const response = await fetch(URI, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json',
            },
          });
    
          if (!response.ok) {
            throw new Error('Failed to delete book');
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
          throw error; // Re-lanzamos el error para que el controlador de la aplicación lo maneje
        }
      }
    }

export default BookService;

