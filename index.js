const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");


let team = [];

let addIntern = () => {
    inquirer.prompt([
    {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name."
    },
    {
        type: "input",
        name: "internID",
        message: "Please enter the intern's employee ID."
    },
    {
        type: "input",
        name: "internEmail",
        message: "Please enter the intern's email address."
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the intern's school."
    }
    ]).then(answers => {
        const internInfo = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school);
        team.push(internInfo);
    })
}

let addEngineer = () => {
    inquirer.prompt([
    {
        type: "input",
        name: "engineerName",
        message: "Please enter the engineer's name."
    },
    {
        type: "input",
        name: "engineerID",
        message: "Please enter the engineer's employee ID."
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the engineer's email address."
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the engineer's github username."
    }
    ]).then(answers => {
        const engineerInfo = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.github);
        team.push(engineerInfo);
    })
}

let addManager = () => {
    inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please enter the manager's name."
    },
    {
        type: "input",
        name: "managerID",
        message: "Please enter the manager's employee ID."
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the manager's email address."
    },
    {
        type: "input",
        name: "office",
        message: "Please enter the manager's office number."
    }
    ]).then(answers => {
        const managerInfo = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.office);
        team.push(managerInfo);
    })
}

const init = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Please add an employee to this team',
            choices: ["Intern", "Engineer", "Manager"]
        }
    ]).then(function (userInput) {
        switch(userInput.addMember){
            case "Intern":
                addIntern();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Manager":
                addManager();
                break;
            default:
                html();
        }
    })
}

const html = () => {
    fs.writeFileSync()
}

init();
