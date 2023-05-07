// Verifica se há conteúdo na div de resultado e altera a exibição da area de resultados se necessário.
function checkResultContent() {
  const isEmpty = mainTextArea.value === "";
  mainTextArea.style.overflowY = isEmpty ? "hidden" : "auto";
  copyButton.style.display = isEmpty ? "none" : "block";
  resultCrypto.style.display = isEmpty ? "none" : "flex";
  resultData.style.display = isEmpty ? "flex" : "none";
}

// Atualiza o tamanho da text area de acordo com o tamanho da tela.
function updateAreaSize() {  
  if (window.innerWidth < 1366) {
    mainTextArea.style.height = "9em";
    updateResultContent();
  } else {
    mainTextArea.style.height = "15m";
    updateResultContent();
  }
  window.scrollTo(0, 0);
}

//Limpa o conteúdo da text area ao clicar no botão de limpar e atualiza a div de resultado e o tamanho da text area.
clearButton.addEventListener("click", () => {
  mainTextArea.value = "";
  updateAreaSize()
  updateResultContent();
  window.scrollTo(0, 0);
});

// Atualiza o conteúdo da div de resultado com o valor da text area.
function updateResultContent() {
  resultCrypto.textContent = mainTextArea.value;
  checkResultContent();
}