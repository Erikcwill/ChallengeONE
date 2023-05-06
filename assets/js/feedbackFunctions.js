// Define uma função que mostra uma mensagem em um elemento de texto
function showMessage(message) {
  resultCrypto.textContent = message;
}

// Define uma função que exibe uma mensagem de erro, adiciona uma classe de animação de shake a um elemento específico, 
// limpa o valor de um elemento de entrada e chama a função showMessage para exibir a mensagem de erro.
// Finalmente, esconde um botão de cópia e remove a classe shake após um atraso de 1 segundo.
function showError(message, shakedElement, inputElement) {
  shakedElement.classList.add("shake"); // adiciona a classe shake ao elemento especificado
  inputElement.value = " "; // define o valor do elemento de entrada especificado como vazio
  showMessage(message); // chama a função showMessage para exibir a mensagem de erro
  
  checkResultContent(); // chama a função checkResultContent
  copyButton.style.display = "none"; // esconde um botão de cópia
  setTimeout(function () {
    shakedElement.classList.remove("shake"); // remove a classe shake após um atraso de 1 segundo
    inputElement.value = ""; // define o valor do elemento de entrada especificado como vazio
    checkResultContent(); // chama a função checkResultContent
    window.scrollTo(0, 0); // move a rolagem da janela para o topo
  }, 1000);
}

// Define uma função que processa o texto inserido em um elemento de entrada com base em uma ação específica
function processText(action) {
  const inputText = document
    .getElementById("main_textarea")
    .value.toLowerCase();

  if (inputText === "") { // verifica se o texto inserido está vazio
    showError(`Não há nada para ${action} aqui.`, resultArea, mainTextArea); // chama a função showError para exibir uma mensagem de erro caso o texto inserido esteja vazio
    return false;
  } else {
    return true; // retorna verdadeiro caso o texto inserido não esteja vazio
  }
}
