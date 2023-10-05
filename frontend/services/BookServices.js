
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
          const res = await fetch(URI, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          });
      
          if (!res.ok) {
            // Manejar errores de respuesta no exitosa aquí
            console.error('Error en la solicitud DELETE:', res.statusText);
            throw new Error('Failed to delete book');
          }
      
          // Verificar si la respuesta es válida antes de analizarla como JSON
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.error(error);
          // Manejar el error de manera adecuada aquí
        }
      }
      
}

export default BookService;

