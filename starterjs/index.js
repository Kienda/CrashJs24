/*// //constructor function

// function Person(firstname, lastname, dob) {
//     // to access the value of the object we the keyword this?

//     this.firstname = firstname
//     this.lastname = lastname
//     this.dob = new Date(dob)

//     // // we can create function inside the constructor

//     // this.getBirthYear = function () { return this.dob.getFullYear(); }
//     // this.geFullName = function () { return `${this.firstName} ${this.lastName}` }



// }

// // can set prototype to the constructor properties for more readable way

// Person.prototype.getBirthYear = function () { return this.dob.getFullYear(); }
// Person.geFullName = function () { return `${this.firstName} ${this.lastName}` }

// class

class Person {
    constructor(firstname, lastname, dob) {
        //   to access the value of the object we the keyword this?
        this.firstname = firstname
        this.lastname = lastname
        this.dob = new Date(dob)

    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    geFullName() {
        return `${this.firstname} ${this.lastname}`
    }


}

// instantiate object person

const person1 = new Person('Abdoulaye', 'Diallo', '02-15-1998');
const person2 = new Person('Thierno', 'Bah', '01-01-2009');

console.log(person1.geFullName());
console.log(person2); */

//the DOM