const fs = require('fs')
const inquirer = require('inquirer')
inquirer.prompt([{
    name:'title',
    type:'input',
    message:'Enter title of your project: '
},{
    name:'description',
    type:'input',
    message:'Enter a brief description about your project: '
},{
    name:'installation',
    type:'input',
    message:'Installation: '
},{
    name:'usage',
    type:'input',
    message:'Usage Information: '
},{
    name:'license',
    type:'list',
    message:'License: ',
    choices:['a','b','c','d']
},{
    name:'contribution',
    type:'input',
    message:'Contribution Guidelines: '
},{
    name:'tests',
    type:'input',
    message:'Test Instructions '
},
{
    name:'github',
    type:'input',
    message:'Enter your Github URL: '
},
{
    name:'email',
    type:'input',
    message:'Enter your email: '
},
]).then(({title,description,installation,usage,license,contribution,tests,github,email})=>{
    // ${title},${description},${usage},${license},${contribution},${tests},${github},${email}
    const readme = `# ${title}
## Description
- ${description} 

## Usage
- ${usage}

## License
- ${license}

## Contributing
- ${contribution}

## Tests
- ${tests}

## Questions
- ${github}
- ${email}
    `
    fs.writeFile('README.md',readme,(err)=>err?console.error(err):console.log('SUCCESS! Readme file created.'))
})
