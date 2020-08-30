const Matriculas = require('../models/Matriculas');
const Pessoa = require('../models/Pessoa');
const Cursos = require('../models/Curso');

module.exports = {
    async save(req, res){
        const pessoa = await Pessoa.findAll({
            where: {
                cpf: req.body.cpf
            }
        });

        const curso = await Cursos.findAll({
            where: {
                id : req.body.id
            }
        });
        if(!pessoa || !curso){
            return res.status(400).json({ error: 'Não encontrado!' });
         }
        const matricula = await Matriculas.create({ curso_id: curso[0]['dataValues']['id'], pessoa_id: pessoa[0]['dataValues']['id']});
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
                pessoa_id: req.params['idPessoa'],
                curso_id: req.params['idCurso']
            }
        })
        res.json("Deletado com sucesso");
    }
}