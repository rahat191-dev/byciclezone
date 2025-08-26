const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto slide (optional)
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);
