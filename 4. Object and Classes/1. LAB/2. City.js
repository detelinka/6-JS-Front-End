function printCityInfo(city) {
    const data = Object.entries(city);

    for (let [key, value] of data) {
        console.log(`${key} -> ${value}`);
    }
}

printCityInfo({ name: 'Sofia', area: 492, population: 1238438, country: 'Bulgaria', postCode: '1000' });
// Expected output:
// name -> Sofia
// area -> 492
// population -> 1238438
// country -> Bulgaria
// postCode -> 1000

