

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // amount scrolled from the top
  const docHeight = document.documentElement.scrollHeight - window.innerHeight; // total scrollable height
  const scrollPercent = (scrollTop / docHeight) * 100; // calculate percentage
  const progressBar = document.querySelector(".progress");
  progressBar.style.width = scrollPercent + "%";
});
