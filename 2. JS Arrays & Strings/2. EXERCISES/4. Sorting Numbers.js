//Write a function that sorts an array of numbers so that 
// the first element is the smallest one, 
// the second is the biggest one, 
// the third is the second smallest one,
// the fourth is the second biggest one, and so on. 
//Return the resulting array.

function sort(array){
    let result = [];                // Creating an empty array
    array.sort((a, b) => a - b);    // Sorting the array    
    while(array.length > 0){         
        result.push(array.shift()); // Smallest element

        if (array.length) {
            result.push(array.pop()); // Largest element
        }
    }
    return result;
}
