const Engineer = require("../lib/Engineer");

test(`Adds Engineer object`, () => {
    const engineerInstance = new Engineer(`Henry He`, 1, 'hghe95@gmail.com', `hghe95`);
    expect(engineerInstance.github).toEqual(expect.any(String));
});

test(`Tests github`, () => {
    const engineerInstance = new Engineer('Henry He', 1, 'hghe95@gmail.com', 'hghe95');
    expect(engineerInstance.getGithub()).toEqual(expect.stringContaining(engineerInstance.github.toString()));
});

test(`Tests role`, () => {
    const engineerInstance = new Engineer('Henry He', 1, 'hghe95@gmail.com', 'hghe95');
    expect(engineerInstance.getRole()).toEqual(`Engineer`);
});