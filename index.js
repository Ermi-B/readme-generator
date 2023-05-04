const fs = require("fs");
const inquirer = require("inquirer");
//badges URL
const apache = "https://img.shields.io/badge/license-Apache-blue";
const mit = "https://img.shields.io/badge/license-MIT-green";
const gpl = "https://img.shields.io/badge/license-GPL-blue";
const bsd = "https://img.shields.io/badge/license-BSD-green";
let badge = ""; //empty string that eventually will store selected badge

//writes a readme file to file system
function writeFile(varName) {
  fs.writeFile("README.md", varName, (err) =>
    err ? console.error(err) : console.log("SUCCESS! Readme file created.")
  );
}

const questions = inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "Enter title of your project: ",
    },
    {
      name: "description",
      type: "input",
      message: "Enter a brief description about your project: ",
    },
    {
      name: "installation",
      type: "input",
      message: "Installation: ",
    },
    {
      name: "usage",
      type: "input",
      message: "Usage Information: ",
    },
    {
      name: "license",
      type: "list",
      message: "License: ",
      choices: ["MIT", "Apache", "GPL", "BSD"],
    },
    {
      name: "contribution",
      type: "input",
      message: "Contribution Guidelines: ",
    },
    {
      name: "tests",
      type: "input",
      message: "Test Instructions ",
    },
    {
      name: "github",
      type: "input",
      message: "Enter your Github URL: ",
    },
    {
      name: "email",
      type: "input",
      message: "Enter your email: ",
    },
  ])
  .then(
    ({
      title,
      description,
      installation,
      usage,
      license,
      contribution,
      tests,
      github,
      email,
    }) => {
      switch (license) {
        case "MIT":
          license = "MIT License";
          badge += mit;
          break;
        case "Apache":
          license = "Apache License";
          badge += "https://img.shields.io/badge/license-Apache-blue";
          break;
        case "GPL":
          license = "GPL License";
          badge += gpl;
          break;
        case "BSD":
          license = "BSD License";
          badge += bsd;
          break;
      }

      const readme = `
![license badge](${badge})

# ${title}
## Description
- ${description} 

## Usage
- ${usage}

## License
- ${license}

## Contributing
- ${contribution}

## Tests
- ${tests}

## Questions
- ${github}
- ${email}
    `;

      writeFile(readme);
    }
  );
