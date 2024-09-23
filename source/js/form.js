const modal = document.querySelector(".modal");
const modalSuccess = document.querySelector(".modal--success");
const modalFailure = document.querySelector(".modal--failure");
const form = document.querySelector(".form-review");
const submit = document.querySelector(".form-review__button");
const modalButton = document.querySelector(".modal__button");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.open("GET", form.action);
    request.onreadystatechange = () => {
      if (request.status == 200) {
        modalSuccess.classList.remove("visually-hidden");
      } else {
        modalFailure.classList.remove("visually-hidden");
      }
    };
    request.send(formData);
  });

  modalButton.addEventListener("click", () => {
    modal.classList.add("visually-hidden");
  });
});
