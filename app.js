"use strict";

const usersRatingArray = Array.from(
  document.querySelectorAll(".rating-number")
);
const userRatingDiv = Array.from(document.querySelectorAll(".rating"));
const submitButton = document.querySelector(".btn");
const userRatingInput = document.querySelector(".rating-input");


// Remove Active state from all elements
function removeActiveClass() {
  userRatingDiv.forEach(function (element) {
    element.classList.remove("active");
  });
}

// clear the rate selection when pressing ESC key
document.addEventListener("keydown", (event) => {
  if (event.key === 27) {
    return;
  }
  removeActiveClass();
  userRatingInput.value = null;
  submitButton.setAttribute("disabled", "disabled");
});


// set active class on selected rate element in DOM
for (let i = 0; i < userRatingDiv.length; i++) {
  userRatingDiv[i].onclick = function () {
    removeActiveClass();
    this.classList.add("active");
    userRatingInput.value = this.textContent;
    submitButton.removeAttribute("disabled");
  };
}
