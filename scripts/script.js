function test() {
  let author = document.getElementById('author');
  let title = document.getElementById('title');
  let li = document.createElement('li');

  let id = `${author.value}-${title.value}`.toLowerCase();

  li.id = id;
  li.innerHTML = `<p>${author.value} - ${title.value}</p>`;

  document.getElementById('books').appendChild(li); 
}
