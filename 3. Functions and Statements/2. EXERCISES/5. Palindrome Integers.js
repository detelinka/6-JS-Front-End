function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i].toString();
        let reversed = number.split('').reverse().join('');

        if (number === reversed) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}