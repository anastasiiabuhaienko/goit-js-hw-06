

const inpText = document.querySelector('#name-input');
const outText = document.querySelector('#name-output');

inpText.addEventListener('keyup', () => {
    if(inpText.value === "") {
        outText.textContent = "Anonymous";
    } else {
        outText.textContent = inpText.value;
    }
});

