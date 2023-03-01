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

let newListItem;

while ( i < shopList.length ){

  const listItem = `<li class="item">${shopList[i]}</li>`;
  listDom.innerHTML += listItem;

  newListItem = listItem;
  
  i ++;
}

const addListDom = document.getElementById('add-list');

addListDom.addEventListener('click',

  function(){

    const newItem = prompt('Aggiungi elemento alla lista');

    shopList.push(newItem);

    console.log(shopList);

    newListItem.innerHTML += newItem;

    
  }

)


/*

let listaCompleta = false;

const itemDaInserire = prompt('Aggiungi elemento alla lista');


for (let c = 0; c < listaSpesa.length; c++){

  const currentItem = listaSpesa[c];

  if (currentItem == itemDaInserire){
    listaCompleta = true;
}

}

if (listaCompleta){
  console.log('lista completa');
}else{
  listaSpesa.push(itemDaInserire);
}

*/