// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Title of your Project: ' 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project: '
        },
        {
            type: 'checkbox',
            name: 'tableOF',
            message: 'Go to: ',
            choices: ['Installation', 'Usage', 'Licence', 'Contributing', 'Test', 'Questions']
        },
        {
            type: 'input',
            name: 'instillation',
            message: 'Enter Installation Instructions: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide Instructions and Examples for Use: '
        },
        {
            type: 'list',
            name: 'licence',
            message: 'Choice Project licence: ',
            choices: ['MIT', 'GNU General Public License v3.0', 'Microsoft Public License', 'Mozilla Public License 2.0']
        },
        {
            type: 'input',
            name: 'contrubuation',
            message: 'How can people contribute to Your Project: '
        },
        {
            type: 'input',
            name: 'test',
            message: 'Add some test for viewers to test'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github Username: '
        },
        { 
            type: 'input',
            name: 'email',
            message: 'Enter your email address: '
        }
        

    ])
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
questions();