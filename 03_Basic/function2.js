// Using rest operator (...num1)
// val1 and val2 receive first two values
// ...num1 collects remaining values into an array
function calculateCartPrice(val1, val2, ...num1){
    return num1   // returns the rest values as array
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// Output → [500, 2000]


// Object to test function with objects
const user = {
    username: "hitesh",
    prices: 199
}

// Function that accepts ANY object and prints its values
function handleObject(anyobject){
    // accessing object properties
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   // passing object
handleObject({
    username: "sam",
    price: 399
})    // passing object directly without storing


// Array example
const myNewArray = [200, 400, 100, 600]

// Function that returns 2nd value from array
function returnSecondValue(getArray){
    return getArray[1]   // arrays start from index 0
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
// Output → 400