const Intern = require("../lib/Intern");

test(`Adds Intern object`, () => {
    const internInstance = new Intern(`Henry He`, 1, 'hghe95@gmail.com', `WWU`);
    expect(internInstance.school).toEqual(expect.any(String));
});

test(`Tests school`, () => {
    const internInstance = new Intern('Henry He', 1, 'hghe95@gmail.com', 'WWU');
    expect(internInstance.getSchool()).toEqual(expect.stringContaining(internInstance.school.toString()));
});

test(`Tests role`, () => {
    const internInstance = new Intern('Henry He', 1, 'hghe95@gmail.com', 'WWU');
    expect(internInstance.getRole()).toEqual(`Intern`);
});