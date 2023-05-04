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

function updateKeysText() {
  // atualiza o texto das chaves
  document.getElementById("keyA").textContent = key.a;
  document.getElementById("keyE").textContent = key.e;
  document.getElementById("keyI").textContent = key.i;
  document.getElementById("keyO").textContent = key.o;
  document.getElementById("keyU").textContent = key.u;
}

updateKeysText();

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
    document.getElementById(prop).value = "";
  }

  alert("Chave de criptografia definida com sucesso!");

  updateKeysText();
}

function resetKey() {
  key = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  reverseKey = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  alert("Valores redefinidos com sucesso!");

  updateKeysText();
}
