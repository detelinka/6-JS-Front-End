function nxnMatrix(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += `${n} `.repeat(n).trim() + '\n';
    }
    console.log(result);
}