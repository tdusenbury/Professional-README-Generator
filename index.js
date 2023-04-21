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
        type: 'input',
        name: 'installation',
        message: 'Please explain how to install your application.'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please state the instructions for how your application is used. Enter descriptive images at a later time.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Explain how you want other developers to contribute to this repository.'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter how users can test your application.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the appropriate license for this application.',
        choices: ['Apache','Eclipse', 'ISC', 'MIT', 'Mozilla', 'None']
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
    writeToFile("READMEtest.md", actualPage)
}) 
}

//questions then get responses. then we give those to the generateMarkdown. when it receives it it is called data. That data is then "actualPage" is exactly what we want written. give the "responses" to the writetofile into the "filename", "page".


// Function call to initialize app
init();