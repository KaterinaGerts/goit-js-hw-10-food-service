import menuMarkUpTpl from '../src/template/menu.hbs';
//console.log(menuMarkUpTpl);
import markUp from '../menu.json';
//console.log(markUp);
import '../src/styles.css';


const menuEl = document.querySelector('.js-menu');
const createMenuEl = createMenuMarkUp( markUp);
menuEl.insertAdjacentHTML('beforeend', createMenuEl);


function createMenuMarkUp (markUp) { 
  return menuMarkUpTpl (markUp);
}

const toggleTheme = document.getElementById('theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const BODY = document.body;
const saveTheme = localStorage.getItem('theme');

savedTheme()

toggleTheme.addEventListener('change', onToggleTheme);

function onToggleTheme(e) {
  e.preventDefault();

  if(e.target.checked) {
    BODY.classList.add(Theme.DARK)
    BODY.classList.remove(Theme.LIGHT)
    localStorage.setItem('theme', Theme.DARK)
    toggleTheme.checked = true; 
  } else {
    BODY.classList.add(Theme.LIGHT)
    BODY.classList.remove(Theme.DARK)
    localStorage.setItem('theme', Theme.LIGHT) 
    toggleTheme.checked = false;
  }    
};


function savedTheme() {
  if(saveTheme === Theme.DARK) {
    BODY.classList.remove(Theme.LIGHT)
    BODY.classList.add(Theme.DARK)
    localStorage.setItem('theme', Theme.DARK)
    toggleTheme.checked = true; 
    return;
  }  else {
    BODY.classList.remove(Theme.DARK)
    BODY.classList.add(Theme.LIGHT)
    localStorage.setItem('theme', Theme.LIGHT) 
    toggleTheme.checked = false;
    return;
  }
}; 
