const mediaQuery = window.matchMedia("(max-width: 900px)");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const dropdownFeatures = document.querySelector(".dropdown-features");
const dropdownCompany = document.querySelector(".dropdown-company");

hamburgerIcon.addEventListener("click", () => {
    document.querySelector(".nav-section").style.display = "flex";
});

closeIcon.addEventListener("click", () => {
    document.querySelector(".nav-section").style.display = "none";
});

dropdownFeatures.addEventListener("click", () => {
    dropdownFeatures.classList.toggle("dropdown-active");
});

dropdownCompany.addEventListener("click", () => {
    dropdownCompany.classList.toggle("dropdown-active");
});