inputsOverlay.forEach((input) => {
  input.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

function toggleMenu() {
  overlay.classList.toggle("active");
}

customizeBtn.addEventListener("click", toggleMenu);

menuIcon.addEventListener("click", toggleMenu);

function checkScreenWidth() {
  if (window.innerWidth >= 768) {
    customizeBtn.classList.remove("customize-btn-active");
    menuIcon.classList.add("menu-icon-active");
    overlay.classList.remove("active");
  } else {
    customizeBtn.classList.add("customize-btn-active");
    menuIcon.classList.remove("menu-icon-active");
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
overlay.addEventListener("click", toggleMenu);
