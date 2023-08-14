INSERT INTO department (name)
VALUES ("Security Department"), ("Energy Department"), ("Research & Development"), ("Hospitality Team"), ("Management");

INSERT INTO role (title, salary, department_id)
VALUES ("Security Manager", 75000.00, 1), ("Senior Research Scientist", 120000.00, 3), ("Lead Engineer", 110000.00, 4), ("Guest Relations Specialist", 50000.00, 4), ("Chief Executive Officer", 250000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Smith", 1, 3), ("Elena", "Johnson", 2, 1), ("Michael", "Williams", 3, 2), ("Emily", "Brown", 5, 2), ("David", "Jones", 5, 2);
