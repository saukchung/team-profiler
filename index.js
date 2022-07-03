const { prompt } = require("inquirer");
const fs = require("fs");
const setupHtml = require("./src/templateMaker.js");
const positions = {manager: [], engineer: [], intern: []};
const { questions, Manager, Engineer, Intern } = require("./lib");

const generateCard = (employees) => {
  let cards = "";
  for (employee of employees.manager) {
    cards += `
<div class="manager">
    <h4>${employee.name}</h4>
    <h5>Manager</h5>
    <p>ID: ${employee.id}</p>
    <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
    <p>Office Number: ${employee.officeNumber}</p>
</div>`
  };
  for (employee of employees.engineer) {
    cards += `
<div class="engineer">
    <h4>${employee.name}</h4>
    <h5>Engineer</h5>
    <p>ID: ${employee.id}</p>
    <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
    <p>GitHub: <a href="https://github.com/${employee.github}">${employee.name}'s GitHub</a></p>
</div>`
  };
  for (employee of employees.intern) {
    cards += `
<div class="intern">
    <h4>${employee.name}</h4>
    <h5>Intern</h5>
    <p>ID: ${employee.id}</p>
    <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
    <p>Associated School: ${employee.school}</p>
</div>
`
  };
  return cards
};


function generateHtml(employeeList) {
  const cardsHtml = generateCard(employeeList);
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team profile</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>TEAM PROFILE</header>
    <main>
    ${cardsHtml}
    </main>
</body>
</html>
  `
} 

const init = async () => {
  const ans = await prompt(questions);
  if (!ans.newEmployee) return fs.writeFile("./dist/index.html", generateHtml(positions), () => {});
  if (ans.role === "Manager") positions.manager.push(new Manager(ans.employeeName, ans.employeeId, ans.employeeEmail, ans.managerOfficeNumber));
  if (ans.role === "Intern") positions.intern.push(new Intern(ans.employeeName, ans.employeeId, ans.employeeEmail, ans.internSchool));
  if (ans.role === "Engineer") positions.engineer.push(new Engineer(ans.employeeName, ans.employeeId, ans.employeeEmail, ans.engineerGithub));
  init();
};


init();