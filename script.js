console.log("test");
const rating = document.querySelector(".rating-number");
const ratingIndex = document.querySelectorAll(".rating-index");
const submitButton = document.querySelector(".btn");
const startState = document.querySelector(".rating-start-state");
const thanksState = document.querySelector(".thank-you-state");
const ratingGiven = document.querySelector(".rating-given");
let rate;

rating.addEventListener("click", function (e) {
  ratingIndex.forEach((rI) => rI.classList.remove("rating-active"));
  if (e.target.classList.contains("rating-index")) {
    rate = e.target.dataset.value;
    e.target.classList.add("rating-active");
  }
});

submitButton.addEventListener("click", function () {
  startState.classList.toggle("inactive");
  const htmlText = `<p class="rating-given--text">You selected out ${rate} of 5</p>`;
  thanksState.classList.toggle("inactive");

  document
    .querySelector(".rating-given")
    .insertAdjacentHTML("beforeend", htmlText);
});
