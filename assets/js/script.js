const copyButton = document.querySelector(".copy");
const mainTextArea = document.querySelector(".main_text");
const resultData = document.querySelector(".results_data");
const resultCrypto = document.querySelector("#result-crypto");
const cleanButton = document.querySelector(".clean");

// Verifica se há conteúdo na div de resultado e exibe o botão de cópia se necessário
function checkResultContent() {
  const isEmpty = mainTextArea.value === "";  

  mainTextArea.style.overflowY = isEmpty ? "hidden" : "auto";
  copyButton.style.display = isEmpty ? "none" : "block";
  resultCrypto.style.display = isEmpty ? "none" : "flex";
  resultData.style.display = isEmpty ? "flex" : "none";
  cleanButton.classList.toggle("clean-visible", !isEmpty);

  if (mainTextArea.value.includes(" ")) {
    cleanButton.classList.remove("clean-visible");
  }
}

// Atualiza o conteúdo da div de resultado com o valor da text area
function updateResultContent() {
  resultCrypto.textContent = mainTextArea.value;
  checkResultContent();
}

// Adiciona um ouvinte de evento para a text area
mainTextArea.addEventListener("input", updateResultContent);

// Adiciona um ouvinte de evento para o botão de cópia
copyButton.addEventListener("click", () => {
  // Copia o texto da div de resultado para a área de transferência
  navigator.clipboard.writeText(resultCrypto.textContent);
});

cleanButton.addEventListener("click", () => {
  if (window.innerWidth < 1366) {
    mainTextArea.style.height = "9em";
    mainTextArea.value = "";
    updateResultContent();
  } else {
    mainTextArea.style.height = "15m";
    mainTextArea.value = "";
    updateResultContent();
  }
});

// Executa a verificação inicialmente
checkResultContent();
