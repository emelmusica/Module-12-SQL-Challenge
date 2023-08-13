const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');
const connection = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Get Departments
app.get('/api/departments', (req, res) => {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get Roles
app.get('/api/roles', (req, res) => {
  connection.query('SELECT * FROM role', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get Employees
app.get('/api/employees', (req, res) => {
  connection.query('SELECT * FROM employee', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add Department
app.post('/api/departments', (req, res) => {
  const { name } = req.body;
  connection.query('INSERT INTO department (name) VALUES (?)', [name], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Department added successfully' });
  });
});

// Add Role
app.post('/api/roles', (req, res) => {
  const { title, salary, department_id } = req.body;
  connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Role added successfully' });
  });
});

// Add Employee
app.post('/api/employees', (req, res) => {
  const { first_name, last_name, role_id, manager_id } = req.body;
  connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Employee added successfully' });
  });
});

// Update Employee Role
app.put('/api/employees/:id', (req, res) => {
  const employeeID = req.params.id;
  const { role_id } = req.body;
  connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [role_id, employeeID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Employee role updated successfully' });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
