const Manager = require("../lib/Manager");

test(`Adds Manager object`, () => {
    const managerInstance = new Manager(`Henry He`, 1, 'hghe95@gmail.com', 1);
    expect(managerInstance.officeNumber).toEqual(expect.any(Number));
});

test(`Tests office number`, () => {
    const managerInstance = new Manager('Henry He', 1, 'hghe95@gmail.com', 1);
    expect(managerInstance.getOffice()).toEqual(managerInstance.officeNumber);
});

test(`Tests role`, () => {
    const managerInstance = new Manager('Henry He', 1, 'hghe95@gmail.com', 1);
    expect(managerInstance.getRole()).toEqual(`Manager`);
});