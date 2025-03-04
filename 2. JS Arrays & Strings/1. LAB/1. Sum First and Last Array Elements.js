function sumArrays(arr) {
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);
    return first + last;
}
sumArrays(['20', '30', '40']); // 60
sumArrays(['5', '10']); // 15
