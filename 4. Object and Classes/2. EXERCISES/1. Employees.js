function employees(input) {
    let employees = {}; // Empty object

    for (let employee of input) { // Loop through the input array
        employees[employee] = employee.length; // Add the employee name as a key and the length of the name as a value
    }

    for (let key in employees) { // Loop through the object
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`); // Print the key and the value
    }
}