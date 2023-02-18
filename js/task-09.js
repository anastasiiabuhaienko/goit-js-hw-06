function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
const btnColor = document.querySelector('button');
const spanEl = document.querySelector('span');


btnColor.addEventListener('click', (event) => {
  body.style.backgroundColor = getRandomHexColor();
  const color = body.style.backgroundColor;
  spanEl.innerHTML = `- ${color}`;
});

