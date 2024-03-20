
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");

});
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});
