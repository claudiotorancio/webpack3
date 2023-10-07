import { getBooks, postBook, deleteBook } from './services/BookServices.js';
import { format } from 'timeago.js';

export const renderBooks = async () => {
  const books = await getBooks();
  const booksCardContainer = document.getElementById('books-cards');
  booksCardContainer.innerHTML = '';

  books.forEach(book => {
    const div = document.createElement('div');
    div.className = '';
    div.innerHTML = `
      <div class="container p-4">
        <div class="card m-2">
          <div class="row justify-content-md-center">
            <div class="col-md-8">
              <div class="card-block px-2">
                <h4 class="card-title">${book.title}</h4>
                <p class="card-text">${book.author}</p>
                <a href="#" class="btn btn-danger mt-2 mb-2 delete" _id="${book._id}">X</a>
              </div>
            </div>
          </div>
          <div class="card-footer d-flex">
            ${format(book.created_at)}
          </div>
        </div>
      </div>
    `;
    booksCardContainer.appendChild(div);
  });
};

export const addANewBook = async (book) => {
  await postBook(book);
  clearBookForm();
  renderBooks();
};

export const clearBookForm = () => {
  document.getElementById('book-form').reset();
};

export const renderMessage = (message, colorMessage, secondsToRemove) => {
  const div = document.createElement('div');
  div.className = `alert alert-${colorMessage} message`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.col-md-4');
  const bookForm = document.querySelector('#book-form');

  container.insertBefore(div, bookForm);
  setTimeout(() => {
    document.querySelector('.message').remove();
  }, secondsToRemove);
};

export const deleteBookHandler = async (bookId) => {
  await deleteBook(bookId);
  renderBooks();
};
