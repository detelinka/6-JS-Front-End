function occurances(input) {
    let words = input.split(' ');
    let wordsCount = {};

    for (let word of words) {
        word = word.toLowerCase();
        if (!wordsCount.hasOwnProperty(word)) {
            wordsCount[word] = 0;
        }
        wordsCount[word]++;
    }

    let result = [];
    for (let word in wordsCount) {
        if (wordsCount[word] % 2 !== 0) {
            result.push(word);
        }
    }
    console.log(result.join(' '));
}