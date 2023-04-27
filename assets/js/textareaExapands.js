var textarea = document.querySelector("textarea");
textarea.addEventListener("input", function () {
  if (window.innerWidth < 768) {
    this.style.height = "128px";
    this.style.height = this.scrollHeight + "px";
  } else {
    var maxHeight = 364; /* altura máxima desejada para a textarea */
    if (this.scrollHeight > maxHeight) {
      this.style.height = maxHeight + "px";
      this.style.overflowY = "scroll"; /* adiciona barras de rolagem */
    } else {
      this.style.height = this.scrollHeight + "px";
      this.style.overflowY = "hidden"; /* remove barras de rolagem */
    }
  }
});
