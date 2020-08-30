const Matriculas = require('../models/Matriculas');
const Pessoa = require('../models/Pessoa');
const Cursos = require('../models/Curso');

module.exports = {
    async save(req, res){
        const id_pessoa = req.params;
        const nomeCurso = req.body;

        const pessoa = await Pessoa.findByPk(id_pessoa['id']);
        const curso = await Cursos.findAll({
            where: {
                nomeCurso : nomeCurso['nomeCurso']
            }
        });

        if(!pessoa || !curso){
            return res.status(400).json({ error: 'Não encontrado!' });
        }

        const matricula = await Matriculas.create({ curso_id: curso[0]['dataValues']['id'], pessoa_id: id_pessoa['id']});
        res.json('Pessoa matriculada com sucesso.');
    },
    async getAll(req, res){
        const id = req.params;

        const matriculas = await Matriculas.findAll({
            where: {
                pessoa_id: id['id']
            }, include: 'curso'
        })
        res.json(matriculas)
    },
    async delete(req, res){
        await Matriculas.destroy({
            where: {
                id: req.params['id']
            }
        })
        res.json("Deletado com sucesso");
    }
}