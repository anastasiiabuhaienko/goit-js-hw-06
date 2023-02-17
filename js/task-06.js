
const inpArea = document.querySelector('input');

inpArea.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == inpArea.dataset.length) {
        inpArea.classList.add('valid') || inpArea.classList.remove('invalid');
    } else {
        inpArea.classList.add('invalid') || inpArea.classList.remove('valid');
    }
        
});