function carWash (input) {
    let value = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === 'soap') {
            value += 10;
        } else if (command === 'water') {
            value *= 1.2;
        } else if (command === 'vacuum cleaner') {
            value *= 1.25;
        } else if (command === 'mud') {
            value *= 0.9;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}