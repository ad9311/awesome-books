let books = [];

function updateLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

/* eslint-disable */
function addBooks() {
  /* eslint-enable */
  const author = document.getElementById('author');
  const title = document.getElementById('title');
  const li = document.createElement('li');
  const currentDate = new Date();
  const time = (currentDate.getSeconds() + currentDate.getMilliseconds()) * 2;
  const id = `book${time}`;
  li.id = id;
  li.innerHTML = `<p>${author.value} - ${title.value}</p><input type="button" value="Remove" onclick="removeBooks(${id})"></hr>`;
  const book = { author: author.value, title: title.value, id };
  books.push(book);
  updateLocalStorage();
  document.getElementById('books').appendChild(li);
  /* eslint-disable */
}

function removeBooks(object) {
  /* eslint-enable */
  books = books.filter((book) => book.id !== object.id);
  updateLocalStorage();
  document.getElementById(object.id).remove();
  /* eslint-disable */
}
/* eslint-enable */
