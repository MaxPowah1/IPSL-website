const aboutBtn = document.getElementById("aboutBtn");
const slider = document.getElementById("slider");
const overlay = document.getElementById("overlay");
const closeSlider = document.getElementById("closeSlider");

aboutBtn.addEventListener("click", () => {
  slider.classList.add("active");
  overlay.classList.add("active");
});

closeSlider.addEventListener("click", () => {
  slider.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  slider.classList.remove("active");
  overlay.classList.remove("active");
});
