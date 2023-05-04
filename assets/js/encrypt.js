function encrypt() {
  document.getElementById("main_textarea").disabled = true;
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
    document.getElementById("result-crypto").textContent = encryptedText;
  }

  document.getElementById("result-area").scrollIntoView();

  setTimeout(function () {
    document.getElementById("main_textarea").disabled = false;
  }, 1000);
}

encryptButton.addEventListener("click", encrypt);
