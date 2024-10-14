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

function closeMenu(nav, menu, accordion) {
  nav.classList.add("nav--closed");
  // menu.forEach((menuItem) => {
  //   menuItem.classList.add("visually-hidden");
  // });
  // accordion.forEach((accordionItem) => {
  //   accordionItem.classList.remove("nav__link--active");
  // });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    closeMenu(nav, subMenus, navAccordions);
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.className.includes("nav")) {
    closeMenu(nav, subMenus, navAccordions);
  }
});

// navAccordions.forEach((navAccordion) => {
//   navAccordion.addEventListener("click", () => {
//     let item = navAccordion.parentElement;
//     let next = item.nextElementSibling;
//     if (next.classList.contains("nav__submenu")) {
//       navAccordion.classList.toggle("nav__link--active");
//       let submenu = next;
//       submenu.classList.toggle("visually-hidden");
//     }
//   });
// });
