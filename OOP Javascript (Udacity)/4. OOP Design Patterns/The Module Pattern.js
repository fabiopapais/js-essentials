// Quick recap: we can use scope and closures to create a private state
function counter() {
    let count = 0

    return function () {
        count++
        return count
    }
}

let myCounter = counter()
console.log(myCounter()) // 1
console.log(myCounter()) // 2 


// The Module Pattern
let diana = (function () {
    let secretIdentity = 'Diana Prince'

    return {
        introduce: function () {
            console.log(`Hi! I am ${secretIdentity}`)
        }
    }
})()
// Recall that one of the key ingredients here is the IIFE! Not only does
// it prevent pollution of the global scope (which hinders the chance of
// variable name collisions) -- the IIFE helps prevent access to the 
// secretIdentity variable.

console.log(diana.secretIdentity) // undefined 

/*
Summary
Since JavaScript doesn't have private variables, properties, or methods 
built-in, we can leverage the Module Pattern to enforce such privacy. At
its core, the Module Pattern leverages scope, closures, and (commonly) 
IIFE's to not only hide data from external access, but to also provide a 
public interface for such data.
*/