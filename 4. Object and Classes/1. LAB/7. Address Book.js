function adressBook (input) {
    let adressBook = {};

    for (let line of input) {
        let [name, adress] = line.split(':');
        adressBook[name] = adress;
    }

    let sorted = Object.entries(adressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, adress] of sorted) {
        console.log(`${name} -> ${adress}`);
    }
}