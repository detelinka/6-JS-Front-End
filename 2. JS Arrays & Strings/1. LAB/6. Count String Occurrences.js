function solve(text, word){
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.substring(i, i + word.length) === word) {
            count++;
        }
    }
    return count;
}