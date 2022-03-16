// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case 'MIT':
      return `[!License: MIT(https://img.shields.io/badge/License-MIT-yellow.svg)]`
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
  switch (license) {
    case 'MIT': 
      return `https://opensource.org/licenses/MIT`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `
      MIT License

      Copyright (c) [2022]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`
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
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

## Contribute
  ${data.contribute}

## Test
${data.test}

## Questions
  [Github](https://www.github.com/${data.github})

  ${data.email}
  
`;
}


