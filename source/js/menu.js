const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const links = document.querySelectorAll(".nav__link--accordion");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--closed");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    let navItem = link.parentElement;
    let submenu = navItem.nextElementSibling;
    link.classList.toggle("nav__link--active");
    if (submenu.classList.contains("nav__submenu")) {
      submenu.classList.toggle("visually-hidden");
      childNavItems = Array.from(submenu.children);
      console.log(childNavItems);
      childNavItems.forEach((childNavItem) => {
        childNavItem.classList.add("nav__item--subitem");
        childNavItem.style.paddingLeft = "16px";
      });
    }
  });
});
