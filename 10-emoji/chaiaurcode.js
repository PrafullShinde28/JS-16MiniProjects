const emojiBox = document.querySelector('#emoji');
const emojis = [
  '😆', '😅', '🤣', '😂', '😀', '🤑', '🤨', '🙂', '😊',
  '😗', '😛', '😏', '🤥', '😴', '🥺', '😧', '😇', '😳',
  '🙃', '🥴', '🧐', '🤨', '😒', '🤔', '🤭', '🥰', '🤐',
  '👀', '🤔', '🤪', '🥲', '😃', '😁', '😬'
];

// When mouse enters the emoji, pick a random emoji
emojiBox.addEventListener('mouseenter', () => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  emojiBox.textContent = randomEmoji;
});
