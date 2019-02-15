select database();
SELECt * from client;
SELECt * from registration;
select * from cleaning;
SELECT `name`, `surname`,`client_phone` from client cl
INNER JOIN registration reg ON cl.id_reg = reg.id_reg ORDER BY cl.id_client;

SELECT `cleaning_date`, `cleaning_time` from cleaning cl
LEFT JOIN employees emp ON cl.id_employee = emp.id_employee;

SELECT `employee_name`, `employee_surname` from employees emp
RIGHT JOIN cleaning cl ON cl.id_employee = emp.id_employee ORDER BY cl.id_employee;