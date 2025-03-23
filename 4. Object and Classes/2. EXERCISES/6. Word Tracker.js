function wordsTracker(arr){
    let words = arr.shift().split(' '); 
    let obj = {};
    for (let word of words) {
        obj[word] = 0;
    }
    for (let word of arr) {
        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        }
    }
    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}