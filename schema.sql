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