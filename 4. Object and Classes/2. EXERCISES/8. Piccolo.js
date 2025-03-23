function piccolo(input) {
    let parking = {};
    for (let line of input) {
        let [direction, carNumber] = line.split(', ');
        if (direction === 'IN') {
            parking[carNumber] = 1;
        } else {
            delete parking[carNumber];
        }
    }
    let sorted = Object.keys(parking).sort((a, b) => a.localeCompare(b));
    console.log(sorted.length === 0 ? 'Parking Lot is Empty' : sorted.join('\n'));
}