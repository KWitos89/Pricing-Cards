//  elements for hamburger menu //

const hamburgerBtn = document.querySelector(".btn__burger");
const menuMobile = document.querySelector(".menu__mobile");

hamburgerBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

// elements for change price //

const btnMonthly = document.querySelector("#monthly");
const btnYearly = document.querySelector("#yearly");
const cycles = document.querySelectorAll(".cycle");
const prices = document.querySelectorAll(".price");
const toggleWrapper = document.querySelector(".toggle__wrapper");

toggleWrapper.addEventListener("change", () => {
  prices.forEach((price) => {
    if (btnYearly.checked) {
      price.textContent = price.dataset.yearly;
    } else {
      price.textContent = price.dataset.monthly;
    }
  });

  cycles.forEach((cycle) => {
    if (btnYearly.checked) {
      cycle.textContent = cycle.dataset.yearly;
    } else {
      cycle.textContent = cycle.dataset.monthly;
    }
  });
});
