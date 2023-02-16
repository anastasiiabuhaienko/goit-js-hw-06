const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    valueRef.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    valueRef.textContent = counterValue.value;
});
