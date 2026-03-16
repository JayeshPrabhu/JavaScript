// Dates

// Create a new Date object representing the current date & time
let myDate = new Date()
// console.log(myDate.toString());        // Full date + time in readable form
// console.log(myDate.toDateString());    // Only date in readable form
// console.log(myDate.toLocaleString());  // Date + time formatted based on locale
// console.log(typeof myDate);            // "object" (Date is an object in JS)


// Different ways to create specific dates:

// let myCreatedDate = new Date(2023, 0, 23)  
// Month is 0-based (0 = January). This means 23 Jan 2023.

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// Year, Month, Day, Hour, Minute

// let myCreatedDate = new Date("2023-01-14")
// ISO format (yyyy-mm-dd) → safest for Date parsing

let myCreatedDate = new Date("01-14-2023")
// mm-dd-yyyy → works but depends on system/browser locale
// console.log(myCreatedDate.toLocaleString());  // Convert to readable format


// Get current timestamp in milliseconds since Jan 1, 1970 (Unix epoch)
let myTimeStamp = Date.now()

// console.log(myTimeStamp);                 // Current timestamp in ms
// console.log(myCreatedDate.getTime());     // Timestamp for the created date
// console.log(Math.floor(Date.now()/1000)); // Convert ms to seconds


// Create a fresh Date object representing now
let newDate = new Date()

console.log(newDate);              // Full date object with current date/time
console.log(newDate.getMonth() + 1); 
// getMonth() gives 0–11 → add 1 to show human-friendly month (1–12)

console.log(newDate.getDay());     
// getDay() returns 0–6 (0=Sunday, 1=Monday, ...)


// Example: formatting using toLocaleString()
// This returns a formatted date with custom settings (weekday name here)
newDate.toLocaleString('default', {
    weekday: "long",  // Returns "Monday", "Tuesday", etc.
})