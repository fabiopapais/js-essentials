// This is a CONSTRUCTOR FUNCTION
function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
}

let developer = new SoftwareDeveloper();

let otherDeveloper = { favoriteLanguage: 'JavaScript' };

console.log(developer) // SoftwareDeveloper { favoriteLanguage: 'JavaScript' }
console.log(otherDeveloper) // { favoriteLanguage: 'JavaScript' }

// This happens because the constructor of "developer" is the function "SoftwareDeveloper",
// the "otherDeveloper", instead, used the "Object()" constructor


// You can even have multiple objects and parameters:
function SoftwareDeveloperWithParameters(name) {
    this.favoriteLanguage = 'Javascript'
    this.name = name
}

const fabio = new SoftwareDeveloperWithParameters('Fábio')
const harry = new SoftwareDeveloperWithParameters('Harry')

console.log(fabio) // SoftwareDeveloperWithParameters { favoriteLanguage: 'Javascript', name: 'Fábio' }
console.log(harry) // SoftwareDeveloperWithParameters { favoriteLanguage: 'Javascript', name: 'Harry' }




