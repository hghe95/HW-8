const Employee = require("./lib/Employee");

test(`Adds new Engineer`, () => {
    const employeeInstance = new Engineer(`Henry He`, 1, 'hghe95@gmail.com', `hghe95`);

    expect(employeeInstance.name).toBe('Henry He');
    expect(employeeInstance.id).toEqual(expect.any(Number));
    expect(employeeInstance.email).toEqual(expect.any(String));
    expect(employeeInstance.github).toEqual(expect.any(String));
});

test(`Tests methods within the Engineer class`, () => {
    const employeeInstance = new Employee('Henry He', 1, 'hghe95@gmail.com', 'hghe95');

    expect(employeeInstance.getName()).toBe(employeeInstance.name);
    expect(employeeInstance.getID()).toBe(employeeInstance.id);
    expect(employeeInstance.getEmail()).toBe(employeeInstance.email);
    expect(employeeInstance.getGithub()).toBe(employeeInstance.github);
    expect(employeeInstance.getRole()).toBe(`Engineer`);
});