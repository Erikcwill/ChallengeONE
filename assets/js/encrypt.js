function encrypt() {
  encryptButton.disabled = true;
  mainTextArea.disabled = true;
  if (processText("criptografar")) {
    let inputText = document
      .getElementById("main_textarea")
      .value.toLowerCase();
    let encryptedText = "";
    for (let i = 0; i < inputText.length; i++) {
      let char = inputText.charAt(i);
      if (key[char]) {
        encryptedText += key[char];
      } else {
        encryptedText += char;
      }
    }
    resultCrypto.textContent = encryptedText;
  }

  resultArea.scrollIntoView();

  setTimeout(function () {
    mainTextArea.disabled = false;
    encryptButton.disabled = false;
  }, 1000);
}

encryptButton.addEventListener("click", encrypt);
