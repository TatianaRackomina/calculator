
var buttons = document.querySelectorAll('button'),
	input = document.querySelector('input'),
	// operation = document.querySelectorAll('.operation'),
	a = 0, b = 0, result = '', oper = '';
	// console.log(operation);
	// console.dir(buttons);

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function (e) {
					input.value += e.target.textContent;
						if (e.target.textContent == '+') {
							a = +input.value.slice(0, length-1);
							oper = '+';
							// input.value = ''; 
							input.value = result;
						} else if (e.target.textContent == '-') {
							a = +input.value.slice(0, length-1);
							oper = '-';
							// input.value = '';
							input.value = result;
						} else if (e.target.textContent == '*') {
							a = +input.value.slice(0, length-1);
							oper = '*';
							// input.value = '';
							input.value = result;
						} else if (e.target.textContent == '/') {
							a = +input.value.slice(0, length-1);
							oper = '/';
							// input.value = '';
							input.value = result;
						} else if (e.target.textContent == 'Clear') {
							a = 0;
							b = 0;
							result = '';
							oper = '';
							input.value = '';
						} else if (e.target.textContent == '=') {
							b = +input.value.slice(0, length-1);
							if (oper == '+') {
								result = a + b;
								// input.value = result;
							} else if (oper == '-') {
								result = a - b;
								// input.value = result;
							} else if (oper == '*') {
								result = a * b;
								// input.value == result;
							} else if (oper = '/') {
								result = a / b;
								// input.value = result;
							}
							input.value = result;
						};
						console.log('a = ' + a);
						console.log('b = ' + b);
						console.log('result = ' + result);
		});
	}; 




