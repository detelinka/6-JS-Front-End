function inRange(firstChar, secondChar) {
    let first = firstChar.charCodeAt(0);
    let second = secondChar.charCodeAt(0);
    let start = Math.min(first, second);
    let end = Math.max(first, second);
    let result = '';
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    return result;
}