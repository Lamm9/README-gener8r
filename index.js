const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'project',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'If this project requires installation, how can it be installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this project intended to be used?'
    },
    {
        type: 'input',
        name: 'credits',
        message: "Who are this project's contributors?"
    }
]).then((data) => {
    console.log(data);
    JSON.stringify(data);

    const user = data.username;
    const project = data.project;
    const desc = data.description;
    const install = data.install;
    const usage = data.usage;
    const credits = data.credits;
    const fileName = `${project}-README.md`;

    const template = `# ${project}

## Decription

${desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${install}

## Usage

${usage}

## Credits
    
${credits}

## License

Please refer to license in repository.`

    console.log(`Thanks ${user}!`);

    fs.writeFile(fileName, template, (err) => {
        err ? console.log(err) : console.log('Success! Your README file has been generated!');
    })
})