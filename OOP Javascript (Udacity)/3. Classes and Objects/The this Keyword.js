// Depending on how a function is invoked, the value of this is set to a different value.

// At this point, we've seen this in many different contexts, such as within a 
// method, or referenced by a constructor function. Let's now organize our thoughts 
// and bring it all together!

// There are four ways to call functions, and each way sets this differently.


// 1. Calling a constructor function with the new keyword sets this to a newly-created object.
function Cat(name) {
    this.name = name;
    this.sayName = function () {
        console.log(`Meow! My name is ${this.name}`);
    };
}
// when invoking a constructor function with the new operator, 
//this gets set to the newly-created object! 
const bailey = new Cat('Bailey');

// 2. Calling a function that belongs to an object (i.e., a method) sets this to the object itself.
const dog = {
    bark: function () {
        console.log('Woof!')
    },
    barkTwice: function () {
        this.bark(); // Here, this refers to the object itself
        this.bark();
    }
}
dog.barkTwice() // Woof! Woof!

// 3.  calling a function on its own (i.e., simply invoking a regular function) will set this 
//to window, which is the global object if the host environment is the browser
function regularFunction() {
    return 
}
console.log(regularFunction()) // In the browser, it is the Window Object 


