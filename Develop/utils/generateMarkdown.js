// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'GNU General Public License v3.0':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    default: 
      return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
 ${data.description}
## Table Of Content
  ### [Installation](#installtion)
  ### [Usage](#usage)
  ### [License](#license)
  ### [Contribute](#contribute)
  ### [Test](#test)
  ### [Questions](#questions)

## Installation
  ${data.instillation}

## Usage
  ${data.usage}

## License


## Contribute
  ${data.contribute}

## Test
${data.test}

## Questions
  [Github](https://www.github.com/${data.github})

  ${data.questions}
  
`;
}


