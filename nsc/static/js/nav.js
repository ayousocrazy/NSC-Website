const burgerBtn = document.querySelector(".header_burger-button");
const burgerMenu = document.querySelector(".header_burger");
const burgerOverlay = document.querySelector(".header_burger-overlay");

burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
    burgerOverlay.classList.toggle("active");
});