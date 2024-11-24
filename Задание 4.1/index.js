let a = 5;
let b = 4;

class Calculator {
    constructor() {
        this.a = a;
        this.b = b;
    }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return (b > 0) ? a / b : alert('b не должен быть равен 0')
    }
}

let calc = new Calculator();
console.log(calc.add(a, b));
console.log(calc.subtract(a, b));
console.log(calc.multiply(a, b));
console.log(calc.divide(a, b));