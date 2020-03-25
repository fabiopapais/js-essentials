// CALLBACK FUNCTIONS   
    // A function that *is passed as an argument into another function* is called a callback function.

    function callAndAdd(n, callbackFunction) {
        return n + callbackFunction()
    }

    function returnsThree() {
        return 3
    }

    console.log(callAndAdd(2, returnsThree)) // 5


// ARRAY METHODS
    // .forEach() uses the concept of callback functions
        let number = [1, 4, 5, 6, 6, 8, 3, 17]
        number.forEach(function (n) {
            if (n % 2 !== 0) {
                console.log(n)
            }
        }) // 1, 5, 3, 17
    
    
    // map() uses the concept of callback functions
        // map() returns a new array based on what's returned 
        // from the callback function   

        const names = ['David', 'Richard', 'Veronika']

        const nameLengths = names.map(function(name) {
        return name.length
        })
        console.log(nameLengths)

        // <------------------EXERCISE------------------>
            /* Using map()
            *
            * Using the musicData array and map():
            *   - Return a string for each item in the array in the following format:
            *     <album-name> by <artist> sold <sales> copies
            *   - Store the returned data in a new albumSalesStrings variable
            *
            * Note:
            *   - Do not delete the musicData variable
            *   - Do not alter any of the musicData content
            *   - Do not format the sales number; leave it as a long string of digits
            */

            const musicData = [
                { artist: 'Adele', name: '25', sales: 1731000 },
                { artist: 'Drake', name: 'Views', sales: 1608000 },
                { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
                { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
                { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
                { artist: 'Original Broadway Cast Recording', 
                name: 'Hamilton: An American Musical', sales: 820000 },
                { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
                { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
                { artist: 'Rihanna', name: 'Anti', sales: 603000 },
                { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
            ]
            // ANSWER
            const albumSalesStrings = musicData.map( (object) => {
                let album = object.name
                let artist = object.artist
                let sales = object.sales
                return `${album} by ${artist} sold ${sales} copies`
            })

            console.log(albumSalesStrings)
        // <------------------EXERCISE------------------>

    // .filter() uses the concept of callback functions
            
        const names = ['David', 'Richard', 'Veronika'];

        const shortNames = names.filter(function(name) {
            return name.length < 6;
        });

        console.log(shortNames, names)

        // <------------------EXERCISE------------------>
            /* Using filter()
            *
            * Using the musicData array and filter():
            *   - Return only album objects where the album's name is
            *     10 characters long, 25 characters long, or anywhere in between
            *   - Store the returned data in a new `results` variable
            *                * Note:
            *   - Do not delete the musicData variable
            *   - Do not alter any of the musicData content
            */

            const musicData = [
                { artist: 'Adele', name: '25', sales: 1731000 },
                { artist: 'Drake', name: 'Views', sales: 1608000 },
                { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
                { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
                { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
                { artist: 'Original Broadway Cast Recording', 
                name: 'Hamilton: An American Musical', sales: 820000 },
                { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
                    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
                { artist: 'Rihanna', name: 'Anti', sales: 603000 },
                { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
            ];

            const results = musicData.filter( (object) => {
                if (object.name.length >= 10 || object.name.length <= 25) {
                    return object
                }
            });

            console.log(results);
        // <------------------EXERCISE------------------>


/*  <--------------------SUMMARY----------------------->
JavaScript functions can take in a variety of different arguments, including strings, 
numbers, arrays, and objects. Since functions are first-class functions, functions can also be passed as 
arguments to a given function. Functions that take in other functions as arguments are called higher-order functions. 
Functions that are passed as arguments to other functions are called callback functions.

Callbacks allow you to pass functions without needing to name them (i.e., anonymous functions), which leads to less 
variables floating around. They also allow you to delegate calling functions to other functions. Array methods, such 
as forEach(), map(), and filter(), take advantage of callbacks to execute functions onto a given array's elements. 
Feel free to check out the list of other array methods listed below.
*/