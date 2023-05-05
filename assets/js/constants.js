//Buttons
const buttons = document.querySelectorAll(".button");
const decryptButton = document.querySelector(".decrypt");
const encryptButton = document.querySelector(".encrypt");
const copyButton = document.querySelector(".copy");
const cleanButton = document.querySelector(".clean");
const customizeBtn = document.querySelector(".customize-btn");
//Main Areas
const resultArea = document.getElementById("result-area");

const resultData = document.querySelector(".results-data");
const resultCrypto = document.querySelector("#result-crypto");
//Menu
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const inputsOverlayDesktop = document.querySelectorAll(".editor-container");
const inputsOverlay = document.querySelectorAll(
  ".key-input input,.custom-itens input, .button, .label-color-input"
);
//inputs
const mainTextArea = document.querySelector(".main_text");
const keyInputs = document.querySelectorAll(".input-key");
