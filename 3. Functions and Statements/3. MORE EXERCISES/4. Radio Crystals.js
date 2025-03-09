function radioCrystals (input) {
    let targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let currentThickness = input[i];

        console.log(`Processing chunk ${currentThickness} microns`);

        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;

        while (currentThickness / 4 >= targetThickness) {
            currentThickness /= 4;
            cut++;
        }

        if (cut > 0) {
            console.log(`Cut x${cut}`);
            console.log('Transporting and washing');
        }

        while (currentThickness * 0.8 >= targetThickness) {
            currentThickness *= 0.8;
            lap++;
        }

        if (lap > 0) {
            console.log(`Lap x${lap}`);
            console.log('Transporting and washing');
        }

        while (currentThickness - 20 >= targetThickness) {
            currentThickness -= 20;
            grind++;
        }

        if (grind > 0) {
            console.log(`Grind x${grind}`);
            console.log('Transporting and washing');
        }

        while (currentThickness - 2 >= targetThickness - 1) {
            currentThickness -= 2;
            etch++;
        }

        if (etch > 0) {
            console.log(`Etch x${etch}`);
            console.log('Transporting and washing');
        }

        if (currentThickness === targetThickness - 1) {
            console.log('X-ray x1');
            console.log(`Finished crystal ${targetThickness} microns`);

        } else {
            console.log(`Finished crystal ${targetThickness} microns`);
        }
    }
}