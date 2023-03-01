const shopList = [

  'pane',
  'pomodori',
  'zucchine',
  'cavolfiori',
  'prosciutto',
  'mais',
  'zucca',
  'carote'

];

const listDom = document.querySelector('ul');

let i = 0;

while ( i < shopList.length ){

  const listItem = `<li class="item">${shopList[i]}</li>`;
  listDom.innerHTML += listItem;

  i ++;
}

const addListDom = document.getElementById('add-list');

addListDom.addEventListener('click',

  function(){

    const newItem = prompt('Aggiungi elemento alla lista');

    shopList.push(newItem);

    console.log(shopList);

    const listItem = `<li class="item">${newItem}</li>`;
    listDom.innerHTML += listItem;

    
  }

)


