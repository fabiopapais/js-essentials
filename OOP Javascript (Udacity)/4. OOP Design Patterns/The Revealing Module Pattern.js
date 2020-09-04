// The Revealing Module Pattern
/* The underlying philosophy of the Revealing Module Pattern is 
that, while we still maintain encapsulation (as in the Module
Pattern), we also reveal certain properties (and methods). */
/*
You'll need:

1. An IIFE (wrapper)
2. THe module content (variables, methods, objects, etc)
3. A returned object literal that you want to reveal
*/

let person = (function () {
    // START OF MODULES
    let privateAge = 0;
    let privateName = 'Andrew';

    function privateAgeOneYear() {
        privateAge += 1;
        console.log(`One year has passed! Current age is ${privateAge}`);
    }

    function displayName() {
        console.log(`My name is ${privateName}!`);
    }

    function ageOneYear() {
        privateAgeOneYear();
    }
    // END OF MODULES

    // THE RETURNED OBJECT LITERAL
    return {
        name: displayName,
        age: ageOneYear
    };
})(); // IIFE

console.log(person) // { name: [Function: displayName], age: [Function: ageOneYear] }


// name() method reveals the otherwise private displayName() function
person.name() // My name is Andrew!

// what happens if we try to access and mutate privateName?
person.privateName = 'Richard';

person.name() // My name is Andrew
// Pay close attention to what the "person.privateName" is actually doing: it simply
// adds a privateName property to the person object. It has no effect on the 
// privateName variable that exists inside the IIFE itself!


// Benefits of the Revealing Module Pattern
/* When writing your modules, there are a few key advantages of using the Revealing
Module Pattern. For one, there is clarity at the end of the module (i.e., the return statement)
as to which variables or methods may be accessed publicly. Modules may grow large, and this
eases readability for other developers who read your code.

Along with clear intent of public or private data, the Revealing Module Pattern lends itself to
consistent syntax as well. In contrast, the normal Module Pattern may contain variables and 
functions spread throughout the entire function body. */
