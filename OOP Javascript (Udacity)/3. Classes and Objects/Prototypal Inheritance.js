/*
QUICK RECAP

Recall that each function has a prototype property, which is 
really just an object. When this function is invoked as a 
constructor using the new operator, it creates and returns 
a new object. This object is secretly linked to its constructor's 
prototype, and this secret link allows the object to access the 
prototype's properties and methods as if it were its own!

Since we know that the prototype property just points to a regular 
object, that object itself also has a secret link to its prototype. 
And that prototype object also has reference to its own prototype 
and so on. This is how the prototype chain is formed.
*/

// This constructor function works as expected
function Dalmatian(name) {
    this.name = name;

    this.bark = function () {
        console.log(`${this.name} barks!`);
    };
}

// But what if create many Dalmatians that
// don't necessarily will always bark()?

function DalmatianOptimized(name) {
    this.name = name;
}

// This solution just create the bark() function on the
// prototype (a link) of Dalmatian, making it more efficient
DalmatianOptimized.prototype.bark = function () {
    console.log(`${this.name} barks!`);
};


// Checking Objects Properties

// hasOwnProperty()
function Phone() {
    this.operatingSystem = 'Android'
}
Phone.prototype.screenSize = 6

const myPhone = new Phone()

const own = myPhone.hasOwnProperty('operatingSystem')
console.log(own) // true

const inherited = myPhone.hasOwnProperty('screenSize')
console.log(inherited) // false

// isPrototypeOf()
const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
}
function Mouse() {
    this.favoriteFood = 'cheese'
}
Mouse.prototype = rodent;

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph)
// an easy way to check if an object is in the prototype chain of another's 
console.log(result) // true

// Object.getPrototypeOf()
// is great for retrieving the prototype of a given object.
const myPrototype = Object.getPrototypeOf(ralph)

console.log(myPrototype) // { favoriteFood: 'cheese', hasTail: true }

