// Adiciona um ouvinte de evento para a text area
mainTextArea.addEventListener("input", updateResultContent);

// Adiciona um ouvinte de evento para o botão de cópia
copyButton.addEventListener("click", () => {
  // Copia o texto da div de resultado para a área de transferência
  navigator.clipboard.writeText(resultCrypto.textContent);
});
// Executa a verificação da tela ao iniciar o script
checkResultContent();
