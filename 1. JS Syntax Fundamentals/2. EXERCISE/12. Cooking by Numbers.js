function cooking (input, one, two, three, four, five) {
    let number = Number(input);
    let operations = [one, two, three, four, five];
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop'); // 16 8 4 2 1
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); // 3 4 2 6 4.8
