const generateIntern = intern => {
    return`
            <div class="col-5">
                <div class="card">
                    <div class="name-role">
                        <h2>${intern.name}</h3>
                        <h4>Intern<h4>
                    </div>
                    <ul class ="card-body">
                        <li>ID: ${intern.id}</li>
                        <li>Email: <a href="mailto:${intern.email}">${intern.email}</a><li>
                        <li>School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
    `;
}

const generateEngineer = engineer => {
    return`
            <div class="col-5">
                <div class="card">
                    <div class="name-role">
                        <h2>${engineer.name}</h3>
                        <h4>Engineer<h4>
                    </div>
                    <ul class ="card-body">
                        <li>ID: ${engineer.id}</li>
                        <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a><li>
                        <li>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</li>
                    </ul>
                </div>
            </div>
    `;
}

const generateManager = manager => {
    return`
            <div class="col-5">
                <div class="card">
                    <div class="name-role">
                        <h2>${manager.name}</h3>
                        <h4>Manager<h4>
                    </div>
                    <ul class ="card-body">
                        <li>ID: ${manager.id}</li>
                        <li>Email: <a href="mailto:${manager.email}">${manager.email}</a><li>
                        <li>Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
    `;
}

const generateHTML = data => {
    teamArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        console.log(employee)
        if (role === `Intern`) {
            const internCard = generateIntern(employee);
            teamArray.push(internCard);
        } else if (role === `Engineer`) {
            const engineerCard = generateEngineer(employee);
            teamArray.push(engineerCard);
        } else if (role === `Manager`) {
            const managerCard = generateManager(employee);
            teamArray.push(managerCard);
        }
    }
    const teamCards = teamArray.join('');
    const makeTeam = htmlTemplate(teamCards);
    return makeTeam;
}

// const teamArray = [];
// teamArray.push(teamRoster
//     .filter(employee => employee.getRole() === `Intern`)
//     .map(intern => generateIntern(intern)))
//     .join(``)
// teamArray.push(teamRoster
//     .filter(employee => employee.getRole() === `Engineer`)
//     .map(engineer => generateEngineer(engineer)))
//     .join(``)
// teamArray.push(teamRoster
//     .filter(employee => employee.getRole() === `Manager`)
//     .map(manager => generateManager(manager)))
//     .join(``)

// return teamArray.join(``);
// }

const htmlTemplate = function(teamCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Daemons</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css"/>
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
        />
    </head>
    <body>
        <div class="container-fluid">
            <div>
                <div class= "justify-content-center">
                    <h1> Team Daemons </h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class= "justify-content-center col-10 row">
                ${teamCards}
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>`
}
    
module.exports = generateHTML;