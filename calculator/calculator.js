function add (number1, number2) {
	return number1 + number2;
}

function subtract (number1, number2) {
	return number1 - number2;
}

function sum (array) {
	let sum = 0;
	let i = 0;
	for(i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum;
}

function multiply (arr) {
	let i = 0;
	let product = 1;
	for(i = 0; i < arr.length; i++) {
		product = product * arr[i]; 
	
	}
	return product;

}


function power(number1, number2) {
	return number1 ** number2;
}

function factorial(number) {
	let i = number
	if(i === 0) {
		return 1;
	}
	
	if(i === 1) {
		return 1;
	}
	i--;
	let factorial = number * (number-i);
		
	

	
	while(i > 1) {
		i--;
		factorial = factorial * (number - i);
	}
	console.log(factorial);
	return factorial;
	}

	

	

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
