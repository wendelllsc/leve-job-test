const Matriculas = require('../models/Matriculas');
const Pessoa = require('../models/Pessoa');
const Cursos = require('../models/Curso');

module.exports = {
    async save(req, res){
        const pessoa = await Pessoa.findOne({
            where: {
                cpf: req.body.cpf
            }
        });

        const curso = await Cursos.findOne({
            where: {
                id : req.body.id
            }
        });
        
        if(!pessoa || !curso){
            return res.status(404).json({ error: 'Pessoa ou curso encontrado!' });
         }else{
            const matriculado = await Matriculas.findOne({
                where:{
                    pessoa_id: pessoa['dataValues']['id'],
                    curso_id: curso['dataValues']['id']
                }
            })
    
            if(!matriculado){
                const matricula = await Matriculas.create({ curso_id: curso['dataValues']['id'], pessoa_id: pessoa['dataValues']['id']});
                res.status(201).json('Pessoa matriculada com sucesso.');    
            }else{
                res.status(404).json('Aluno já matriculado neste curso.');
            }
         }
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