

export const getBooks = async () => {
        const res = await fetch(`/api/renderAllbooks`);
        const books = await res.json();
        return books
    }

    
export const postBook = async (book) => {
        const res = await fetch(`/api/createBook`, {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
          
          body: JSON.stringify(book)
          
        })
        
        const data = await res.json();
        console.log(data)
       
    }

export const deleteBook = async (bookId) => {
        try {
          const res = await fetch(`/api/cutBook/${bookId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({bookId})
          
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
      
