let currentNumber = '';
let previousNumber = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
	if (number =='.' && currentNumber.includes('.')) 
		return;

	currentNumber = currentNumber + number; // 할당 right항의 값을 left 변수에 저장

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

function clearDisplay() {
	display.textContent = '0';
	currentNumber = '';
	previousNumber = '';
	operation = null;
	updateDisplay()
}

function setOperation(op) {
	if (currentNumber=='') {
		return;
	}
	if (previousNumber != '') { // 이전 숫자가 설정되지 않았음
		calculate();		
	}

	operation = op
	previousNumber = currentNumber;
	currentNumber = '';
}

function calculate() {
	let result;
	const prev = parseFloat(previousNumber);
	const curr = parseFloat(currentNumber);

	switch( operation ) {
	case '+': result = prev + curr;
		break;
	case '-': result = prev - curr;
		break;
	case 'x': result = prev * curr;
		break;
	case '/': result = prev / curr;
		break;
	}
	currentNumber = result.toString();
	operation = null
	previousNumber = '';
	updateDisplay()
}