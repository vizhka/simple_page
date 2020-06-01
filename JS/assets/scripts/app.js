const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert('This result ' + result);
}

currentResult = (currentResult + 15) * 3/2 + 90;

let calculationDescription = `(${defaultResult} + 10) * 3 /2 - 1`
outputResult(currentResult, calculationDescription);