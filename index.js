class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        if (this.num2 === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        return this.num1 / this.num2;
    }
}

function performCalculation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    const calculator = new Calculator(num1, num2);
    let result = 0;

    try {
        switch (operation) {
            case 'add':
                result = calculator.add();
                break;
            case 'subtract':
                result = calculator.subtract();
                break;
            case 'multiply':
                result = calculator.multiply();
                break;
            case 'divide':
                result = calculator.divide();
                break;
        }
    } catch (error) {
        alert(error.message);
        return;
    }

    document.getElementById('result').textContent = result;
}
