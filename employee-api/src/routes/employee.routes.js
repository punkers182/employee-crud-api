/*
* arquivo: routes/employee-routes.js
* descrição: arquivo responsavel pelas rotas da API
* data: 08/02/2023
* author: Lucas
*/

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> Definindo as rodas do CRUD - 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

//==> Rota responsável por listar todos os empregados: (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

//==> Rota responsável por listar um determinado employee por Id: (GET): localhost:3000/api/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById);

//==> Rota responsável por atualizar um determinado employee por Id: (PUT): localhost:3000/api/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById);

//==> Rota responsável por excluir um determinado employee por Id: (DELETE): localhost:3000/api/employees/:Id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router;
