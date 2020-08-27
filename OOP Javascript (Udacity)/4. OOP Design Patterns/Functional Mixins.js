// Factory Functions
/* A factory function is a function that returns an object,
but isn't itself a class or constructor. As such, we invoke
a factory function as a normal function without using the
new operator. */
function Basketball(color) {
    return {
        color: color,
        numDots: 35000
    }
}
const orangeBasketball = Basketball('orange')

console.log(orangeBasketball) // { color: 'orange', numDots: 35000 }


// Functional Mixin
/* A functional mixin is a composable factory function that 
receives a _mixin_as an argument, copies properties and 
methods from that mixin, and returns a new object. */
function CoffeeMaker(object) {
    let needsRefill = false;

    return Object.assign({}, object, {
        pourAll: function () {
            needsRefill = true;
        },
        isEmpty: function () {
            return needsRefill;
        }
    });
}
const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator' });
console.log(mixedCoffeeMaker)
