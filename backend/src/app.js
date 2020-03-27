const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
// app.listen(3333);


/* 
  * Rota / Recurso 
*/

/**
* Métodos HTTP:
*
* GET: Busca/Listar uma informação do back-end
* POST: Cria uma informação no back-end
* PUT: Altera uma informação no back-end
* DELETE: deleta uma informação no back-end
*/

/**
*Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados na rota após "?" ( Filtros, Paginação )
* Route Params: Parâmetros utilizados para indentificar recursos
* Request Body: Corpo da requisoção, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQl, MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */