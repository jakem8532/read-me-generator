// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please enter your title!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for this project?',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'problemSolved',
            message: 'What problem does this project solve?',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install this project?',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use this project',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which licenses did you use for this project?',
            choices: ['MIT License', 'GNU LGPLv3', 'Apache License 2.0', 'N/A'],
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project?',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide examples of running your test here',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address!',
            validate: nameInput => {
                if(nameInput) {
                    return true
                }else {
                    console.log('Please fill out this field!')
                    return false
                }
            }
        },
        
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err)
            }
            
            resolve ({
                ok: true,
                message: 'File Created!'
            })
        })
    })
}

// Function call to initialize app
promptUser()
    .then(data => {
        return generateMarkdown(data)
    })
    .then(pageHTML => {
        return writeToFile(pageHTML)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse)
    })
    .catch(err => {
        console.log(err)
    })