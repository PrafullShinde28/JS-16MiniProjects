const cursor = document.querySelector('.cursor');

// Array of 10 hex colors
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];

// Move the cursor and change color
document.addEventListener('mousemove', function (event) {
  const x = event.clientX;
  const y = event.clientY;

  // Move the custom cursor
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';

  // Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  cursor.style.backgroundColor = randomColor;
});
