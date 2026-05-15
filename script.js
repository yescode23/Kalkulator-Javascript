const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const number = button.innerText;
        if (display.innerText === '0') {
            display.innerText = number;
        } else {
            display.innerText += number;
        }
    })
});