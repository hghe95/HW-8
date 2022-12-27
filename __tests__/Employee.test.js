const Employee = require("../lib/Employee");

test(`Adds Employee object`, () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toEqual('object');
});

test.todo(`Tests name`), () => {
    const name = 'Henry'
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toEqual(name);
}

test.todo(`Tests id`), () => {
    const id = 1
    const employeeInstance = new Employee('Henry', id);
    expect(employeeInstance.id).toEqual(id);
}

test.todo(`Tests email`), () => {
    const email = 'hghe95@gmail.com'
    const employeeInstance = new Employee('Henry', 1, email);
    expect(employeeInstance.email).toEqual(email);
}

test(`Tests function to get name`, () => {
    const employeeInstance = new Employee('Henry He', 1, 'hghe95@gmail.com');
    expect(employeeInstance.getName()).toEqual(employeeInstance.name);
});

test(`Tests function to get id`, () => {
    const employeeInstance = new Employee('Henry He', 1, 'hghe95@gmail.com');
    expect(employeeInstance.getID()).toEqual(employeeInstance.id);
});

test(`Tests function to get email`, () => {
    const employeeInstance = new Employee('Henry He', 1, 'hghe95@gmail.com');
    expect(employeeInstance.getEmail()).toEqual(employeeInstance.email);
});

test(`Tests function to get role`, () => {
    const employeeInstance = new Employee('Henry He', 1, 'hghe95@gmail.com');
    expect(employeeInstance.getRole()).toEqual(`Employee`);
});