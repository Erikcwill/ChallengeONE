function showMessage(message) {
  resultCrypto.textContent = message;
}

function showError(message) {
  resultArea.classList.add("shake");
  resultArea.style.borderColor = "red";
  document.getElementById("main_textarea").value = " ";
  copyButton.style.display = "none";
  showMessage(message);
  checkResultContent();
  setTimeout(function () {
    resultArea.classList.remove("shake");
    resultArea.style.borderColor = "";
    showMessage("");
    document.getElementById("main_textarea").value = "";
    checkResultContent();
    window.scrollTo(0, 0);
  }, 1000);
}

function processText(action) {
  const inputText = document
    .getElementById("main_textarea")
    .value.toLowerCase();

  if (inputText === "") {
    showError(`Não há nada para ${action} aqui.`);
    return false;
  } else {
    showMessage(`Texto ${action}ado com sucesso!`);
    return true;
  }
}
