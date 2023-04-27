const copyButton = document.querySelector(".copy");
const mainTextArea = document.querySelector(".main_text");
const resultTitle = document.querySelector("#result-title");
const resultText = document.querySelector("#result-text");
const resultCrypto = document.querySelector("#result-crypto");
const cleanButton = document.querySelector(".clean");

// Verifica se há conteúdo na div de resultado e exibe o botão de cópia se necessário
function checkResultContent() {
  if (mainTextArea.value === "") {
    mainTextArea.style.overflowY = "hidden";
    copyButton.style.display = "none";
    resultCrypto.style.display = "none";
    resultTitle.style.display = "block";
    resultText.style.display = "block";
    cleanButton.classList.remove("clean-visible"); // Remover classe para esconder o botão
  } else {
    mainTextArea.style.overflowY = "auto";
    copyButton.style.display = "block";
    resultCrypto.style.display = "block";
    resultTitle.style.display = "none";
    resultText.style.display = "none";
    cleanButton.classList.add("clean-visible"); // Adicionar classe para mostrar o botão
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
  if (window.innerWidth < 768) {
    mainTextArea.style.height = "auto";
    mainTextArea.value = "";
    updateResultContent();
  } else {
    mainTextArea.style.height = "364";
    mainTextArea.value = "";
    updateResultContent();
  }
});

// Executa a verificação inicialmente
checkResultContent();
