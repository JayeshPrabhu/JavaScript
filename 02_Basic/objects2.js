// Creating an empty object (two ways: new Object() or {})
const tinderUser = {}   

// Adding values (properties) into the object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// Nested object example
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing nested values
// regularUser.fullname.userfullname.firstname  → "hitesh"


// Creating simple objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merging objects using spread operator (...)
// This combines obj1 + obj2 into a new object
const obj3 = {...obj1, ...obj2}
// Now obj3 = {1:"a", 2:"b", 3:"a", 4:"b"}


// Array of objects (common in databases)
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// Accessing 2nd user's email
users[1].email


// Object utility methods:

// Object.keys(tinderUser) → returns only keys as array
// Object.values(tinderUser) → returns only values
// Object.entries(tinderUser) → returns key-value pairs in array form

// tinderUser.hasOwnProperty('isLoggedIn') → checks if key exists


// Object destructuring (easy way to extract values)
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Extract courseInstructor and rename it as "instructor"
const {courseInstructor: instructor} = course

console.log(instructor)  
// Output: hitesh


// Example of how JSON data looks:
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// Array of empty objects
[
    {},
    {},
    {}
]