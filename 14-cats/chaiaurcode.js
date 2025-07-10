const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    // Clear previous image
    container.innerHTML = '';

    // Create image
    const img = document.createElement('img');
    img.src = data[0].url;
    img.alt = 'Random Cat';
    img.classList.add('random_cats');

    // Add to DOM
    container.appendChild(img);
  } catch (err) {
    console.error('Failed to fetch cat image:', err);
    container.innerHTML = '<p style="color:white;">Failed to load cat image 😿</p>';
  }
});
