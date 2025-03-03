function spice (num) {
    let total = 0;
    let days = 0;
    while (num >= 100) {
        total += num;
        total -= 26;
        num -= 10;
        days++;
    }
    if (total >= 26) {
        total -= 26;
    }
    console.log(days);
    console.log(total);
}