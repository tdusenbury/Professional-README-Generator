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
        message: 'Please enter your project description here:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to the development of this application?:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter information about the testing of this application:'
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
        fs.writeFile(fileName, data, function(error) {
        return console.log(error);
    })
}

// TODO: Create a function to initialize app (INITIALIZE = init)
function init() {
    inquirer.prompt (questions)
    .then((response) => {
    //console.log(response);
    const actualPage = generateMarkdown(response)
    //console.log(page)
    writeToFile("README.md", actualPage)
}) 
}

//questions then get responses. then we give those to the generateMarkdown. when it receives it it is called data. "Page" is exactly what we want written. give the "responses" to the writetofile into the "filename", "page".


// Function call to initialize app
init();





// TODO: Create a function to write README file


// function writeToFile(fileName, data) {
//     const outPutString = `# ${data.title}

//     ## Your Task
    
//     When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 
    
//     You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.
    
//     Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README Guide](./Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain. 
    
//     The application will be invoked by using the following command:
    
//     Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.`
// }

//     fs.writeFile('fileName', outPutString, function(error) {
//     return console.log(error);
// })
