//Write a function, which receives two parameters. 
//The first parameter will be a string with some words separated by ', '.
//The second parameter will be a string that contains templates containing '*'.
//Find the word with the same length as the template and replace it.

function revealWords(wordsString, textToProcess) {
    words = wordsString.split(", ");

    for (let word of words) {
        textToProcess = textToProcess.replace("*".repeat(word.length), word);
    }

    console.log(textToProcess);
}

