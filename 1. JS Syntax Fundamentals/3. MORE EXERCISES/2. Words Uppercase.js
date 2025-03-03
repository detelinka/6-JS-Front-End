function uppercase (text) {
    let result = text.toUpperCase().split(/\W+/).filter(w => w !== '');
    console.log(result.join(', '));
}