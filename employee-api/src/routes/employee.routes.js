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

module.exports = router;