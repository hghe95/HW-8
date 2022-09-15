const Employee = require("./lib/Employee");

test(`Adds new Manager`, () => {
    const employeeInstance = new Engineer(`Henry He`, 1, 'hghe95@gmail.com', 7);

    expect(employeeInstance.name).toBe('Henry He');
    expect(employeeInstance.id).toEqual(expect.any(Number));
    expect(employeeInstance.email).toEqual(expect.any(String));
    expect(employeeInstance.office).toEqual(expect.any(String));
});

test(`Tests methods within the Manager class`, () => {
    const employeeInstance = new Employee('Henry He', 1, 'hghe95@gmail.com');

    expect(employeeInstance.getName()).toBe(employeeInstance.name);
    expect(employeeInstance.getID()).toBe(employeeInstance.id);
    expect(employeeInstance.getEmail()).toBe(employeeInstance.email);
    expect(employeeInstance.getOfficel()).toBe(employeeInstance.office);
    expect(employeeInstance.getRole()).toBe(`Manager`);
});