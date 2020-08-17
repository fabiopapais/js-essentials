// We've seen various ways to invoke functions, each with their own implications regarding the value of this. 
// There are yet two more ways to invoke a function: either using the call() or the apply() methods.


// call()
function multiply(n1, n2) {
    return n1 * n2
}
console.log(multiply(2, 3)) // 6
//  We first pass into it a single value to set as the value of this; 
// then we pass in any of the receiving function's arguments
console.log(multiply.call(globalThis || globalThis, 2, 3)) // the this here alters if you are in the browser or not

// An example where call() shines:
const cat = {
    name: 'Garfield',
    meow: function () {
        console.log(`My name is ${this.name}`)
    }
}
cat.meow() // My name is Garfield

const meowth = {
    name: 'Meowth'
}
cat.meow.call(meowth) // My name is Meowth
//^^^^^^^^^^^^^^^^^^


// apply()
// Just like call(), the apply() method is called on a function to 
// associate a specific value of this, but with an ARRAY
console.log(multiply.apply(globalThis || window, [3, 4])) // 12


// bind()
// it returns a new function that, when called, has this set to the value we give it
const dog = {
    age: 5,
    incrementAge: function () {
        return this.age += 1
    }
}
function invokeTwice(func) {
    func()
    func()
}

invokeTwice(dog.incrementAge)
console.log(dog.age) // 5 Yeah, it's broken

const myReturnedFunctionFromBind = dog.incrementAge.bind(dog)
invokeTwice(myReturnedFunctionFromBind)
console.log(dog.age) // 7


// SUMMARY 
// JavaScript provides three methods that allow us to set the value of this for a given function:

// call() invokes the function and has arguments passed in individually, separated by commas.
// apply() is similar to call(); it invokes the function just the same, but arguments are passed in as an array.
// bind() returns a new function with this bound to a specific object, allowing us to call it as a regular function