const inquirer = require("inquirer");
const fs = require("fs");
const { inherits } = require("util");

const managerQues = [
    //Manager Questions
    {
      type: "input",
      name: "managerName",
      message: `What is the name of the team's manager?
      `,
    },

    {
      type: "input",
      name: "managerId",
      message: `What is the team manager's employee ID?
      `,
    },

    {
      type: "input",
      name: "managerEmail",
      message: `What is the team manager's Email address?
      `,
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: `What is the team manager's Office #?
      `,
    },
];


//     // Recruit Choice
//     {
//       type: "loop",
//       name: "employees",
//       message: `Which of these roles would you like to add?
//       `,
//       choices: ["Engineer", "Intern", "Finish Recruiting"],
//       loop: true
//     },
    
//     // Engineer Questions
//     {
//       type: "input",
//       name: "engineerName",
//       message: `What is the name of the engineer?
//       `,
//       when: (answers) => answers.recruit === "Engineer"
//     },
    
//     {
//       type: "input",
//       name: "engingeerId",
//       message: `What is the engineer's employee ID?
//       `,
//       when: (answers) => answers.recruit === "Engineer"
//     },

//     {
//       type: "input",
//       name: "engineerEmail",
//       message: `What is the engineer's Email address?
//       `,
//       when: (answers) => answers.recruit === "Engineer"
//     },

//     {
//       type: "input",
//       name: "engineerGithub",
//       message: `What is the engineer's GitHub ID?
//       `,
//       when: (answers) => answers.recruit === "Engineer"
//     },
// ];
function writeHtml(data) {
    const content = `<h1>${data.managerName}</h1>`;
    fs.appendFile("./src/body", content, function (err) {
        if (err) throw err;
        console.log('Saved manager info!');
    });
}

function init() {
    inquirer
        .prompt(managerQues)
        .then((response) => {
          writeHtml(response);
        })
        // .then((response) => {
        //     writeHtml(response);
        // })
}

init();