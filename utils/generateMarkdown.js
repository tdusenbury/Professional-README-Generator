// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) { 
  if (license === "Apache") {
    return `https://img.shields.io/badge/license-${license}-blue`
  }
  else if (license === "Eclipse") {
    return `https://img.shields.io/badge/license-${license}-green`
  }
  else if (license === "ISC") {
    return `https://img.shields.io/badge/license-${license}-yellow`
  }
  else if (license === "MIT") {
    return `https://img.shields.io/badge/license-${license}-orange`;
  } 
  else if (license === "Mozilla") {
    return `https://img.shields.io/badge/license-${license}-purple`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/license/${license}`
 }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
//This is the 

function generateMarkdown(data) {
  return `
  # ${data.title}


  ${renderLicenseSection(data.license)}


  ##Table of Contents

  - [**Description**]
  - [**Installation**]
  - [**Usage**]
  - [**Contribution**]
  - [**Test**]
  - [**Questions**]

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
  ${data.contact}

  If you have any questions about me or this project, please contact me:
  
    - [**Github**:](https://github.com.${data.userName})
    - [**Email**:](mailto: ${data.questionsEmail})

  ## License
 `
}



module.exports = generateMarkdown;


// function renderLicenseBadge(license) {
//   if (licenseOption === 'Apache License 2.0') {
//     licenseOption = 'ApacheLicense2.0';
//     licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
//   };
//   if (licenseOption === 'Boost Software License 1.0') {
//     licenseOption = 'BoostSoftwareLicense1.0';
//     licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/'
//   };
//   if (licenseOption === 'GNU AGPLv3') {
//     licenseOption = 'GNUAGPLv3';
//     licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/'
//   };
//   if (licenseOption === 'GNU GPLv3') {
//     licenseOption = 'GNUGPLv3';
//     licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'
//   };
//   if (licenseOption === 'GNU LGPLv3') {
//     licenseOption = 'GNULGPLv3';
//     licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/'
//   };
//   if (licenseOption === 'MIT License') {
//     licenseOption = 'MITLicense';
//     licenseLink = 'https://choosealicense.com/licenses/mit/'
//   };
//   if (licenseOption === 'Mozilla Public License 2.0') {
//     licenseOption = 'MozillaPublicLicense2.0';
//     licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/'
//   };
//   if (licenseOption === 'The Unlicense') {
//     licenseOption = 'The Unlicense';
//     licenseLink = 'https://choosealicense.com/licenses/unlicense/'
//   };
// }
