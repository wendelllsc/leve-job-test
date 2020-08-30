const Curso = require('../models/Curso');

module.exports = {
    async buscarCurso(req, res){
        const curso = await Curso.findAll();
        res.json(curso);
    }
}