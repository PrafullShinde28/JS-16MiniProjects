const input = document.getElementById('user-input');
const userCard = document.getElementById('user-card');

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Fetch user and update UI
async function fetchUser(query) {
  if (!query.trim()) {
    userCard.style.display = 'none';
    return;
  }

  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    userCard.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" />
      <h2>${user.name.first} ${user.name.last}</h2>
      <p>${user.email}</p>
      <p>${user.location.city}, ${user.location.country}</p>
    `;
    userCard.style.display = 'block';
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

const debouncedFetch = debounce(fetchUser, 500);

input.addEventListener('input', (e) => {
  debouncedFetch(e.target.value);
});
