function dictionary(input) {
    let dictionary = {};
    for (let line of input) {
        let obj = JSON.parse(line);
        dictionary = Object.assign(dictionary, obj);
    }
    let sortedKeys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
    for (let key of sortedKeys) {
        let value = dictionary[key];
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}