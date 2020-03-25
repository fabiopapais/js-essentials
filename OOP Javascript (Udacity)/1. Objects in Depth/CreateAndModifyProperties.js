//Creating Objects
    // Literal Notation
    const test = {}
    console.log(typeof(test)) // OBJECT
    // Using method (more verbose, but slower)
    const test2 = new Object() 
    console.log(typeof(test2)) // OBJECT

// Adding properties
    test.color = "red"
    console.log(test.color) // RED

// Changing values
    test.color = "blue"
    // test["color"] = "blue"
    console.log(test.color) // BLUE

// Removing properties
    delete test.color
    console.log(test.color) // UNDEFINED

// Primitives are immutable
    function changeColor(v) {
        v = "blue"
    }
    let color = "red"
    changeColor(color)
    console.log(color) // RED

// Objects are mutable
    function changeNumber(o) {
        o.number = 99
    }
    let numberObject = {
        number: 15,
    }
    console.log(numberObject.number) // 15

    changeNumber(numberObject)
    console.log(numberObject.number) // 99

// Objects are referenced
    const original = {
        name: 'Fábio',
    }
    const fake = original

    fake.name = "Natália"

    console.log(original.name) // NATÁLIA
    // The two objects are literally the same, any change made in "original" will affect the "fake"