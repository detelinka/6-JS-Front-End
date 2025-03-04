# JS-Front-End CHEAT SHEET

## Data Types / Типове данни
```java script
let number = 10;                        // Number
let name = "John";                      // String
let isTrue = true;                      // Boolean
let array = [1, 2, 3];                  // Array
let person = {name: "John", age: 25};   // Object
let unknown = undefined;                // Undefined
let empty = null;                       // Null
```
## Functions
```java script

let greet = function() {}           // Function expression     
function add (x, y) {}              // Function declaration
greet();                            // Calling a function
add(2, 3);                          // Calling a function with arguments
let sum = add(2, 3);                // Storing the return value of a function
console.log(sum);                   // Printing the return value of a function
let multiply = function(x, y) {     // Function with return value
    return x * y;                   // Returning a value                               
}
function printDoc() {               // Fnction invoking another functions
    printLabel();
    printContent();
}
function countDown(n) {             // Recursive function (Self-invoking)
    console.log(n);
    if (n > 0) {countDown(n - 1);}
}

//Functions can be nested, i.e. hold other function
function outer() {                // Outer function
    function inner() {            // Inner function is only accessible within the outer function
    
    }
}
//Arrow functions
let add = (x, y) => x + y;         // Arrow function
let add = (x, y) => {              // Arrow function with multiple statements
    let sum = x + y;
    return sum;
}
let greeting = () => console.log("Hello"); // Arrow function with no arguments
let greeting = name => console.log(`Hello ${name}`); // Arrow function with one argument
let greeting = (name, age) => console.log(`Hello ${name}, you are ${age} years old`); // Arrow function with multiple arguments
let multiply = (x, y) => x * y;    // Arrow function with return value
```

## Loops
```java script

// For loop
for (let i = 0; i < 5; i++) {       // For loop
    console.log(i);
}
for (let i = 0; i < 5; i++) {       // For loop with break statement
    if (i === 3) {break;}
    console.log(i);
}
for (let i = 0; i < 5; i++) {       // For loop with continue statement
    if (i === 3) {continue;}
    console.log(i);
}
for (let word in ['apple', 'banana', 'cherry']) {  // For loop for arrays
    console.log(word);                             // Prints the index
}

// While loop
let i = 0;
while (i < 5) {                     // While loop
    console.log(i);
    i++;
}
let i = 0;
while (i < 5) {                     // While loop with break statement
    if (i === 3) {break;}
    console.log(i);
    i++;
}
let i = 0;
while (i < 5) {                     // While loop with continue statement
    if (i === 3) {continue;}
    console.log(i);
    i++;
}

// Do-while loop
let i = 0;
do {                                // Do-while loop
    console.log(i);
    i++;
} while (i < 5);
```



## Comparison Operators
```java script
console.log(1 == '1');             // true
console.log(1 === '1');            // false
console.log(1 != 2);               // true
console.log(1 !== 2);              // true
console.log(1 > 2);                // false
console.log(1 < 2);                // true
console.log(1 >= 2);               // false
console.log(1 <= 2);               // true
console.log((5 > 7) ? 4 : 10);     // 10 (Ternary operator)
```

## Arrays
```java script
let numbers = [1, 2, 3, 4, 5];  // Creating an array
console.log(numbers[0]);        // Accessing the first element
console.log(numbers.length);    // Length of the array
numbers.push(6);                // Adding an element to the end
numbers.pop();                  // Removing the last element
numbers.shift();                // Removing the first element
numbers.unshift(0);             // Adding an element to the beginning
numbers.splice(2, 1);           // Removing 1 element from index 2
numbers.splice(2, 0, 10, 11);   // Adding 10 and 11 at index 2
numbers.slice(1, 3);            // Returns [2, 3]
numbers.concat([6, 7]);         // Returns [1, 2, 3, 4, 5, 6, 7]
numbers.sort();                 // Sorts the array
numbers.reverse();              // Reverses the array
numbers.indexOf(3);             // Returns the index of 3
numbers.join();                 // Converts the array to a string
numbers.map();                  // Calls a function for each element
numbers.filter();               // Returns an array based on the condition
numbers.reduce();               // Reduces the array to a single value
numbers.forEach();              // Calls a function for each element
numbers.every();                // Returns true if all elements satisfy the condition
numbers.some();                 // Returns true if any element satisfies the condition
numbers.find();                 // Returns the first element that satisfies the condition
numbers.findIndex();            // Returns the index of the first element that satisfies the condition
```

## Strings
```java script
let str = "Hello World";        // Creating a string
str.length;                     // Length of the string
str.charAt(0);                   // Returns 'H'
str.charCodeAt(0);               // Returns 72
str.concat(" from the other side"); // Concatenates the string
str.includes("Hello");           // Returns true
str.indexOf("World");            // Returns 6
str.lastIndexOf("o");            // Returns 7
str.match(/o/g);                 // Returns ['o', 'o']
str.replace("World", "Universe");// Replaces 'World' with 'Universe'
str.search("World");              // Returns 6
str.slice(0, 5);                  // Returns 'Hello'
str.split(" ");                   // Returns ['Hello', 'World']
str.substring(1, 4);              // Returns 'ello'
str.toLowerCase();                // Returns 'hello world'
str.toUpperCase();                // Returns 'HELLO WORLD'
str.trim();                       // Removes whitespace from both ends
```
