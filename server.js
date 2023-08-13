const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');
const connection = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Define API 

//Get Departments
app.get('/api/departments', (req,res) => {
// Fetch and respond query functions with retrieved data
});

// Get roles
app.get('/api/roles', (req, res) =>{

});

// Get employees
app.get('/api/employees', (req, res) =>{

});

// Add department
app.post('/api/departments', (req, res) =>{
const { name } = req.body;
});

// Add Role
app.post('/api/roles', (req, res) => {
    const { tittle, salary, department_id } = req.body;
});

// Add an employee
app.post('/api/employees', (req, res) => {
    const employeeId = req.params.id;
    const { role_id } = req.body;
});

