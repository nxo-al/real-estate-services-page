// JavaScript to toggle the navigation menu and disable background scrolling
document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.getElementById("hamburger");
	const closeBtn = document.getElementById("close-btn");
	const navList = document.getElementById("nav-list");
	const body = document.body;

	// Open menu
	hamburger.addEventListener("click", function () {
		navList.classList.add("show");
		body.classList.add("no-scroll"); // Disable scrolling
	});

	// Close menu
	closeBtn.addEventListener("click", function () {
		navList.classList.remove("show");
		body.classList.remove("no-scroll"); // Enable scrolling
	});
});
