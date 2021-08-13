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

document.getElementById('list').addEventListener('click', () => {
  displayList();
});

document.getElementById('new').addEventListener('click', () => {
  displayAddNew();
});

document.getElementById('contact').addEventListener('click', () => {
  displayContact();
});
