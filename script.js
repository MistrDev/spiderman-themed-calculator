// Select the buttons and input field
const buttons = document.querySelectorAll('.button');
const result = document.querySelector('#result');

// Add an event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the value of the clicked button
      const value = button.getAttribute('value');
  
      // Check if the value is an operator or a number
      if (value === '+' || value === '-' || value === '*' || value === '/') {
        // If it's an operator, update the display with the operator
        result.value += ` ${value} `;
      } else if (value === 'clear') {
        // If it's the clear button, reset the display
        result.value = '0';
      } else {
        // If it's a number, update the display
        if (result.value === '0') {
          result.value = value;
        } else {
          result.value += value;
        }
      }
    });
  });
  

// Select the '=' button
const equalButton = document.querySelector('#equals');

// Add an event listener to the button
equalButton.addEventListener('click', () => {
  // Evaluate the expression in the input field
  const resultValue = eval(result.value);
  // Update the display with the result
  result.value = resultValue;
});
