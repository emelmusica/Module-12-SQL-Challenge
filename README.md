# Module-12-SQL-Challenge

Our assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

# The application offers users interactive options to manage employee data using a MySQL database. It allows tasks like viewing, adding, and removing employees, departments, and roles. User selections are displayed instantly in the terminal, providing insights into the employee ecosystem.

As a business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

GIVEN a command-line application that accepts user input


WHEN I start the application


THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role


WHEN I choose to view all departments


THEN I am presented with a formatted table showing department names and department ids


WHEN I choose to view all roles


THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role


WHEN I choose to view all employees


THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to


WHEN I choose to add a department


THEN I am prompted to enter the name of the department and that department is added to the database


WHEN I choose to add a role


THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database


WHEN I choose to add an employee


THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database


WHEN I choose to update an employee role


THEN I am prompted to select an employee to update and their new role and this information is updated in the database

# Usage: 

- Install npm init -y to create a new .json file
- npm i
- npm i inquirer
- npm i mysql
- npm i console.table
- make sure to run .sql file in mySQL workbench before running server.js so that tables are able to render correctly
- run node server.js
- make sure server.js is connected to SQL before continuing
- run through prompts as required

# Tech used: 
- inquirer
- mySQL2
- console.table
- Javascript
- Node.js

# Project Repo & Video link:

https://github.com/emelmusica/Module-12-SQL-Challenge.git

https://www.youtube.com/watch?v=6IxY09Csigo


![Alt text](<assets/Screen shot for readme.png>)