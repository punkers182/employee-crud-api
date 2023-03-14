/*
* arquivo: routes/employee-routes.js
* descrição: arquivo responsavel pela lógica do CRUD (API - Employee)
* data: 08/02/2023
* author: Lucas
*/

const db = require('../config/database');

// ==> Método responsável por criar um novo 'Employee'::
exports.createEmployee = async(req, res) => {
  const { name, job_role, salary, birth, employee_registration } = req.body;
  const { rows } = await db.query(
    "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
      [name, job_role, salary, birth, employee_registration]
  );

  res.status(201).send({
    message: 'Employee added successfully!',
    body: { 
      employee: {name, job_role, salary, birth, employee_registration}
    },
  });
};

//==> Método responsável por listar todos os 'Employees':
exports.listAllEmployees = async(req, res) => {
  const response = await db.query('select * from employee ORDER BY name ASC');
  res.status(200).send(response.rows);
};