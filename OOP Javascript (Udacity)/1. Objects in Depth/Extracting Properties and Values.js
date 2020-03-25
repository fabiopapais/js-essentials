const dictionary = {
    car: 'automobile',
    apple: 'healthy snack',
    cat: 'cute furry animal',
    dog: 'best friend'
};

// Object.keys() 
Object.keys(dictionary) // [ 'car', 'apple', 'cat', 'dog' ]
    // it gives an array of the *properties* of an object

// Object.values() (New method, may not be supported on all browsers)
Object.values(dictionary) // [ 'automobile', 'healthy snack', 'cute furry animal', 'best friend' ]
    // again, this method returns an array of the *values* of an object

// PRETTY USEFUL!



// <---------------------SANDBOX---------------------->

const test = {
    test1: {
        test11: "test11",
        test12: "test12"
    },
    test2: {
        test22: "test22",
        test23: "test23"
    },
    test3: {
        test33: "test33",
        test34: "test34"
    }
}

console.log(Object.values(Object.values(test)))
    // { test11: 'test11', test12: 'test12' }, { test22: 'test22', test23: 'test23' }, { test33: 'test33', test34: 'test34' }
    // ???

for (let element in Object.values(test)) { // [ '0' ] [ '1' ] [ '2' ] ???
    console.log(Object.values(element))
}