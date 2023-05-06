// Esta função valida o input recebido usando uma expressão regular e exibe uma mensagem de erro caso o input seja inválido.
function validarInput(input , areaError , areaInput) {
  const regex = /^[a-z\s]*$/;
  if (!regex.test(input.value)) {
    resultArea.scrollIntoView(); // Rola a página até a área de resultado
    input.disabled = true; // Desabilita o input que sofre o erro
    showError("Caracter inválido!" , areaError , areaInput ,); // Exibe a mensagem de erro
    setTimeout(function () {
      input.disabled = false; // Habilita o input 
      input.value = ""; // Limpa o conteúdo do input
      checkResultContent(); // Verifica o conteúdo da área de resultado
      window.scrollTo(0, 0); // Rola a página para o topo
    }, 1000);
  } else {
  }
}

// Adiciona um ouvinte de evento para a área de texto principal que chama a função validarInput() sempre que o input é alterado.
mainTextArea.addEventListener("input", () => {
  validarInput(mainTextArea , resultArea , mainTextArea);
});

keyInputs.forEach((keyInputs) => {
addEventListener("input", () => {
  validarInput(keyInputs, keyInputs ,keyInputs );
})
});
