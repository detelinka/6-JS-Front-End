function hastagFinder(text) {
    const constraint = /(#[A-Za-z]+)/gm
    let words = text.match(constraint);

    for (let word of words) {
        word = word.replace("#", "");
        console.log(word);
    }
}