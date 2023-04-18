// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input

const questions = [{
    type: 'input',
    name: 'title',
    message: 'ENTER QUESTION HERE? (Required)'
    validate: nameOfTheThing => {
        if (nameOfTheThing) {
            return true;
        } else {
            console.log('Please enter WHAT QUESTION YOU WANT ANSWERED')
        }
    }
},
{
    type: 'input',
    name: (SEE ABOVE)
}]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
