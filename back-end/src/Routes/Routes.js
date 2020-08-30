const express = require('express');
const routes = express.Router();
const PessoaController = require('../Controllers/PessoaController');
const MatriculaController = require('../Controllers/MatriculaController');
const CursoController = require('../Controllers/CursoController');

// Pessoa
routes.post('/pessoa', PessoaController.save);
routes.get('/pessoa', PessoaController.getAll);
routes.get('/pessoa/editar/:id', PessoaController.getById);
routes.put('/pessoa', PessoaController.update);
routes.delete('/pessoa/:id_pessoa', PessoaController.delete);

//Matricula
routes.post('/matricula/:id', MatriculaController.save);
routes.get('/matricula/:id', MatriculaController.getAll);
routes.delete('/matricula/:id', MatriculaController.delete);

// Cursos
routes.get('/cursos', CursoController.buscarCurso);

module.exports = routes;