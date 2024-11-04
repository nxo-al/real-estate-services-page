let currentSlide = 0;
const slides = document.querySelectorAll(".slide-content");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

function showSlide(index) {
	slides[currentSlide].classList.remove("active");
	dots[currentSlide].classList.remove("active");

	currentSlide = (index + totalSlides) % totalSlides;

	slides[currentSlide].classList.add("active");
	dots[currentSlide].classList.add("active");
}

function nextSlide() {
	showSlide(currentSlide + 1);
}

// Automatic slide advance every 5 seconds
setInterval(nextSlide, 5000);
