const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelectorAll(".nav__link--accordion");

let lastItem = navList.lastElementChild;
lastItem.style.border = "none";

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--closed");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    showMenu(navLink);
  });
});

function showMenu(link) {
  let item = link.parentElement;
  let next = item.nextElementSibling;
  if (next.classList.contains("nav__submenu")) {
    link.classList.toggle("nav__link--active");
    let submenu = next;
    submenu.classList.toggle("visually-hidden");
  }
}
