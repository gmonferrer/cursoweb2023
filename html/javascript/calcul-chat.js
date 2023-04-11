const input = document.getElementById('input');

function appendToInput(value) {
  input.value += value;
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = 'Error';
  }
}

function clearInput() {
  input.value = '';
}

function handleKeyPress(event) {
    const key = event.key;
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearInput();
    } else if (/^[0-9+\-*/.\s]$/.test(key)) {
      appendToInput(key);
    }
  }
  
  function handleKeyDown(event) {
    if (event.key === 'Backspace') {
      event.preventDefault();
      const inputValue = input.value;
      input.value = inputValue.substring(0, inputValue.length - 1);
    }
  }
  