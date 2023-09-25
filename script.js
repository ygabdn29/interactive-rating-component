console.log("test");
const rating = document.querySelector(".rating-number");
const ratingIndex = document.querySelectorAll(".rating-index");
rating.addEventListener("click", function (e) {
  ratingIndex.forEach((rI) => rI.classList.remove("rating-active"));
  if (e.target.classList.contains("rating-index")) {
    const rate = e.target.dataset.value;
    e.target.classList.toggle("rating-active");
  }
});
