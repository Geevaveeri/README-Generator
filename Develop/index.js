// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = readmeData => {

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
            message: "Provide contribution guidlines for your project:"
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
            choices: ["GNU AGP Lv3", "GNU GPLv3", "GNU LGPv3", "Mozilla Public Liscense 2.0", "Apache License 2.0", "MIT License 2.0", "Boost Software License 1.0", "The Unlicense"]
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("README.md", data, err => {


            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "ReadMe Created!"
            });
        })
    });
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

questions().then(readmeData => {
    console.log(readmeData);
});
