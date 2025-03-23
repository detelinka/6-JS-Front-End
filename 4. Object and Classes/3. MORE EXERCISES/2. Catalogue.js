function catalogue(arr){
    let catalogue = {};
    arr.forEach(element => {
        let [product, price] = element.split(' : ');
        let letter = product[0];
        if (!catalogue[letter]) {
            catalogue[letter] = [];
        }
        catalogue[letter].push({product, price: Number(price)});
    });
    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [letter, products] of sortedCatalogue) {
        console.log(letter);
        products.sort((a, b) => a.product.localeCompare(b.product));
        products.forEach(product => {
            console.log(`  ${product.product}: ${product.price}`);
        });
    }
}