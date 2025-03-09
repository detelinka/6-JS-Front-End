function numberMods (num) {
    let numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
    }
    let average = sum / numStr.length;
    while (average <= 5) {
        numStr += '9';
        sum += 9;
        average = sum / numStr.length;
    }
    console.log(numStr);
}