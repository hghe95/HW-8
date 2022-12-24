const generateIntern = (intern) => {
    return`
    <div class="col-5>
        <div class="card>
            <div>
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

const generateEngineer = (engineer) => {
    return`
    <div class="col-5>
        <div class="card>
            <div>
                <h2>${engineer.name}</h3>
                <h4>Intern<h4>
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

const generateManager = (manager) => {
    return`
    <div class="col-5>
        <div class="card>
            <div>
                <h2>${manager.name}</h3>
                <h4>Intern<h4>
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

const htmlTemplate = (teamCards) => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Daemons</title>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
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
                <div>
                    <h1> Team Daemons </h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div>
                ${teamCards}
            </div>
        </div>
    </body>
    </html>`
}

const generateHTML = (data) => {
    teamArray = [];
    for (let i = 0; i < data.lenght; i++) {
        const employee = data[i];
        const role = employee.getRole();

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

    const teamCards = teamArray.join(``);
    const makeTeam = htmlTemplate(teamCards);
    return makeTeam;
}

module.exports = generateHTML;