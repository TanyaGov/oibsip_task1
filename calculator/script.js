const buttons = document.querySelectorAll('.btn');
const screen = document.getElementById('screen');

let screenValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            screenValue = '';
            screen.textContent = screenValue;
        } else if (value === '=') {
            try {
                screenValue = eval(screenValue);
                screen.textContent = screenValue;
            } catch (error) {
                screen.textContent = 'Error';
            }
        } else {
            screenValue += value;
            screen.textContent = screenValue;
        }
    });
});
