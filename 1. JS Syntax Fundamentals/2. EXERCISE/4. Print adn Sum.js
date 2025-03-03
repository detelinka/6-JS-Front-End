function printAndSum (m, n) {
    let sum = 0;
    let result = '';

    for (let i = m; i <= n; i++) {
        sum += i;
        result += i + ' ';
    }

    console.log(result);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10); 
// 5 6 7 8 9 10
// Sum: 45

printAndSum(0, 26); 
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// Sum: 351                    