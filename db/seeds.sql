INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Eliot', 'Cleveland', 1, null),
('Olivia', 'Wilkinson', 7, 1),
('Rock', 'Lander', 8, 2),
('Max', 'Valentine', 4, 1),
('Lana', 'Kiddy', 3, 4),
('Louie', 'Dupuy', 10, 4),
('Katherine', 'Mansfield', 2, 10),
('Dora', 'Carrington', 2, 10),
('Edward', 'Bellamy', 9, 4),
('Octavia', 'Butler', 5, 1);

INSERT INTO role (title, salary, department_id) 
VALUES
('CEO', 100000, 3),
('Salesperson', 20000, 2),
('Widget Maker', 15000, 1),
('Operations Manager', 30000, 2),
('Sales Manager', 30000, 2),
('Controller', 40000, 3),
('Efficiecy Expert', 25000, 1),
('Custodian', 15000, 1),
('Security Guard', 20000, 1);

INSERT INTO department (name) VALUES
('Operations'),
('Sales'),
('Administration');
