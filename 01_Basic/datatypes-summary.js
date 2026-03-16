//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100                // Number (integer)
const scoreValue = 100.3         // Number (float)

const isLoggedIn = false         // Boolean
const outsideTemp = null         // null (intentional empty value)
let userEmail;                   // undefined (value not assigned)

const id = Symbol('123')         // Symbol (unique value)
const anotherId = Symbol('123')  // Symbol (also unique even with same description)

console.log(id === anotherId);   // false → each Symbol is always unique

// const bigNumber = 3456543576654356754n   // BigInt (very large integer)


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // Array (object type)
let myObj = {
    name: "hitesh",              // Object with key–value pairs
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");  // Function (also an object in JS)
}

console.log(typeof anotherId);   // "symbol" → typeof Symbol gives 'symbol'

// https://262.ecma-international.org/5.1/#sec-11.4.3  (spec link for typeof operator)