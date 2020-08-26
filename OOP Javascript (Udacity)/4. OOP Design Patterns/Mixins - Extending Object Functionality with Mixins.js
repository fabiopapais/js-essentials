//
/* If a JavaScript object can only be prototype-linked to a single object,
how can we go about extending properties and methods from multiple different
sources? A mixin allows us to just that! */

/* A mixin is a technique that takes the properties and methods from one object
and copies them over to another object. In other words: a mixin is an technique
that provides some useful functionality, but is not meant to be added to the 
prototype chain. */

// Object.assign()
// method that copies an object's own (non-inherited) properties from one
// or more source objects into a target object, then returns the updated target object.
let target = {};

let source = { number: 7 };

Object.assign(target, source);

console.log(target); // { number: 7 }

// Object.assign() can even take in multiple different source objects.
const duck = {
    hasBill: true,
}
const beaver = {
    hasTail: true,
}
const otter = {
    hasFur: true,
    feet: "webbed",
}
const platypus = Object.assign({}, duck, beaver, otter)
console.log(platypus) // { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }
// Unfortunately, platypus isn't prototype related (or linked) to any of the three objects


// Summary
/* A mixin is a technique that copies data and functionality from a source object 
(or source objects) to a target object. We can use ES6's Object.assign() to return
a target object with properties from one or more source objects "mixed into" that 
target object. */
