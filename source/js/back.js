const btnBack = document.querySelector(".footer__back-btn");

window.onscroll = function () {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 550) {
    btnBack.style.display = "block";
  } else {
    btnBack.style.display = "none";
  }
};

btnBack.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
