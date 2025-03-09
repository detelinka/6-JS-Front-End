function printDNA(num) {
    let dna = 'ATCGTTAGGG';
    let count = 0;
    for (let i = 0; i < num; i++) {
        let first = dna[count % 10];
        let second = dna[(count + 1) % 10];
        if (i % 4 === 0) {
            console.log(`**${first}${second}**`);
        } else if (i % 4 === 1 || i % 4 === 3) {
            console.log(`*${first}--${second}*`);
        } else {
            console.log(`${first}----${second}`);
        }
        count += 2;
    }
}

printDNA(10); 