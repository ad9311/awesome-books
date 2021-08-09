let books = [];

function Book(author, title) {
  this.author = author;
  this.title = title;
}

function addBooks() {
  let author = document.getElementById('author');
  let title = document.getElementById('title');
  let li = document.createElement('li');

  let id = `${author.value}_${title.value}`.toLowerCase();

  li.id = id;
  li.innerHTML = `<p>${author.value} - ${title.value}</p><input type="button" value="Remove" onclick="removeBooks(${id})">`;

  books.push(new Book(author.value, title.value));
  document.getElementById('books').appendChild(li); 
}

function removeBooks(id) {
  document.getElementById().remove();
}
