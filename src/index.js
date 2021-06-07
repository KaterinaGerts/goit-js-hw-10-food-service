import menuMarkUpTpl from '../src/template/menu.hbs';
//console.log(menuMarkUpTpl);
import markUp from '../menu.json';
//console.log(markUp);
import '../src/styles.css';

const menuEl = document.querySelector('.js-menu');
//console.log(menuEl);
const createMenuEl = createMenuMarkUp( markUp);

menuEl.insertAdjacentHTML('beforeend', createMenuEl);

function createMenuMarkUp (markUp) {
  //console.log( markUp);
  return menuMarkUpTpl (markUp);
}

const ingredientsEl = document.querySelector('markUp');
console.log(ingredientsEl);