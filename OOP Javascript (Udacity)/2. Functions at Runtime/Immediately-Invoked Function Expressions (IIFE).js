let iifeTest = (function () {
    let count = 0

    return function () {
        count += 1
        console.log(count)
    };
}()) // You're actually calling the function after declaring it
// Also, IIFE maintain a private, mutable state that cannot be accessed outside the function! (private scope)

iifeTest() // 1
iifeTest() // 2
iifeTest() // 3
iifeTest() // 4
iifeTest() // 5

// An immediately-invoked function expression (IIFE) is a function 
// that is called immediately after it is defined. Utilizing an IIFE 
// alongside closures allows for a private scope, which maintains 
// privacy for variables defined within them. And since less variables 
// are created, an IIFE will help to minimize pollution of the global 
// environment, hindering the chances of variable name collisions.
