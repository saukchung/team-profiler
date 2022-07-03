const managerQues = [
    //Manager Questions
    {
      type: "confirm",
      name: "newEmployee",
      message: `Would you like to add an employee?
      `
    },
    {
      type: "list",
      name: "role",
      when: ({newEmployee}) => newEmployee,
      choices: ["Manager","Engineer","Intern"],
      message: `What position would you like to fill?
      `,
    },
    {
      type: "input",
      name: "employeeName",
      when: ({newEmployee}) => newEmployee,
      message: `What is the name of the employee?
      `,
    },
    
    {
      type: "input",
      name: "employeeId",
      when: ({newEmployee}) => newEmployee,
      message: `What is the employee's ID?
      `,
    },
    
    {
      type: "input",
      name: "employeeEmail",
      when: ({newEmployee}) => newEmployee,
      message: `What is the employee's Email address?
      `,
    },
    
    {
      type: "input",
      name: "managerOfficeNumber",
      when: ({role}) => role === "Manager",
      message: `What is the team manager's Office #?
      `,
    },

    {
      type: "input",
      name: "internSchool",
      when: ({role}) => role === "Intern",
      message: `What is the intern's associated school?
      `,
    },
    {
      type: "input",
      name: "engineerGithub",
      when: ({role}) => role === "Engineer",
      message: `What is the engineer's GitHub User Name?
      `,
    },
];

module.exports = managerQues;