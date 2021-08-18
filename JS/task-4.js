const counterValue = document.querySelector('#value');
const MinusBtn = document.querySelector('button[data-action="decrement"]');
const PlusBtn = document.querySelector('button[data-action="increment"]');

let rezult = 0;

MinusBtn.addEventListener('click', () => 
    (counterValue.textContent = `${--rezult}`)
);

PlusBtn.addEventListener('click', () => 
    (counterValue.textContent = `${++rezult}`)

);