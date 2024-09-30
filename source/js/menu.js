const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const links = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--closed");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    let submenu = link.nextElementSibling;
    submenu.classList.toggle("visually-hidden");
  });
});
