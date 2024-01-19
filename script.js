// Selecting elements
const input = document.getElementById('input');
const buttons = document.querySelectorAll('.btn');

// Adding click event listener to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.innerText);
    });
});

// Function to handle button clicks
function handleButtonClick(value) {
    switch (value) {
        case 'AC':
            input.value = '';
            break;
        case 'DEl':
            input.value = input.value.slice(0, -1);
            break;
        case '=':
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = 'Error';
            }
            break;
        default:
            input.value += value;
    }
}