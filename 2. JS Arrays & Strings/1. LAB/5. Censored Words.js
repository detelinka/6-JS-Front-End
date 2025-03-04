function censor(text, word) {
    let censored = text.replace(word, repeat(word));
    while (censored.includes(word)) {
    censored = censored.replace(word, repeat(word));
    }
    return censored;

    function repeat(word) {
        let censoredWord = '';
        for (let i = 0; i < word.length; i++) {
        censoredWord += '*';
        }
        return censoredWord;
    }
}

censor("A small sentence with some words", "small");
// Expected Output: "A ***** sentence with some words"