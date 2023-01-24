/*
* arquivo: server.js
* descrição: arquivo responsavel por toda a configuração e execução do back-end('employee')
* data: 23/01/2023
* author: Lucas
*/

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log('Aplicação sendo executada na porta:', port);
});
