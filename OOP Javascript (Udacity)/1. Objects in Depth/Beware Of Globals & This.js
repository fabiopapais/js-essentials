const chameleon = {
    eyes: 2,
    lookAround: function () {
        console.log(`I see you with my ${this.eyes} eyes!`)
    }
}
// "this" it's used to refer the object that the function is in

chameleon.lookAround();

function whoThis() {
    this.trickyish = true
    this.test = false
    console.log(this)
}
whoThis()

// "this" refers (in the browser) to the "window" global object
// that stores location, url, scroll, etc

// AMAZING
    // GLOBAL variables (or functions) ARE properties on "window"
    var test = "hehe"
    console.log(window.test === test) // true

    // LOCAL variables (or functions) ARE NOT properties in "window"
    let hehe = "test"
    console.log(window.hehe === hehe) // false

// Counterintuitively, though, global variables and functions are not ideal. 
// There are actually a number of reasons why, but the two we'll look at are:
    // - Tight coupling
    // - Name collisions

