import './styles/app.css';

import { addANewBook, clearBookForm, deleteBookHandler, renderBooks, renderMessage } from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
});

document.getElementById('book-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const formData = new FormData();
  formData.append('title', title);
  formData.append('author', author);
  formData.append('isbn', isbn);

  await addANewBook(formData);
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
