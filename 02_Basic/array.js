// Array declarations
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

// Another way to create an array
const myArr2 = new Array(1, 2, 3, 4)

// -----------------------------
// slice() vs splice()
// -----------------------------

console.log("A ", myArr)

// slice(start, end)
// - Does NOT change original array
// - Extracts elements from start to end-1
const myn1 = myArr.slice(1, 3)

console.log(myn1)        // [1, 2]
console.log("B ", myArr) // original array unchanged


// splice(start, deleteCount)
// - DOES change original array
// - Removes elements from start index
// - Returns the removed elements
const myn2 = myArr.splice(1, 3)

console.log("C ", myArr) // now modified → [0, 4, 5]
console.log(myn2)        // removed elements → [1, 2, 3]