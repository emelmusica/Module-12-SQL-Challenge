DROP DATABASE IF EXISTS module_11_challenge;

CREATE DATABASE module_11_challenge;

-- Use correct database
USE module_11_challenge;

-- Create the Department table
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL
);

-- Create the Role table
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titles VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id iNT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create employee table
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);