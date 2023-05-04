function decrypt() {
  document.getElementById("main_textarea").disabled = true;
  if (processText("descriptografar")) {
    const inputText = document
      .getElementById("main_textarea")
      .value.toLowerCase();
    let decryptedText = "";
    let i = 0;
    let encontrado = false;

    while (i < inputText.length) {
      let found = false;
      for (let j = 5; j >= 1; j--) {
        // Verifica as palavras da chave de maior para menor tamanho
        let char = inputText.substr(i, j);
        if (reverseKey[char]) {
          decryptedText += reverseKey[char];
          i += j; // pula para o próximo caractere
          found = true;
          encontrado = true;
          break; // sai do loop for interno
        }
      }
      if (!found) {
        decryptedText += inputText.charAt(i);
        i++; // passa para o próximo caractere
      }
    }

    if (!encontrado) {
      showError("Esse texto não está criptografado.");
    } else {
      document.getElementById("result-crypto").textContent = decryptedText;
    }
  }

  resultArea.scrollIntoView();

  setTimeout(function () {
    document.getElementById("main_textarea").disabled = false;
  }, 1000);
}

decryptButton.addEventListener("click", decrypt);
