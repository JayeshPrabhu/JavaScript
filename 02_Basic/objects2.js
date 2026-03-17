// ------------------------------------------------------
//  SINGLETON OBJECT
// ------------------------------------------------------
// Object.create() creates an object using another object as its prototype.
// When using object literals ({}), JavaScript does NOT create a singleton.
// Not used here, but mentioned as a concept.
// Object.create is used for prototype-based inheritance.


// ------------------------------------------------------
//  OBJECT LITERALS
// ------------------------------------------------------

// Creating a Symbol to use as a unique key inside an object
const mySym = Symbol("key1")
// Symbols are unique and cannot be accessed accidentally.
// This helps prevent naming collisions in objects.


const JsUser = {
    name: "Hitesh",                     // normal key-value
    "full name": "Hitesh Choudhary",    // key with spaces → must be accessed using bracket notation
    
    // Using a Symbol as a key → must be written inside []
    [mySym]: "mykey1",

    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// ------------------------------------------------------
//  ACCESSING OBJECT PROPERTIES
// ------------------------------------------------------

// console.log(JsUser.email)
// Dot notation → only works for keys without spaces or special characters

// console.log(JsUser["email"])
// Bracket notation → works for all keys (including computed keys)

// console.log(JsUser["full name"])
// Required because the key contains a space

// console.log(JsUser[mySym])
// Accessing Symbol-keyed property


// ------------------------------------------------------
//  MODIFYING PROPERTIES
// ------------------------------------------------------

JsUser.email = "hitesh@chatgpt.com"   // modifying email normally

// Object.freeze(JsUser)
// freeze() makes the object IMMUTABLE → no changes allowed after this

JsUser.email = "hitesh@microsoft.com"   // This change will NOT happen if freeze() is active
// console.log(JsUser);



// ------------------------------------------------------
//  ADDING METHODS TO OBJECTS
// ------------------------------------------------------

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// This adds a function as a new key to the object
// It can be accessed like: JsUser.greeting()


JsUser.greetingTwo = function(){
    // 'this' refers to the current object (JsUser)
    console.log(`Hello JS user, ${this.name}`);
}
// Uses template literals + 'this' to access object properties


// ------------------------------------------------------
//  CALLING THE METHODS
// ------------------------------------------------------

console.log(JsUser.greeting());
// First it prints: Hello JS user
// Then returns undefined because console.log() prints the return value of the function
// greeting() does not return anything → undefined

console.log(JsUser.greetingTwo());
// First prints: Hello JS user, Hitesh
// Then logs undefined (same reason as above)
