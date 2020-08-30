const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Pessoa = require('../models/Pessoa');
const Cursos = require('../models/Curso');
const Matriculas = require('../models/Matriculas');
const { Model } = require('sequelize');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);
Cursos.init(connection);
Matriculas.init(connection);
Matriculas.associate(connection.models);

module.exports = connection;