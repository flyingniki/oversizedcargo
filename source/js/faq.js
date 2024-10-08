const buttons = document.querySelectorAll(".faq__button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let content = button.nextElementSibling;
    button.classList.toggle("faq__button--active");
    content.classList.toggle("visually-hidden");
  });
});
