const clock = document.getElementById('clock');

setInterval(() => {
  const date = new Date();

  
  const time = date.toLocaleTimeString(); 
  
  // const fullDateTime = `${date.toLocaleDateString()} - ${time}`;
  
  
  clock.innerHTML = time;
}, 1000);
