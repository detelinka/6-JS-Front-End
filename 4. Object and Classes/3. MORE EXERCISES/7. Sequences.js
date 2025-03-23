function sequences(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let current = JSON.parse(arr[i]).sort((a, b) => b - a);
        if (!result.find(x => JSON.stringify(x) === JSON.stringify(current))) {
            result.push(current);
        }
    }
    result.sort((a, b) => a.length - b.length);
    result.forEach(x => console.log(`[${x.join(', ')}]`));
}