const decryptButton = document.querySelector(".decrypt");
const encryptButton = document.querySelector(".encrypt");

let key = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

let reverseKey = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

function setKey() {
  const defaultKey = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  key.a = document.getElementById("a").value.toLowerCase() || defaultKey.a;
  key.e = document.getElementById("e").value.toLowerCase() || defaultKey.e;
  key.i = document.getElementById("i").value.toLowerCase() || defaultKey.i;
  key.o = document.getElementById("o").value.toLowerCase() || defaultKey.o;
  key.u = document.getElementById("u").value.toLowerCase() || defaultKey.u;

  // atualiza o objeto reverseKey com as novas chaves definidas pelo usuário
  reverseKey = {};
  for (let prop in key) {
    reverseKey[key[prop]] = prop;
  }

  alert("Chave de criptografia definida com sucesso!");
}

function encrypt() {
  let inputText = document.getElementById("main_textarea").value.toLowerCase();
  let encryptedText = "";
  for (let i = 0; i < inputText.length; i++) {
    let char = inputText.charAt(i);
    if (key[char]) {
      encryptedText += key[char];
    } else {
      encryptedText += char;
    }
  }
  inputText = "";
  document.getElementById("result-crypto").textContent = encryptedText;
}

function decrypt() {
  let inputText = document.getElementById("main_textarea").value.toLowerCase();

  if (inputText === "") {
    let resultArea = document.getElementById("result-area");
    let resultCrypto = document.getElementById("result-crypto");
    resultArea.classList.add("shake");
    resultArea.style.borderColor = "red";
    document.getElementById("main_textarea").value = " ";
    resultCrypto.textContent = "Não há nada para descriptografar aqui.";
    checkResultContent();
    setTimeout(function () {
      resultArea.classList.remove("shake");
      resultArea.style.borderColor = "";
      resultCrypto.textContent = "";
      document.getElementById("main_textarea").value = "";
      checkResultContent();
    }, 1000);
    return;
  }

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
    let resultArea = document.getElementById("result-area");
    let resultCrypto = document.getElementById("result-crypto");
    resultArea.classList.add("shake");
    resultArea.style.borderColor = "red";
    resultCrypto.textContent = "Esse texto não está criptografado.";
    setTimeout(function () {
      resultArea.classList.remove("shake");
      resultArea.style.borderColor = "";
      resultCrypto.textContent = "";
      document.getElementById("main_textarea").value = "";
      checkResultContent(); // chama a função de verificação de conteúdo do arquivo script.js
    }, 1000);
    return;
  }

  document.getElementById("result-crypto").textContent = decryptedText;
}

encryptButton.addEventListener("click", encrypt);
decryptButton.addEventListener("click", decrypt);
