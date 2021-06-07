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
  //console.log( markUp);
  return menuMarkUpTpl (markUp);
}
isSaveTheme();
toggleTheme.addEventListener('change', onReverseTheme);

function onReverseTheme(e) {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    document.body.classList.remove(Theme.DARK);
   document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
};

function isSaveTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    toggleTheme.checked = savedTheme;
  }  
};
  
 
  
