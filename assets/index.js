// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')

var markdown;

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'If applicable, provide a link to your live application.',
    'Please provide a short description of your project. (You can include things like your motivation, why you built it, what it solves and/or what you learned)',
    'Provide instructions for installing your repo',
    'Provide instruction and examples for using the project',
    'If applicable, insert a folder path for a screenshot of the application',
    'If applicable, List the GitHub profile links of any collaborators you worked with',
    'If applicable, list any third-party assets that require attribution. List the creators with links to their primary web presence in this section.',
    'If applicable, list any tutorials you used to help you create this project.',
    'What type of license did you use?',
    'What information about testing the project can you add?',
    'What is the name of your repo?',
    'What is your GitHub username?',
    'What is your email address?'
];
const [
    title, 
    link, 
    description, 
    installation, 
    usage, 
    imagePath, 
    collaborators, 
    thirdPartyAssets, 
    tutorials,
    license,
    test,
    repoName,
    gitUser,
    email
] = questions;

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'titleA',
            message: title
        },
        {
            type: 'input',
            name: 'linkA',
            message: link
        },
        {
            type: 'input',
            name: 'descriptionA',
            message: description
        },
        {
            type: 'input',
            name: 'installationA',
            message: installation
        },
        {
            type: 'input',
            name: 'usageA',
            message: usage
        },
        {
            type: 'input',
            name: 'imagePathA',
            message: imagePath
        },
        {
            type: 'input',
            name: 'collaboratorsA',
            message: collaborators
        },
        {
            type: 'input',
            name: 'thirdPartyAssetsA',
            message: thirdPartyAssets
        },
        {
            type: 'input',
            name: 'tutorialsA',
            message: tutorials
        },
        {
            type: 'list',
            name: 'licenseA',
            message: license,
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Other']
        },
        {
            type: 'input',
            name: 'testA',
            message: test
        },
        {
            type: 'input',
            name: 'repoNameA',
            message: repoName
        },
        {
            type: 'input',
            name: 'gitUserA',
            message: gitUser
        },
        {
            type: 'input',
            name: 'emailA',
            message: email
        }
        
    ])
    .then((data) => {
        markdown = generateMarkdown.createMarkdown(data)
        writeToFile('README.md', markdown);
    })
}


// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err)
            console.log(err);
        else {
            console.log('File written successfully');
        }
    })
}

// Function call to initialize app
init();
