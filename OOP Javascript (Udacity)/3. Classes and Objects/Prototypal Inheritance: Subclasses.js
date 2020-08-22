/*
One of the benefits of implementing inheritance is that it allows 
you to reuse existing code. By establishing inheritance, we can 
subclass, that is, have a "child" object take on most or all of a 
"parent" object's properties while retaining unique properties of 
its own.
*/

const bear = {
    claws: true,
    diet: 'carnivore'
}

function PolarBear() {
    // ...
}

PolarBear.prototype = bear

const snowball = new PolarBear()

snowball.color = 'white'
snowball.favoriteDrink = 'cola'

// __proto__ is a property of all objects (i.e., instances) made by a 
// constructor function, and points directly to that constructor's prototype object.
console.log(snowball.__proto__ === bear) // true
// DO NOT use __proto__ in any code that you write


// Object.create() 
/* takes in a single object as an argument, and returns a new object with its 
   __proto__ property set to what argument is passed into it. */
function parent_Animal(name) {
    this.name = name
}

// Setting the function "walk" only in the prototype (see Prototypal Inheritance.js)
parent_Animal.prototype.walk = function () {
    console.log(this.name + ' walks!')
}

function child_Cat(name) {
    parent_Animal.call(this, name) // calling the function parent_Animal with our "this" (see Setting Our This.js)
    this.lives = 9
}

child_Cat.prototype = Object.create(parent_Animal.prototype)
// copying the prototype of parent_Animal on the protoype od child_Cat

child_Cat.prototype.constructor = child_Cat
// The last operation, copied the constructor of parent_Animal as well,
// so let just redefine our constructor 

child_Cat.prototype.meow = function () {
    console.log("Meow")
}

const garfield = new child_Cat('garfield')
garfield.meow()
garfield.walk()
console.log(garfield.name)