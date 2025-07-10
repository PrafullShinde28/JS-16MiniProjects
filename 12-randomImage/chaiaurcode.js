const baseURL = 'https://source.unsplash.com/random/'; 
const container = document.querySelector('.content');
const button = document.querySelector('button');
const rows = 7; // You want rows * 3 images

function randomSize() {
  return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300; // between 300–309
}

function generateImages() {
  container.innerHTML = ''; // clear previous images
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${baseURL}${randomSize()}`; // generates random size image
    container.appendChild(img);
  }
}

// Initial load
generateImages();

// Refresh images on button click
button.addEventListener('click', generateImages);
