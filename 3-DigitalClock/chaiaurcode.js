const clock = document.getElementById('clock');

setInterval(() => {
  const date = new Date();

  // You can format the time however you like. Here's a 12-hour format with seconds:
  const time = date.toLocaleTimeString(); // e.g. "11:23:45 PM"

  // If you want to include the date as well:
  // const fullDateTime = `${date.toLocaleDateString()} - ${time}`;
  
  // Update the clock element
  clock.innerHTML = time;
}, 1000);
