// Verifica se há conteúdo na div de resultado e altera a exibição da area de resultados se necessário.
function checkResultContent() {
  const isEmpty = mainTextArea.value === "";
  mainTextArea.style.overflowY = isEmpty ? "hidden" : "auto";
  copyButton.style.display = isEmpty ? "none" : "block";
  resultCrypto.style.display = isEmpty ? "none" : "flex";
  resultData.style.display = isEmpty ? "flex" : "none";
}

//Função que atualiza o tamanho da text area de acordo com o tamanho da tela ao clicar no elemento passado como parâmetro.
function updateAreaSize(element) {
  element.addEventListener("click", () => {
    if (window.innerWidth < 1366) {
      mainTextArea.style.height = "9em";
      mainTextArea.value = "";
      updateResultContent();
    } else {
      mainTextArea.style.height = "15m";
      mainTextArea.value = "";
      updateResultContent();
    }
    window.scrollTo(0, 0);
  });
}

// Atualiza o conteúdo da div de resultado com o valor da text area.
function updateResultContent() {
  resultCrypto.textContent = mainTextArea.value;
  checkResultContent();
}

//Adiciona um ouvinte de evento para o botão de limpar, verificando o tamanho da tela para reposicionar a text area.
updateAreaSize(clearButton);
updateAreaSize(encryptButton);
updateAreaSize(decryptButton);
