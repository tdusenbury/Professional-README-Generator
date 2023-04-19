// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your project description.'
    },
    {
        type: 'confirm',
        name: 'installation',
        message: 'Is there an installation process?'
    },
    {
        type: 'input',
        name: 'installationSteps',
        message: 'Please explain how to install your application.',
        when: ({ confirmInstallation }) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'instructions',
        message: 'Do you have instructions to use the application?' 
    },
    {
        type: 'input',
        name: 'instructionSteps',
        message: 'Please state the instructions for how your application is used. Enter descriptive images at a later time.',
        when: ({ confirmInstructions }) => {
            if (confirmInstructions) {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'confirm',
        name: 'contributors',
        message: 'Do you want other developers to contribute to this repository?'
    },
    {
        type: 'input',
        name: 'contributorsHow',
        message: 'Explain how you want other developer to contribute to this repository?',
        when: ({ confirmContributors }) => {
            if (confirmContributors) {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'confirm',
        name: 'testing',
        message: 'Is testing available?'
    },
    {
        type: 'input',
        name: 'testingHow',
        message: 'Enter how users can test your application.',
        when: ({ confirmContributorsHow }) => {
            if (confirmContributorsHow) {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose the appropriate license for this application.',
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your gitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'How do you wish people to contact you?'
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //console.log(data)
    fs.writeFile(fileName, data, error => {
        if (error) {    
            return console.log(error);
        }               
    })
}

// TODO: Create a function to initialize app (INITIALIZE = init)
//When given the prompt, questions are asked using the inquirer toolbox. The responses to the questions are then given to the generateMarkdown function on the other file to create the actualPage of information. Then that actualPage will get written to a file, and if that file does not exist beforehand, one will be created.
function init() {
    inquirer.prompt(questions)
    .then((response) => {
    //console.log(response);
    const actualPage = generateMarkdown(response)
    //console.log(page)
    writeToFile("README.md", actualPage)
}) 
}

//questions then get responses. then we give those to the generateMarkdown. when it receives it it is called data. That data is then "actualPage" is exactly what we want written. give the "responses" to the writetofile into the "filename", "page".


// Function call to initialize app
init();