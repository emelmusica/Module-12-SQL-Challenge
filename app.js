// Import inquirer and module containing database query

const inquirer = require('inquirer');
const db =require('./db/queries');

// function to start the application to display a list of choices to the user
function startApp() {
    inquirer.createPromptModule([
        {
            type: 'list',
            name: 'action',
            message: '', // don't forget to add message
            choices: [
                'View all departments',
                'view all roles',
                'View all employees', 
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an empoyee role',
                'Exit'
            ]
        }
    ])
}