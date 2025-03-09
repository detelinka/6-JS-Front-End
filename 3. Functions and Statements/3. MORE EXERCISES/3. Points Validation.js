function pointsValidation(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    function distance(x1, y1, x2, y2) {
        let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(dist) ? 'valid' : 'invalid';
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${distance(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${distance(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distance(x1, y1, x2, y2)}`);
}

pointsValidation([3, 0, 0, 4]); 
//{3, 0} to {0, 0} is valid
//{0, 4} to {0, 0} is valid
//{3, 0} to {0, 4} is valid

pointsValidation([2, 1, 1, 1]);
//{2, 1} to {0, 0} is invalid
//{1, 1} to {0, 0} is invalid
//{2, 1} to {1, 1} is valid