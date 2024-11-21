let currentNumber = '';
let previousNumber = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
	currentNumber = currentNumber + number;
	updateDisplay();	
}

function updateDisplay() {
	if (currentNumber =='') {
		display.textContent = '0';
	}
	else {
		display.textContent = currentNumber;
	}
}
