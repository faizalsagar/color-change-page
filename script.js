const button = document.getElementById('color-button');
const container = document.querySelector('.container');
const themes = ['theme-one', 'theme-two', 'theme-three', 'theme-four'];

button.addEventListener('click', () => {
  const currentTheme = container.classList[1];
  const currentThemeIndex = themes.indexOf(currentTheme);
  const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
  const nextTheme = themes[nextThemeIndex];

  container.classList.remove(currentTheme);
  container.classList.add(nextTheme);
});

window.addEventListener('load', () => {
  const randomThemeIndex = Math.floor(Math.random() * themes.length);
  const randomTheme = themes[randomThemeIndex];
  
  container.classList.add(randomTheme);
});
