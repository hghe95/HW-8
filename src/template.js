const generateIntern = (intern) => {
    return
    `
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
    `
}

const generateEngineer = (engineer) => {
    return
    `
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
    `
}

const generateManager = (manager) => {
    return
    `
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
    `
}

const htmlTemplate = (data) => {
    return
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    
    </body>
    </html>`
}

const generateHTML = (data) => {
    teamArray = [];
    
}

module.exports = generateHTML;