function roadRadar (speed, area) {
    let limit = 0;
    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let overLimit = speed - limit;
        let status = '';
        if (overLimit <= 20) {
            status = 'speeding';
        } else if (overLimit <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(40, 'city'); // Driving 40 km/h in a 50 zone
roadRadar(21, 'residential'); // The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, 'interstate'); // The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding