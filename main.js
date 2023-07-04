"use strict";

const ratingForm = document.querySelector('form[action="thanks.html"]');
console.log(ratingForm);

ratingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let selection = 0;
  const ratings = document.querySelectorAll("input");

  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].checked) {
      selection++;
      break;
    }
  }
  if (selection > 0) {
    ratingForm.submit();
  } else {
    alert("Please select a rating to proceed 🤚🛑");
  }
});
