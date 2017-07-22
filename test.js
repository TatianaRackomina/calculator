/*
	1. Вводим число до ввода операции в переменную а
	2. Заполняем переменную операции
	3. Вводим значение в переменную b
	4. Определяем результат
*/

var numbers = document.querySelectorAll('.numbers button'),
	operations = document.querySelectorAll('.opers button'),
	equal = document.querySelector('#equal'),
	clear = document.querySelector('#clear'),
	backspace = document.querySelector('#back'),
	display = document.querySelector('input'),
	digit1 = null, 
	digit2 = null,
	oper = '', 
	result = '';

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function (e) {
		result += e.target.textContent;
		display.value = result;
	});
}

for (var i = 0; i < operations.length; i++) {
	operations[i].addEventListener('click', function (e) {
		if (result !== '') {
			if (digit1 != null) {
				getDigit2();
				Equal();
				showResult();
			}
			oper = e.target.textContent;
			digit1 = parseFloat(result);
			display.value += e.target.textContent;
			result = result.toString() + e.target.textContent;
		}
	});
}

equal.addEventListener('click', function (e) {
	getDigit2();
	Equal();
	showResult();
})

function getDigit2() {
	var index = display.value.indexOf(oper);
	digit2 = parseFloat(display.value.slice(index + 1));
}

clear.addEventListener('click', function (e) {
	digit1 = null;
	digit2 = null;
	oper = '';
	result = '';
	display.value = '';
});

backspace.addEventListener('click', function (e) {
	var symbol = display.value.charAt(display.value.length - 1);
	if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
		digit2 = 0;
		oper = '';
	}
	display.value = display.value.slice(0, display.value.length - 1);
	result = display.value;
});

function Equal() {
	switch (oper){
		case '+':
			result = digit1 + digit2;
		break;
		case '-':
			result = digit1 - digit2;
		break;
		case '*':
			result = digit1 * digit2;
		break;
		case '/':
			if (digit1 === 0) {
				result = 'NaN';
			} else {
				result = digit1 / digit2;
			}
		break;
	}
}

function showResult() {
	display.value = result;
}