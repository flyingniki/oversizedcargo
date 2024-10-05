const allWrappers = document.querySelectorAll(".range__wrapper");

allWrappers.forEach((wrapper) => {
  const range = wrapper.querySelector(".range__input");
  const bubble = wrapper.querySelector(".range__bubble");
  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);

  range.addEventListener("input", () => {
    const value = ((range.value - range.min) / (range.max - range.min)) * 100;
    range.style.background =
      "linear-gradient(to right, #F39A17 " +
      value +
      "%, #787878 " +
      value +
      "%)";
  });
});

function setBubble(range, bubble) {
  const value = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newValue = Number(((value - min) * 100) / (max - min));
  bubble.innerHTML = value;
  bubble.style.left = `calc(${newValue}% + (${8 - newValue * 0.15}px))`;
}
// document.addEventListener("DOMContentLoaded", function () {
//   var form = document.getElementById("formslider");
//   form.addEventListener("submit", sendRequest);
//   function sendRequest(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     var formData = new FormData(form);
//     var request = new XMLHttpRequest();
//     request.open("POST", form.action);
//     request.onreadystatechange = function () {
//       if (request.readyState == 4 && request.status == 200)
//         document.getElementById("header1").style.visibility = "hidden";
//       document.getElementById("header2").style.visibility = "hidden";
//       document.getElementById("formslider").style.display = "none";
//       document.getElementById("success").style.display = "block";
//     };
//     request.send(formData);
//   }
// });
