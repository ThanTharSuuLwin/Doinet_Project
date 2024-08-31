document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator1 = document.getElementById('operator1').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator2 = document.getElementById('operator2').value;
    const num3 = parseFloat(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result').value = 'Error';
        return;
    }

    let intermediateResult;
    switch (operator1) {
        case '+':
            intermediateResult = num1 + num2;
            break;
        case '-':
            intermediateResult = num1 - num2;
            break;
        case '×':
            intermediateResult = num1 * num2;
            break;
        case '÷':
            intermediateResult = num1 / num2;
            break;
        default:
            document.getElementById('result').value = 'Error';
            return;
    }

    let finalResult;
    switch (operator2) {
        case '+':
            finalResult = intermediateResult + num3;
            break;
        case '-':
            finalResult = intermediateResult - num3;
            break;
        case '×':
            finalResult = intermediateResult * num3;
            break;
        case '÷':
            finalResult = intermediateResult / num3;
            break;
        default:
            document.getElementById('result').value = 'Error';
            return;
    }

    document.getElementById('result').value = finalResult;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('operator1').value = '+';
    document.getElementById('num2').value = '';
    document.getElementById('operator2').value = '+';
    document.getElementById('num3').value = '';
    document.getElementById('result').value = '';
});
