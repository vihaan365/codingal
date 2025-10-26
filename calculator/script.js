var display = document.querySelector('.display');
var opertorbuttons = document.querySelectorAll('.operator');
var numberButtons = document.querySelectorAll('.number');

var currentInput = '';
var previousInput = '';
var operator = null;

function updateDisplay(value) {
    display.innerHTML = value | '';
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        var id = button.id
        currentInput = currentInput + id
        updateDisplay(currentInput);
    })
});


updateDisplay('');

opertorbuttons.forEach((button) => {
    button.addEventListener('click', () => {
        var id = button.id
        if (id === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = null;
            updateDisplay(currentInput);
        } else if (id === 'equals') {
            if (operator !== null && previousInput !== '' && currentInput !== '') {
                var result = evaluate(previousInput, currentInput, operator);
                updateDisplay(result);
                currentInput = result.toString();
                previousInput = '';
                operator = null;
            }
        } else {
            if (currentInput === '') return;
            if (previousInput !== '') {
                var result = evaluate(previousInput, currentInput, operator);
                updateDisplay(result);
                previousInput = result.toString();
            } else {
                previousInput = currentInput;
            }

            currentInput = '';
            operator = id;


        }
    });
})
function evaluate(num1, num2, operator) {
    var a = parseFloat(num1);
    var b = parseFloat(num2);
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return 0;
    }
}
updateDisplay('');
























