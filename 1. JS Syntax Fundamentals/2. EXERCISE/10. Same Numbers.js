function sameNumbers(num){
    let numStr = num.toString();
    let sum = 0;
    let isSame = true;
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
        if (numStr[i] !== numStr[0]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222); // true, 14
sameNumbers(1234); // false, 10