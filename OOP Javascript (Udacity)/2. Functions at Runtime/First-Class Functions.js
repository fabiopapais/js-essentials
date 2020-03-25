// STORE IN VARIABLES
const myFunction = function (n1, n2) {
    return n1 * n2
}

myFunction(2, 4) // 8


// WORK LIKE AN OBJECT
function average(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

average.length; // 3

average.name; // average


// BE RETURNED FROM ANOTHER FUNCTION (higher-order function)
    function heyThenHeyAgain() {
        console.log('HEY1!')

        return function () {
            console.log('HEY2!')
        }
    }
    // It happens because anything inside the "heyThenHeyAgain" function is calling the anonymous function
    // We can solve that by storing the function "heyThenHeyAgain" inside a variable, that will store what is returned from it

    const innerFunction = heyThenHeyAgain()
    innerFunction() // HEY1! and HEY2!

    heyThenHeyAgain()() // HEY1! and HEY2!
    // Note the two parentheses "()()", that calls the "heyThenHeyAgain" and then the anonymous function



/*  <--------------------SUMMARY----------------------->
+ Functions are First-Class Functions

    In JavaScript, functions are first-class functions. This means that you can do with a function 
    just about anything that you can do with other elements, such as numbers, strings, objects, arrays, etc. 
    JavaScript functions can:

        - Be stored in variables
        - Be returned from a function
        - Be passed as arguments into another function
*/

