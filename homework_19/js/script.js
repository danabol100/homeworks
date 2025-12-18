"use strict";

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".icon-menu")) {
    document.documentElement.toggleAttribute("data-menu-open");
  }
}
// Отримуємо елемент шапки
const header = document.querySelector(".header");

// Слухаємо подію scroll
window.addEventListener("scroll", () => {
  // якщо проскролено більше 0 пікселів додається клас модифікатор header--scroll-state
  if (window.scrollY > 0) {
    header.classList.add("header--scroll-state");
  } else {
    header.classList.remove("header--scroll-state");
  }
});
