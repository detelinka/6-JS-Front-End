function reverseArray(n, arr){
    let result = '';
    for (let i = n - 1; i >= 0; i--) {
        result += arr[i] + ' ';
    }
    console.log(result);
}
reverseArray(3, [10, 20, 30, 40, 50]); // 30, 20, 10