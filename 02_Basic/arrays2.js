// Creating two arrays of superhero names
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// ---- PUSH METHOD ----
// marvel_heros.push(dc_heros)
// This will add the entire dc_heros array as ONE element inside marvel_heros
// Result: ["thor", "Ironman", "spiderman", ["superman","flash","batman"]]

// Accessing "flash" from the above nested array
// console.log(marvel_heros[3][1]);

// ---- CONCAT METHOD ----
// const allHeros = marvel_heros.concat(dc_heros)
// concat() merges arrays and returns a NEW array 
// console.log(allHeros);

// ---- SPREAD OPERATOR ----
// Creates a NEW array by spreading elements
const all_new_heros = [...marvel_heros, ...dc_heros]
// Equivalent to concat(), but more modern and flexible
// console.log(all_new_heros);


// ---- FLAT METHOD ----
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat(Infinity) removes all levels of nested arrays
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// Output: [1,2,3,4,5,6,7,6,7,4,5]


// ---- ARRAY CHECKS & CONVERSIONS ----

// Checks if value is an array
console.log(Array.isArray("Hitesh"));  
// false (because "Hitesh" is a string)

// Converts string to array of characters
console.log(Array.from("Hitesh"));
// ["H","i","t","e","s","h"]

// Interesting case:
console.log(Array.from({name: "hitesh"}));
// Output: [] → because "from" doesn't know how to convert a non‑iterable object
// For objects, Array.from needs a length property or must be iterable


// ---- ARRAY.OF ----
// Creates array from given separate values
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [100, 200, 300]