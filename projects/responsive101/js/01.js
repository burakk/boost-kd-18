const hamburgerNavEl = document.querySelector(".hamburger-nav");
const hamburgerToggleBtnEl = document.querySelector(
  ".btn-toggle-hamburger-nav"
);

hamburgerNavEl.addEventListener("click", (e) => {
  hamburgerNavEl.classList.toggle("expanded");
  hamburgerToggleBtnEl.classList.toggle("off");
});
