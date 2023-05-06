const toggleSwitch = document.querySelector('input[type="checkbox"]');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    setTheme('dark');
  } else {
    setTheme('light');
  }    
}
