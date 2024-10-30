const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".nav__toggle");
const navAccordions = document.querySelectorAll(".nav__link--accordion");
const subMenus = document.querySelectorAll(".nav__submenu");

let lastItem = navList.lastElementChild;
lastItem.style.border = "none";

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--closed");
});

function closeMenu(nav) {
  nav.classList.add("nav--closed");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    closeMenu(nav);
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.className.includes("nav")) {
    closeMenu(nav);
  }
});
