// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }
  if (license === "GNU LGPLv3") {
    return "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
  }
  if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT"
  }
  if (license === "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if (license === "GNU LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return "No license is available for this project"
  }else {
    return `
      ### ${license}
      [![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})

      - [Link to License Page](${renderLicenseLink(license)})
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log(data)

  return `
  # ${data.title}

  ## Description

  * ${data.motivation}
  * ${data.problemSolved}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation

  * ${data.installation}

  ## Usage

  * ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributors
  
  * ${data.contribution}

  ## Tests

  * ${data.tests}

  ## Questions

  * [GitHub](https;//github/${data.github})
  * [Email](${data.email})

`;
}

module.exports = generateMarkdown;
