const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.button');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.value === '0') {
            display.value = button.textContent;
        } else {
            display.value += button.textContent;
        }
    });
})
const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', () => { display.value = '';
})

const operatorButtons = document.querySelectorAll('.mathButton');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.value === '0') {
            display.value = button.textContent;
        } else {
            display.value += button.textContent;
        }
    });
});

const equalButton = document.querySelector('.equalButton');
equalButton.addEventListener('click', () => { display.value = ''; });


