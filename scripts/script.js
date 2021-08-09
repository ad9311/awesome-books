let books = [];
function addBooks() {
  let author = document.getElementById('author');
  let title = document.getElementById('title');
  let li = document.createElement('li');
  let currentDate = new Date();
  let time = (currentDate.getSeconds() + currentDate.getMilliseconds()) * 2;
  let id = 'book' + time;
  li.id = id;
  li.innerHTML = `<p>${author.value} - ${title.value}</p><input type="button" value="Remove" onclick="removeBooks(${id})"> <hr>`;
  books.push(id);
  document.getElementById('books').appendChild(li);
}
function removeBooks(id) {
  let index = books.indexOf(id.id);
  books.splice(index, 1);
  document.getElementById(id.id).remove();
}
