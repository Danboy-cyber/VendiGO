function showDropdown() {
    document.getElementById("dropdown").style.display = "block";
}

function hideDropdown() {
    document.getElementById("dropdown").style.display = "none";
}

const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.carousel-images .slide');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});
