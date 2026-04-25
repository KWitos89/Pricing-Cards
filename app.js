const hamburgerBtn = document.querySelector(".btn__burger");
const menuMobile = document.querySelector(".menu__mobile");

hamburgerBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});
