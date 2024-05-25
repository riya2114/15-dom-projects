const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentSlide = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function updateButtons() {
  prevButton.style.display = currentSlide === 0 ? "none" : "block";
  nextButton.style.display =
    currentSlide === slides.length - 1 ? "none" : "block";
}

function slideImage() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

nextButton.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    slideImage();
    updateButtons();
  }
});

prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    slideImage();
    updateButtons();
  }
});
