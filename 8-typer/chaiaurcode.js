const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];
const typingDelay = 150;
const erasingDelay = 100;
const newWordDelay = 1000; // Delay between words

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, typingDelay + 100);
  }
}

// Start the typing effect on DOM load
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, 1000);
});
