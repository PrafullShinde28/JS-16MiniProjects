const form = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('year');
const bookList = document.getElementById('book-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const year = yearInput.value.trim();

  if (title === '' || author === '' || year === '') {
    alert('Please fill all fields');
    return;
  }

  const bookRow = document.createElement('section');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = title;

  const authorDiv = document.createElement('div');
  authorDiv.textContent = author;

  const yearDiv = document.createElement('div');
  yearDiv.textContent = year;

  bookRow.appendChild(titleDiv);
  bookRow.appendChild(authorDiv);
  bookRow.appendChild(yearDiv);

  bookList.appendChild(bookRow);

  // Clear form
  titleInput.value = '';
  authorInput.value = '';
  yearInput.value = '';
});
