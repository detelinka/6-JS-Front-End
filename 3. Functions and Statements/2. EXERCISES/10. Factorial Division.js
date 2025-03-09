function factorialDivision(num1, num2) {
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    let result = factorial(num1) / factorial(num2);
    return result.toFixed(2);
}