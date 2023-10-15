
import './styles/app.css';

import { addANewBook, clearBookForm, deleteBookHandler, renderBooks, renderMessage } from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
});

document.querySelector('[data-form]').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const title = document.querySelector('[data-title]').value;
  const author = document.querySelector('[data-author]').value;
  const isbn = document.querySelector('[data-isbn]').value;
  const image = document.querySelector('[data-image]').value
 

const bookData = {
  title,
  author,
  isbn,
image
}
    /*const bookData = new FormData()
    bookData.append('image', image)
    bookData.append('title', title)
    bookData.append('author', author)
    bookData.append('isbn', isbn)*/

  await addANewBook(bookData);
  renderMessage('New book added', 'success', 3000);
  clearBookForm();
});

document.getElementById('books-cards').addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('delete')) {
    const bookId = e.target.getAttribute('_id');
    deleteBookHandler(bookId);
    renderMessage('Libro borrado', 'danger', 2000);
  }
});
