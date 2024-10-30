document.addEventListener("DOMContentLoaded", () => {
  const servicesRequest = document.querySelector(".services__btn--request");
  const carRequest = document.querySelector(".car__btn");
  const popup = document.querySelector(".popup");
  const success = document.querySelector(".success");
  const form = document.querySelector(".popup__form");
  const closePopup = document.querySelector(".popup__toggle");
  const closeSuccess = document.querySelector(".success__toggle");
  const okSuccess = document.querySelector(".success__close");

  if (servicesRequest && carRequest) {
    servicesRequest.addEventListener("click", () => {
      popup.classList.remove("visually-hidden");
    });

    carRequest.addEventListener("click", () => {
      popup.classList.remove("visually-hidden");
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.open("POST", form.action);
    request.onreadystatechange = () => {
      if (request.status == 200) {
        success.classList.remove("visually-hidden");
        popup.classList.add("visually-hidden");
      }
    };
    request.send(formData);
  });

  closePopup.addEventListener("click", () => {
    popup.classList.add("visually-hidden");
  });

  closeSuccess.addEventListener("click", () => {
    success.classList.add("visually-hidden");
  });

  okSuccess.addEventListener("click", () => {
    success.classList.add("visually-hidden");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      popup.classList.add("visually-hidden");
      success.classList.add("visually-hidden");
    }
  });

  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      popup.classList.add("visually-hidden");
    }
  });

  success.addEventListener("click", (e) => {
    if (e.target.classList.contains("success")) {
      success.classList.add("visually-hidden");
    }
  });
});
