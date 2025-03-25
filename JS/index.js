const searchInput = document.getElementById("search-products");
const products = document.querySelectorAll("#product-list .image-contain");
const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.carousel-images .slide');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');

let currentIndex = 0;

function showDropdown() {
    document.getElementById("dropdown").style.display = "block";
}

function hideDropdown() {
    document.getElementById("dropdown").style.display = "none";
}

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

searchInput.addEventListener("input", function () {
    const filterText = this.value.toLowerCase();
    if (filterText.trim() === "") {
        carousel.style.display = "";
    } else {
        carousel.style.display = "none"; 
    }

    products.forEach(product => {
        const productName = product.querySelector("p").textContent.toLowerCase();
        if (productName.includes(filterText)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}); 

function signUp() {
    location.href = "./HTML/signup.html"
}

function signIn() {
    location.href = "./HTML/login.html"
}