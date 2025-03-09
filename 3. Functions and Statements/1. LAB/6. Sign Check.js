function signCheck(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return 'Positive';
    } else if (a < 0 && b < 0 && c < 0) {
        return 'Negative';
    } else if (a < 0 && b < 0 && c > 0) {
        return 'Positive';
    } else if (a < 0 && b > 0 && c < 0) {
        return 'Positive';
    } else if (a > 0 && b < 0 && c < 0) {
        return 'Positive';
    } else if (a < 0 && b > 0 && c > 0) {
        return 'Negative';
    } else if (a > 0 && b < 0 && c > 0) {
        return 'Negative';
    } else if (a > 0 && b > 0 && c < 0) {
        return 'Negative';
    } else {
        return 'Positive';
    }
}