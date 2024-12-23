// Auto-slide logic for the image slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');

const slideInterval = 5000;

setInterval(() => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  currentIndex = (currentIndex + 1) % slides.length;
}, slideInterval);
