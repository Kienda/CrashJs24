//constructor function

function Person(firstname, lastname, dob) {
    // to access the value of the object we the keyword this?

    this.firstname = firstname
    this.lastname = lastname
    this.dob = new Date(dob)

    // we can create function inside the constructor

    this.getBirthYear = function () { return this.dob.getFullYear(); }
    this.geFullName = function () { return `${this.firstName} ${this.lastName}` }



}

// can set prototype to the constructor properties for more readable way 

Person.prototype.getBirthYear = function () { return this.dob.getFullYear(); }
Person.geFullName = function () { return `${this.firstName} ${this.lastName}` }