function validarInput(input) {
  const regex = /^[a-z\s]*$/;
  if (!regex.test(input.value)) {
    resultArea.scrollIntoView();
    input.classList.add("invalid");
    mainTextArea.disabled = true;
    showError("Caracter inválido!");
    setTimeout(function () {
      mainTextArea.classList.remove("invalid");
      mainTextArea.disabled = false;
      mainTextArea.value = "";
      checkResultContent();
      window.scrollTo(0, 0);
    }, 1000);
  } else {
    input.classList.remove("invalid");
  }
}
mainTextArea.addEventListener("input", () => {
  validarInput(mainTextArea);
});
