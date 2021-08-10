/* eslint-disable max-classes-per-file, no-unused-vars */
class BookCollection {
  constructor() {
    this.books = [];
  }

  saveBook(book) {
    this.books.push(book);
  }

  removeBook(removedBook) {
    const newCollection = this.books.filter((book) => book.id !== removedBook.id);
    this.books = newCollection;
    return newCollection;
  }
}

class Book {
  constructor(author, title, id) {
    this.author = author;
    this.title = title;
    this.id = id;
  }
}

const bookCollection = new BookCollection();

function updateLocalStorage() {
  localStorage.setItem('books', JSON.stringify(bookCollection.books));
}

function loadLocalStorage() {
  if (localStorage.getItem('books')) {
    bookCollection.books = JSON.parse(localStorage.getItem('books'));
  }
}

function renderBooks() {
  loadLocalStorage();
  bookCollection.books.forEach((book) => {
    const { author } = book;
    const { title } = book;
    const { id } = book;
    const li = document.createElement('li');
    li.id = id;
    li.innerHTML = `<p>${author} - ${title}</p><input type="button" value="Remove" onclick="removeBooks(${id})"></hr>`;
    document.getElementById('books').appendChild(li);
  });
}

function addBooks() {
  const author = document.getElementById('author');
  const title = document.getElementById('title');
  const li = document.createElement('li');
  const currentDate = new Date();
  const time = (currentDate.getSeconds() + currentDate.getMilliseconds()) * 2;
  const id = `book${time}`;
  li.id = id;
  li.innerHTML = `<p>${author.value} - ${title.value}</p><input type="button" value="Remove" onclick="removeBooks(${id})"></hr>`;
  const book = new Book(author.value, title.value, id);
  bookCollection.saveBook(book);
  updateLocalStorage();
  document.getElementById('books').appendChild(li);
}

function removeBooks(object) {
  bookCollection.removeBook(object);
  updateLocalStorage();
  document.getElementById(object.id).remove();
}

window.addEventListener('load', () => {
  renderBooks();
});
/* eslint-enable */