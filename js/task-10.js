function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inpArea = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

//добавляем слушателя
inpArea.addEventListener('input', getBoxAmount);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


let boxWidth = 20;
let boxHeight = 20;

//Узнаем переданое число

function getBoxAmount(event) {
inpArea.setAttribute('amount', event.currentTarget.value); 
};


function createBoxes(amount) {
 let amountBoxes = inpArea.getAttribute('amount');
  
  for (let i = 0; i < amountBoxes; i += 1) {
    boxWidth += 10;
    boxHeight += 10;   
    
    const box = document.createElement('div');          
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;    
    box.classList.add('box');
    box.style.background = getRandomHexColor();    
    boxes.append(box);
};

    inpArea.value = '';
};

function destroyBoxes(event) {  
  boxWidth = 20;
  boxHeight = 20;
  boxes.textContent = '';
}
