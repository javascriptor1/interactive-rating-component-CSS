"use strict";

const usersRatingArray = document.querySelectorAll(".rating-number");
const userRatingDiv = document.querySelectorAll(".rating");
const submitButton = document.querySelector(".btn");
const userRatingInput = document.querySelector(".rating-input");

function submitRating() {
  console.log("hello world");
}

submitButton.addEventListener("click", submitRating);
