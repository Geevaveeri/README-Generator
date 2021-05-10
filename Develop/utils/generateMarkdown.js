// a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  
  switch (license) {
    case "GNU AGP Lv3":
       licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
      break;
    case "GNU GPLv3":
       licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

      break;
    case "GNU LGPLv3":
      licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
      break;
    case "Mozilla Public Liscense 2.0":
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case "Apache License 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "MIT License 2.0":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Boost Software License 1.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
    case "The Unlicense":
      licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      break;
  }
  return licenseBadge
};

// a function that returns the license information
function renderLicenseLink(license) {
  switch (license) {
    case "GNU AGP Lv3":
       licenseLink = "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available."
      break;
    case "GNU GPLv3":
       licenseLink = "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
      break;
    case "GNU LGPLv3":
      licenseLink = "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work."
      break;
    case "Mozilla Public Liscense 2.0":
      licenseLink = "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
      break;
    case "Apache License 2.0":
      licenseLink = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
      break;
    case "MIT License 2.0":
      licenseLink = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
      break;
    case "Boost Software License 1.0":
      licenseLink = "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
      break;
    case "The Unlicense":
      licenseLink = "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code."
      break;
  }
  return licenseLink
 };

// a function to generate markdown for README
function generateMarkdown(data) {
var licenseBadge = renderLicenseBadge(data.license);
var licenseLink = renderLicenseLink(data.license);
 
  return `# ${data.name}
  ${licenseBadge}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [Questions](#Questions)


## Description
${data.description} 

## Installation
${data.installation}

## Usage
https://youtu.be/-l-8x56nJt4
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## License
${licenseLink}

## Questions
If you have any questions, you can reach me at https://github.com/${data.username} or ${data.email}
`;
}

module.exports = generateMarkdown;
