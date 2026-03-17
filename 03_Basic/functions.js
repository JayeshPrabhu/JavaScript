// A simple function that prints letters
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()   // calling the function


// Function that adds two numbers and returns the result
function addTwoNumbers(number1, number2){

    // return sends the final answer back to where the function was called
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);   // prints 8


// Function with a default parameter
function loginUserMessage(username = "sam"){

    // if username is missing or empty
    if(!username){
        console.log("Please enter a username");
        return
    }

    // return a message using template literals
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())  // uses default value "sam"


