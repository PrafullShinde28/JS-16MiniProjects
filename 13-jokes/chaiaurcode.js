const url = 'https://api.chucknorris.io/jokes/random';
const display = document.getElementById('display-joke');
const btn = document.getElementById('getJoke');


let requestCount = 0;


function getJokeWithXHR() {
  const xhr = new XMLHttpRequest();
  const currentReq = ++requestCount; 
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.status === 200 && currentReq === requestCount) {
      const data = JSON.parse(xhr.responseText);
      display.textContent = data.value;
    }
  };
  xhr.send();
}

function getJokeWithPromise() {
  const currentReq = ++requestCount;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (currentReq === requestCount) {
        display.textContent = data.value;
      }
    })
    .catch(err => {
      if (currentReq === requestCount) {
        display.textContent = 'Something went wrong...';
        console.error(err);
      }
    });
}


btn.addEventListener('click', getJokeWithPromise);
// btn.addEventListener('click', getJokeWithXHR);
