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
    li.className = 'd-flex justify-content-between py-1 form-label';
    li.innerHTML = `<p>"${title}" by ${author} </p><input type="button" value="Remove" onclick="removeBooks(${id})"></hr>`;
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
  li.className = 'd-flex justify-content-between py-1 form-label';
  li.innerHTML = `<p>"${title.value}" by ${author.value} </p><input type="button" value="Remove" onclick="removeBooks(${id})"></hr>`;
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

function changeLinks(id) {
  if (id === 'list') {
    document.getElementById('list').className = 'selected-link';
    document.getElementById('new').className = 'unselected-link';
    document.getElementById('contact').className = 'unselected-link';
  } else if (id === 'new') {
    document.getElementById('list').className = 'unselected-link';
    document.getElementById('new').className = 'selected-link';
    document.getElementById('contact').className = 'unselected-link';
  } else {
    document.getElementById('list').className = 'unselected-link';
    document.getElementById('new').className = 'unselected-link';
    document.getElementById('contact').className = 'selected-link';
  }
}

function displayList() {
  changeLinks('list');
  const list = document.getElementById('section-list');
  list.className = 'd-block py-4';
  const addNew = document.getElementById('section-new');
  addNew.className = 'd-none';
  const contactInfo = document.getElementById('contact-infor');
  contactInfo.className = 'd-none ';
}

function displayAddNew() {
  changeLinks('new');
  const list = document.getElementById('section-list');
  list.className = 'd-none py-4';
  const addNew = document.getElementById('section-new');
  addNew.className = 'd-block book-form py-4';
  const contactInfo = document.getElementById('contact-infor');
  contactInfo.className = 'd-none py-4';
}

function displayContact() {
  changeLinks('contact');
  const contactInfo = document.getElementById('contact-infor');
  contactInfo.className = 'd-block py-4';
  const addNew = document.getElementById('section-new');
  addNew.className = 'd-none book-form py-4';
  const list = document.getElementById('section-list');
  list.className = 'd-none py-4';
}

window.addEventListener('load', () => {
  renderBooks();
});

document.getElementById('list').addEventListener('click', () => {
  displayList();
});

document.getElementById('new').addEventListener('click', () => {
  displayAddNew();
});

document.getElementById('contact').addEventListener('click', () => {
  displayContact();
});
/* eslint-enable */
