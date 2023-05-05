// Esta função verifica a largura da janela e adiciona um ouvinte de evento apropriado para os elementos de entrada no menu overlay.
function overlayMenuToggleCheck() {
  if (window.innerWidth > 1240) {
  // Adiciona o ouvinte de eventos aos elementos de entrada no menu overlay para dispositivos desktop
  inputsOverlayDesktop.forEach((input) => {
  input.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede que o evento seja propagado para os elementos pai
  });
  });
  } else {
  // Adiciona o ouvinte de eventos aos elementos de entrada no menu overlay para dispositivos móveis
  inputsOverlay.forEach((input) => {
  input.addEventListener("click", (event) => {
  event.stopPropagation();
  });
  });
  }
  }
  
  // Esta função alterna a classe "active" no elemento overlay.
  function toggleMenu() {
  overlay.classList.toggle("active");
  }
  
  // Adiciona um ouvinte de evento para o botão "Personalizar" que chama a função toggleMenu().
  customizeBtn.addEventListener("click", toggleMenu);
  
  // Adiciona um ouvinte de evento para o ícone de menu que chama a função toggleMenu().
  menuIcon.addEventListener("click", toggleMenu);
  
  // Esta função verifica a largura da janela e ajusta as classes dos elementos conforme necessário.
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
  
  // Verifica a largura da janela e ajusta as classes dos elementos conforme necessário ao carregar a página.
  checkScreenWidth();
  
  // Verifica a largura da janela e adiciona um ouvinte de evento para os elementos de entrada no menu overlay ao carregar a página.
  overlayMenuToggleCheck();
  
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