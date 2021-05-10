// packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your project title:"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description for your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Provide installation instructions for your project:"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide usage information for your project:"
        },
        {
            type: "input",
            name: "contribution",
            message: "Provide contribution guidelines for your project:"
        },
        {
            type: "input",
            name: "test",
            message: "Provide testing instructions for your project:"
        },
        {
            type: "list",
            name: "license",
            message: "Please select your license:",
            choices: ["GNU AGP Lv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public Liscense 2.0", "Apache License 2.0", "MIT License 2.0", "Boost Software License 1.0", "The Unlicense"]
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        }
    ])

};

// function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, err => {

        if (err) {
            reject(err);
            return;
        } else {
            console.log("ReadMe complete!");
        }
    })
};

// function to initialize app
function init() {
    questions()
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(pageMarkdown => {
            return writeToFile(pageMarkdown);
        })
};

// Function call to initialize app
init();