const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');

const uppercaseBtn = document.querySelector('.uppercase');
const lowercaseBtn = document.querySelector('.lowercase');
const capitalizeBtn = document.querySelector('.capitalize');
const boldBtn = document.querySelector('.bold');
const italicBtn = document.querySelector('.italic');
const underlineBtn = document.querySelector('.underline');

// Update output text whenever input changes
inputField.addEventListener('input', () => {
  outputField.textContent = inputField.value;
  resetStyles(); // reset text-transform/font-style/etc. when typing new text
});

// Reset all styles
function resetStyles() {
  outputField.style.textTransform = 'none';
  outputField.style.fontWeight = 'normal';
  outputField.style.fontStyle = 'normal';
  outputField.style.textDecoration = 'none';
}

// Transform text
uppercaseBtn.addEventListener('click', () => {
  outputField.style.textTransform = 'uppercase';
});

lowercaseBtn.addEventListener('click', () => {
  outputField.style.textTransform = 'lowercase';
});

capitalizeBtn.addEventListener('click', () => {
  outputField.style.textTransform = 'capitalize';
});

// Style toggles
boldBtn.addEventListener('click', () => {
  outputField.style.fontWeight =
    outputField.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

italicBtn.addEventListener('click', () => {
  outputField.style.fontStyle =
    outputField.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

underlineBtn.addEventListener('click', () => {
  outputField.style.textDecoration =
    outputField.style.textDecoration === 'underline' ? 'none' : 'underline';
});
