const name = "hitesh"                 // String (primitive)
const repoCount = 50                  // Number (primitive)

// console.log(name + repoCount + " Value");
// Old-style concatenation (works, but template literals are cleaner)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Template literal → "Hello my name is hitesh and my repo count is 50"

const gameName = new String('hitesh-hc-com')
// Creates a String **object** wrapper (not a primitive).
// It behaves like a string for most purposes but typeof is "object".
// Generally you don't need `new String`; plain string literals are preferred.

// console.log(gameName[0]);
// Access by index → 'h'

// console.log(gameName.__proto__);
// Prototype object of String instances (methods like charAt, indexOf, etc.)

// console.log(gameName.length);
// Length of the string → 13

// console.log(gameName.toUpperCase());
// Returns a NEW string "HITESH-HC-COM" (original is unchanged—strings are immutable)

console.log(gameName.charAt(2));      // 't' → character at index 2 (0-based)
console.log(gameName.indexOf('t'));   // 2   → first index where 't' occurs, or -1 if not found

const newString = gameName.substring(0, 4)
console.log(newString);               // "hite"
// substring(start, end) → takes from index 0 up to (but not including) 4
// NOTE: substring does NOT accept negative indexes (they’re treated as 0)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);           // "" (empty string)
// slice(start, end) supports negatives (from the end).
// Here start = -8 → index 13 - 8 = 5; end = 4
// If start (5) > end (4), result is "" (nothing).

const newStringOne = "   hitesh    "
console.log(newStringOne);            // "   hitesh    " (with spaces)
console.log(newStringOne.trim());     // "hitesh"
// trim() removes whitespace from both ends (not the middle)

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  // "https://hitesh.com/hitesh-choudhary"
// replace(search, replaceWith) replaces the FIRST match only (string or regex).
// To replace all, use a global regex: url.replace(/%20/g, '-')

console.log(url.includes('sundar'))   // false
// includes(substr) → checks if substring exists (case-sensitive)

console.log(gameName.split('-'));     // ["hitesh", "hc", "com"]
// split(delimiter) → splits string into array using '-' as separator