console.log("test");
const rating = document.querySelector(".rating-number");

rating.addEventListener("click", function (e) {
  if (e.target.classList.contains("rating-index")) {
    const rate = e.target.dataset.value;
    console.log(rate);
  }
});
