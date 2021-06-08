import menuMarkUpTpl from '../src/template/menu.hbs';
//console.log(menuMarkUpTpl);
import markUp from '../menu.json';
//console.log(markUp);
import '../src/styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}; 

const toggleTheme = document.getElementById('theme-switch-toggle');

const menuEl = document.querySelector('.js-menu');
const createMenuEl = createMenuMarkUp( markUp);
menuEl.insertAdjacentHTML('beforeend', createMenuEl);

function createMenuMarkUp (markUp) { 
  return menuMarkUpTpl (markUp);
}

savedTheme()
toggleTheme.addEventListener('change', onToggleTheme);

function onToggleTheme() {
  document.body.classList.toggle(Theme.DARK)
  localStorage.Theme = document.body.className || Theme.LIGHT;   
};

function savedTheme() {
  if(toggleTheme.classList.add('checked')) {
  localStorage.Theme.DARK
  } else {  
    toggleTheme.classList.remove('checked')  
    localStorage.Theme.LIGHT
}
}; 
