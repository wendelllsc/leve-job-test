const Pessoa = require('../models/Pessoa');
const { response } = require('express');

module.exports = {
    async save(req, res){
        const { nome, telefone, cpf } = req.body;
        await Pessoa.create({ nome, telefone, cpf });
        res.json("Pessoa criada com sucesso.");
    },
    async getAll(req, res){
        const pessoas = await Pessoa.findAll();
        res.json(pessoas);
    },
    async update(req, res){
        const { id, nome, telefone, cpf} = req.body;
        const novaPessoa = await Pessoa.update({ nome: nome, telefone: telefone, cpf: cpf}, {
            where: {
                id: id
            }
        });
        res.json(novaPessoa);
    },
    async delete(req, res){
        const id = req.params;
        await Pessoa.destroy({
            where: {
                id: id['id_pessoa']
            }
        })
        res.json('Pessoa deletada.');
    },
    async getById(req, res){
        const id = req.params;
        const pessoa = await Pessoa.findByPk(id['id'])
        res.json(pessoa);
    }
}