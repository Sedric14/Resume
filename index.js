
const root = document.querySelector('#root');
const menu = document.querySelector('.menu');
const popup = document.querySelector('.popup');
let pop = NaN;

const itemsTitle = ['About Me', 'Skills', 'Experience', 'Education', 'Contacts', 'Resume Download'];

itemsTitle.forEach((el, ind) => {
  const li = document.createElement('li');
  li.className = 'menuItem';
  li.textContent = el;
  li.addEventListener('click', () => {showPopup(ind)})
  menu.append(li);
});

function showPopup(ind) {
  popup.style.height = '0px';
  if (pop != ind) {
    if(!isNaN(pop)){
      setTimeout(() => {
        popup.style.height = '300px'
        popup.textContent = aba[ind];
      }, 500)
    }else{
      popup.style.height = '300px'
      popup.textContent = ind;
    }
      
  } else {ind = NaN}
  pop = ind;
}

import aba from './texts';