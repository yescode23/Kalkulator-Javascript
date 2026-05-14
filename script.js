const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        display.innerText += button.innerText;
    })
});