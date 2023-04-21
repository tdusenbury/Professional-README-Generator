// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) { 
  if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  else if (license === "Eclipse") {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg`
  }
  else if (license === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg`
  }
  else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg`;
  } 
  else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None') {
    return `[License](#license)`
  } else {
    return ""
  }
 }

 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return `## License
    This application has the ${license} License.`
  } else {
    return ""
  }
}

// ${renderLicenseLink(license)}

// TODO: Create a function to generate markdown for README
//This is the 

function generateMarkdown(data) {
  return `
  # ${data.title}


  ${renderLicenseBadge(data.license)}
  

  ##Table of Contents

  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contribution](#contribution)
  [Test](#test)
  [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.instructions}

  ## Contributions
  ${data.contributors}

  ## Testing
  ${data.testing}

  ## Questions
  If you have any questions about me or this project, please contact me:
  
  [**Github**](https://github.com/${data.userName})

  [**Email**](mailto:${data.email})

  ${renderLicenseSection(data.license)}
 `
}

module.exports = generateMarkdown;

