// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const readGenerate = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the Title of your Project: ' 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project: '
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
    .then(readData =>{
        return readData
    }
    )
    
};
// TODO: Create a function to write README file
function writeFile(data) {
    return new Promise((resolve, reject)=> {
        fs.writeFile('README.md', data, err => {
            if (err) {
                reject (err)
                return;
            }
            resolve ({
                ok: true,
                message: 'README.md has been created'
            }) 
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(readData => {
            console.log(readData)
           return readGenerate(readData)
        })
        .then(madeRead => {
            return writeFile(madeRead)
        })
}  


// Function call to initialize app
init();

    