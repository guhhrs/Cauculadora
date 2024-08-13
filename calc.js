function appendToDisplay(value) {
    const display = document.getElementById('display');
    let currentText = display.value;

    // Define os operadores matemáticos
    const operators = ['+', '-', '*', '/'];

    // Se o valor a ser adicionado é um operador
    if (operators.includes(value)) {
        // Verifica se o display não está vazio e o último caractere é um operador
        if (currentText !== '' && operators.includes(currentText.slice(-1))) {
            // Se o último caractere é um operador, substitui pelo novo operador
            display.value = currentText.slice(0, -1) + value;
        } else {
            // Caso contrário, adiciona o operador
            display.value += value;
        }
    } else if (value === '±') {
        // Alterna o sinal do número atual
        if (currentText !== '') {
            display.value = currentText.startsWith('-') ? currentText.slice(1) : '-' + currentText;
        }
    } else {
        // Adiciona o valor se não for um operador
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value.trim();

    // Substitui a vírgula por ponto, se necessário
    expression = expression.replace(/,/g, '.');

    // Verifica se a expressão não está vazia e não termina com um operador
    if (expression === '' || ['+', '-', '*', '/'].includes(expression.slice(-1))) {
        display.value = 'Error';
        return;
    }

    try {
        // Avalia a expressão matemática
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
