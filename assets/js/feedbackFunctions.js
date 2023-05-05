function showMessage(message) {
  resultCrypto.textContent = message;
}

function showError(message, shakedElement, inputElement) {
  shakedElement.classList.add("shake");
  inputElement.value = " ";
  showMessage(message);
  checkResultContent();
  setTimeout(function () {
    shakedElement.classList.remove("shake");
    inputElement.value = "";
    checkResultContent();
    window.scrollTo(0, 0);
  }, 1000);
}

function processText(action) {
  const inputText = document
    .getElementById("main_textarea")
    .value.toLowerCase();

  if (inputText === "") {
    showError(`Não há nada para ${action} aqui.`, resultArea, mainTextArea);
    return false;
  } else {
    return true;
  }
}
