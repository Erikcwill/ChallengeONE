mainTextArea.addEventListener("input", function () {
  if (window.innerWidth < 1366) {
    this.style.height = "9em";
    this.style.height = this.scrollHeight + "px";
  } else {
    var maxHeight = "18em"; // altura máxima desejada para a textarea em pixels
  }
});


