const Employee = require("../lib/Intern");

test(`Adds new Intern`, () => {
    const employeeInstance = new Intern(`Henry He`, 1, 'Western Washington University',);

    expect(employeeInstance.name).toBe('Henry He');
    expect(employeeInstance.id).toEqual(expect.any(Number));
    expect(employeeInstance.email).toEqual(expect.any(String));
    expect(employeeInstance.school).toEqual(expect.any(String));
});

test(`Tests methods within the Intern class`, () => {
    const employeeInstance = new Employee('Henry He', 1, 'Western Washington University');

    expect(employeeInstance.getName()).toBe(employeeInstance.name);
    expect(employeeInstance.getID()).toBe(employeeInstance.id);
    expect(employeeInstance.getEmail()).toBe(employeeInstance.email);
    expect(employeeInstance.getSchool()).toBe(employeeInstance.school);
    expect(employeeInstance.getRole()).toBe(`Intern`);
});