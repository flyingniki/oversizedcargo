const mainNav = document.querySelector(".main-nav");
const mainNavToggle = document.querySelector(".main-nav__toggle");

document.addEventListener("DOMContentLoaded", () => {
  mainNavToggle.addEventListener("click", () => {
    if (mainNav.classList.contains("main-nav--closed")) {
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");
    } else {
      mainNav.classList.remove("main-nav--opened");
      mainNav.classList.add("main-nav--closed");
    }
  });
});
