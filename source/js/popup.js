document.addEventListener("DOMContentLoaded", () => {
  const requestCall = document.querySelectorAll(".call-back");
  const popup = document.querySelector(".popup");
  const success = document.querySelector(".success");
  const calculatorForm = document.querySelector(".calculator__form");
  const consultationForms = document.querySelectorAll(".callback-form");
  const closePopup = document.querySelector(".popup__toggle");
  const closeSuccess = document.querySelector(".success__toggle");
  const okSuccess = document.querySelector(".success__close");

  requestCall.forEach((item) => {
    if (item) {
      item.addEventListener("click", () => {
        popup.classList.remove("visually-hidden");
      });
    }
  });

  function sendForm(form, success, popup) {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open("POST", form.action);
    xhr.onreadystatechange = () => {
      if (xhr.status == 200 && xhr.readyState == 4) {
        success.classList.remove("visually-hidden");
        popup.classList.add("visually-hidden");
      }
    };
    xhr.send(formData);
  }

  function checkBox(form) {
    let checkBox = form.querySelector(".policy__input");
    let submit = form.querySelector('button[type="submit"]');
    checkBox.addEventListener("input", () => {
      if (!checkBox.checked) {
        submit.disabled = true;
      } else {
        submit.disabled = false;
      }
    });
  }

  if (calculatorForm) {
    checkBox(calculatorForm);
    calculatorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      sendForm(calculatorForm, success, popup);
    });
  }

  if (consultationForms) {
    consultationForms.forEach((form) => {
      checkBox(form);
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();
        sendForm(form, success, popup);
      });
    });
  }

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
