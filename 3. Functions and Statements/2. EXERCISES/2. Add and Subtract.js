function addOrSubtract(a, b, c){
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let result = subtract(sum(a, b), c);
    console.log(result);
}