// Função para criptografar o texto da área de entrada
function encrypt() {
  encryptButton.disabled = true; // Desativa o botão de criptografar
  mainTextArea.disabled = true; // Desativa a área de entrada
  if (processText("criptografar")) { // Verifica se o texto já foi criptografado
    let inputText = mainTextArea.value.toLowerCase(); // Obtém o texto da área de entrada e converte para minúsculo
    let encryptedText = ""; // Inicializa o texto criptografado
    for (let i = 0; i < inputText.length; i++) { // Loop que percorre cada caractere do texto de entrada
      let char = inputText.charAt(i); // Obtém o caractere atual
      if (key[char]) { // Verifica se o caractere está na chave de criptografia
        encryptedText += key[char]; // Se sim, adiciona o caractere criptografado ao texto criptografado
      } else {
        encryptedText += char; // Se não, adiciona o caractere original ao texto criptografado
      }
    }
    resultCrypto.textContent = encryptedText; // Exibe o texto criptografado na área de resultado
  }

  resultArea.scrollIntoView(); // Rola a página para a área de resultado

  setTimeout(function () {
    mainTextArea.disabled = false; // Reativa a área de entrada após 1 segundo
    encryptButton.disabled = false; // Reativa o botão de criptografar após 1 segundo
  }, 1000);
}

encryptButton.addEventListener("click", encrypt); // Adiciona um ouvinte de eventos ao botão de criptografar
