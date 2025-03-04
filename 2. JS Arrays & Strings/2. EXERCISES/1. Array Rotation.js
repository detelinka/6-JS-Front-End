function rotation(arr, num){
    for (let i = 0; i < num; i++) {     // Looping through the array
        let firstElement = arr.shift(); // Removes the first element
        arr.push(firstElement);         // Adds the first element to the end
    }
    console.log(arr.join(' '));         // Prints the array as a string with space
}

rotation([51, 47, 32, 61, 21], 2) // [32 61 21 51 47]