 var display = document.querySelector('.display');
    var opertorbuttons = document.querySelectorAll('.operator');
    var numberButtons = document.querySelectorAll('.number');

var currentInput = '';
var previousInput = '';
var operator = null;

function updateDisplay(value){
    display.innerHTML = value| '';
}

numberButtons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        var id = button.id
        currentInput = currentInput + id
         updateDisplay (currentInput);
    })
    });


updateDisplay('');




















