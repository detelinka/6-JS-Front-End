function garage(arr){
    let garages = new Map();
    for (let line of arr) {
        let [garage, carInfo] = line.split(' - ');
        if (!garages.has(garage)) {
            garages.set(garage, []);
        }
        garages.get(garage).push(carInfo);
    }
    let sorted = Array.from(garages).sort((a, b) => a[0] - b[0]);
    for (let [garage, cars] of sorted) {
        console.log(`Garage № ${garage}`);
        for (let car of cars) {
            console.log(`--- ${car.replace(/: /g, ' - ')}`);
        }
    }
}