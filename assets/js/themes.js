const themes = {
  light: {
    "--background-color": "#f7f3f3",
    "--header-footer-color": "#f7f3f3",
    "--main-color": "#0a3871",
    "--secondary-color": "#ffffff",
    "--main-text-color": "#0a3871",
    "--secondary-text-color": "#343a40",
    "--terciary-text-color": "#495057",
    "--fourth-color": "#000000",
    "--icons-color": "#0a3871",
    "--error-color": "#f15353",
    "--overlay-color": "#2d415bf0",
    "--button-color-main": "#0a3871",
    "--button-text-main": "#ffffff",
    "--button-color-secondary": "#f7f3f3",
    "--button-text-secondary": "#0a3871",
    "--footer-itens-color": "#0a3871",
    "--details-color": "#e0e0e0"
  },
  dark: {
    "--background-color": "#121212",
    "--header-footer-color": "#3f3f3f",
    "--main-color": "#a688fa",
    "--secondary-color": "#282828",
    "--main-text-color": "#a688fa",
    "--secondary-text-color": "#6c757d",
    "--terciary-text-color": "#495057",
    "--fourth-color": "#e0e0e0",
    "--icons-color": "#0a3871",
    "--error-color": "#ba9ffb",
    "--overlay-color": "#2d415bf0",
    "--button-color-main": "#a688fa",
    "--button-text-main": "#000000",
    "--button-color-secondary": "#121212",
    "--button-text-secondary": "#a688fa",
    "--footer-itens-color": "#0a3871",
    "--details-color": "#787878"
  }
};

function setTheme(theme) {
  document.body.classList.add('fade');

  setTimeout(() => {
    const properties = themes[theme];
    Object.keys(properties).forEach(key => {
      document.documentElement.style.setProperty(key, properties[key]);
    });

    const footerIcons = document.querySelectorAll('img');
    footerIcons.forEach(icon => {
      const iconSrc = icon.getAttribute('src');
      const iconThemeSrc = iconSrc.replace(/(light|dark|blue|green|purple)/, theme);
      icon.setAttribute('src', iconThemeSrc);
    });

    document.body.classList.remove('fade');
  }, 200); // Tempo da transição em milissegundos (0.5 segundos neste exemplo)
}



