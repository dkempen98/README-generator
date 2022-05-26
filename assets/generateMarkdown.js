// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, user, repo) {
  if (license) {
    return `https://img.shields.io/github/license/${user}/${repo}?style=flat-square`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function createMarkdown(data) {


  let markdown = `# ${data.titleA}

`;
  if (data.linkA) {
    markdown = markdown.concat(`${data.linkA}
    
`)    

  // Table of contents will check for whether each section exists and, if it does, add it with
  // a link to that section

  markdown = markdown.concat(`## Table of Contents

`)

  if (data.descriptionA) {
    markdown = markdown.concat(`[- Description](#description)
`)
  }
  if (data.installationA) {
    markdown = markdown.concat(`[- Installation](#installation)

`)
  }
  if (data.usageA) {
    markdown = markdown.concat(`[- Usage](#usage)

`)
  }
  if (data.collaboratorsA || data.thirdPartyAssetsA || data.tutorialsA) {
    markdown = markdown.concat(`[- Credits](#credits)

`)
  }
  if (data.testA) {
    markdown = markdown.concat(`[- Test](#test)

`)
  }
  if (data.gitUserA || data.emailA) {
    markdown = markdown.concat(`[- Questions](#questions)

`)
  }
  markdown = markdown.concat(`
`)

  }
  if (data.descriptionA) {
    markdown = markdown.concat(`## Description
    
${data.descriptionA}
    
`)    
  }
  if (data.installationA) {
    markdown = markdown.concat(`## Installation
    
${data.installationA}
    
`)    
  }
  if (data.usageA) {
    markdown = markdown.concat(`## Usage
    
${data.usageA}
    
`)    
  if (data.imagePathA) {
    markdown = markdown.concat(`\`\`\`md
![alt text](${data.imagePathA})
\`\`\`

`)  
    }
  }

// The credits section has three optional fields so we will need to loop through incrementing
// nested if's in case they need to use some but not all fields for the credits so that the
// ## Credits header will only appear if any credits are given but will appear no matter which
// ones are added in 

  if (data.collaboratorsA) {
    markdown = markdown.concat(`## Credits

Collaborators: ${data.collaboratorsA}

`)
    if (data.thirdPartyAssetsA) {
      markdown = markdown.concat(`Third Party Assets: ${data.thirdPartyAssetsA}

`)
    }
    if (data.tutorialsA) {
      markdown = markdown.concat(`Tutorials: ${data.tutorialsA}

`)
    }    
  } else if (data.thirdPartyAssetsA) {
      markdown = markdown.concat(`## Credits

Third Party Assets: ${data.thirdPartyAssetsA}

`)
    if (data.tutorialsA) {
      markdown = markdown.concat(`Tutorials: ${data.tutorialsA}

`)
    }
  } else if (data.tutorialsA) {
      markdown = markdown.concat(`## Credits
    
Tutorials: ${data.tutorialsA}

`)
    }
    if (data.testA) {
      markdown = markdown.concat(`## Test

${data.testA}

`)
    }

// Doing something similar here as above but trying a different layout instead of the nested if's

    if (data.gitUserA || data.emailA) {
      markdown = markdown.concat(`## Questions?

Still have any questions? Feel free to reach me using:

`)
      if(data.gitUserA) {
        markdown = markdown.concat(`GitHub Profile: [${data.gitUserA}](github.com/${data.gitUserA})

`)
      }
      if(data.emailA) {
        markdown = markdown.concat(`Email Address: ${data.emailA}

`)
      }
    }


  return markdown
}

module.exports = {createMarkdown};
