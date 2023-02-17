
const inpArea = document.querySelector('input');
const outText = document.querySelector('#text');

inpArea.addEventListener('input', (event) => {
    outText.style.fontSize = event.currentTarget.value.concat('px');
});

