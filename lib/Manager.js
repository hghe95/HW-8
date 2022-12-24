const Employee = require('./lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getRole() {
        return `Manager`
    }
    getOffice() {
        return this.officeNumber
    }
}

module.exports = Manager;