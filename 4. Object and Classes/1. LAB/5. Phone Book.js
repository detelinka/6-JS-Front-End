function phoneBook(input) {
    let phoneBook = {};

    for (let line of input) {
        let [name, number] = line.split(' ');
        phoneBook[name] = number;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);

// Expected output:
// Tim -> 0876566344
// Peter -> 0877547887
// Bill -> 0896543112

