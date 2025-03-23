function towns(input) {
    let towns = []; // Array of objects
    for (let i = 0; i < input.length; i++) { // Loop through the input
        let [town, latitude, longitude] = input[i].split(' | '); // Split the input by ' | '
        towns.push({ // Push the object to the array
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        });
    }
    towns.forEach(town => console.log(town)); // Print the array
}