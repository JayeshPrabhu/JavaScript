// Create a primitive number
const score = 400
// console.log(score); // Logs: 400

// Create a Number object (wrapper object around a number)
// Generally, you should prefer primitive numbers unless you need object methods explicitly.
const balance = new Number(100)
// console.log(balance); // Logs: [Number: 100]

// Convert the number to a string and get its length (number of characters)
// "100" -> length is 3
// console.log(balance.toString().length);

// toFixed(n) formats the number using fixed-point notation with n digits after the decimal
// e.g., 100 -> "100.0" when n=1
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// toPrecision(n) formats the number to n significant digits (rounds as needed)
// e.g., 123.8966 -> "123.9" when n=4
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// toLocaleString('en-IN') formats the number as per Indian numbering system (lakhs/crores)
// e.g., 1000000 -> "10,00,000"
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Math object containing math constants and functions
// console.log(Math.abs(-4));     // Absolute value -> 4
// console.log(Math.round(4.6));  // Round to nearest integer -> 5
// console.log(Math.ceil(4.2));   // Round up -> 5
// console.log(Math.floor(4.9));  // Round down -> 4
// console.log(Math.min(4, 3, 6, 8)); // Minimum -> 3
// console.log(Math.max(4, 3, 6, 8)); // Maximum -> 8

// Math.random() returns a floating-point number in [0, 1)
// i.e., 0 (inclusive) to 1 (exclusive)
console.log(Math.random());

// Scale random to [0, 10) then shift by +1 to get (1, 11)
// Still floating-point, not integer
console.log((Math.random() * 10) + 1);

// Get an integer in [1, 10]
// Math.floor() removes the decimal part (rounds down)
// Multiplying by 10 gives [0, 10), floor -> integers 0..9, +1 -> 1..10
