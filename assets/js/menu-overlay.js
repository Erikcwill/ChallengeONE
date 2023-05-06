//Adiciona um recurso de não fechar a overlay ao clicar nos inputs selecionados.
inputsOverlay.forEach((input) => {
  input.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

// Esta função alterna a classe "active" no elemento overlay.
function toggleMenu() {
  overlay.classList.toggle("active");
}

// Adiciona um ouvinte de evento para o botão "Personalizar" que chama a função toggleMenu().
customizeBtn.addEventListener("click", toggleMenu);

// Esta função verifica a largura da janela e ajusta as classes dos elementos conforme necessário.
function checkScreenWidth() {
  if (window.innerWidth >= 768) {
    customizeBtn.classList.remove("customize-btn-active");
    overlay.classList.remove("active");
  } else {
    customizeBtn.classList.add("customize-btn-active");
  }
}

// Verifica a largura da janela e ajusta as classes dos elementos conforme necessário ao carregar a página.
checkScreenWidth();

// Verifica a largura da janela e adiciona um ouvinte de evento para os elementos de entrada no menu overlay ao carregar a página.

// Adiciona um ouvinte de evento para quando a janela é redimensionada.
window.addEventListener("resize", checkScreenWidth);

// Adiciona um ouvinte de evento para o elemento overlay que chama a função toggleMenu().
overlay.addEventListener("click", toggleMenu);

// Adiciona um ouvinte de evento para a tecla "Escape" que chama a função toggleMenu().
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleMenu();
  }
});
