const books = [];
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
  li.innerHTML = `<p>${author.value} - ${title.value}</p><input type="button" value="Remove" onclick="removeBooks(${id})"> <hr>`;
  books.push(id);
  document.getElementById('books').appendChild(li);
  /* eslint-disable */
}
function removeBooks(id) {
  /* eslint-enable */
  const index = books.indexOf(id.id);
  books.splice(index, 1);
  document.getElementById(id.id).remove();
  /* eslint-disable */
}
/* eslint-enable */
