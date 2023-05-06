function decrypt() {
  decryptButton.disable = true; // Desabilita o botão de decifrar
  mainTextArea.disabled = true; // Desabilita a área de texto principal
  if (processText("descriptografar")) {
    // Verifica se o texto foi criptografado
    const inputText = document
      .getElementById("main_textarea")
      .value.toLowerCase(); // Obtém o texto da área de texto principal e converte para minúsculo
    let decryptedText = ""; // Inicializa o texto decifrado
    let i = 0; // Inicializa o contador
    let encontrado = false; // Inicializa uma variável para verificar se alguma palavra da chave foi encontrada
    while (i < inputText.length) {
      // Enquanto houver caracteres no texto
      let found = false; // Inicializa uma variável para verificar se uma palavra da chave foi encontrada
      for (let j = 5; j >= 1; j--) {
        // Loop que verifica as palavras da chave de maior para menor tamanho
        let char = inputText.substr(i, j); // Obtém um caractere da string de entrada
        if (reverseKey[char]) {
          // Verifica se o caractere está na chave de criptografia
          decryptedText += reverseKey[char]; // Adiciona o caractere decifrado ao texto decifrado
          i += j; // Pula para o próximo caractere
          found = true; // Define a variável de controle como verdadeira
          encontrado = true; // Define a variável de controle de palavra encontrada como verdadeira
          break; // Sai do loop for interno
        }
      }
      if (!found) {
        // Se nenhuma palavra da chave foi encontrada
        decryptedText += inputText.charAt(i); // Adiciona o caractere sem decifrar ao texto decifrado
        i++; // Passa para o próximo caractere
      }
    }

    if (!encontrado) {
      // Se nenhuma palavra da chave foi encontrada
      showError("Esse texto não está criptografado.", resultArea, mainTextArea); // Exibe uma mensagem de erro
    } else {
      // Caso contrário
      resultCrypto.textContent = decryptedText; // Exibe o texto decifrado
    }
  }

  resultArea.scrollIntoView(); // Rola a página para a área de resultado

  setTimeout(function () {
    decryptButton.disable = false; // Habilita o botão de decifrar após 1 segundo
    mainTextArea.disabled = false; // Habilita a área de texto principal após 1 segundo
  }, 1000);
}

decryptButton.addEventListener("click", decrypt); // Adiciona um ouvinte de eventos ao botão de decifrar
