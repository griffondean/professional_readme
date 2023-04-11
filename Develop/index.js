// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// Array of questions for user input
const questions = [
    // Question for the Title of your project
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },

    // Question for the Description section
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:",
    },

    // Adding Table of Contents in the markdown.js

    // Question for the Installation section
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instructions:",
    },

    // Question for Usage section
    {
        type: "input",
        name: "usage",
        message: "Enter how we can use this project:",
    },

    // Question for License section
    {
        type: "list",
        name: "license",
        message: "Enter the project license:",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
        ],
    },

    // Question for Contributing section
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project:",
    },

    // Question for Tests section
    {
        type: "input",
        name: "tests",
        message: "Enter any testing instructions:",
    },

    // Github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },

    // Email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address?",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./README.md", data);
    });
}
// Function call to initialize app
init();
