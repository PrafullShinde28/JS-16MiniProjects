const emojiBox = document.querySelector('#emoji');
const emojis = [
  '😆', '😅', '🤣', '😂', '😀', '🤑', '🤨', '🙂', '😊',
  '😗', '😛', '😏', '🤥', '😴', '🥺', '😧', '😇', '😳',
  '🙃', '🥴', '🧐', '🤨', '😒', '🤔', '🤭', '🥰', '🤐',
  '👀', '🤔', '🤪', '🥲', '😃', '😁', '😬'
];


emojiBox.addEventListener('mouseenter', () => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  emojiBox.textContent = randomEmoji;
});
